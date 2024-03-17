import { NextRequest, NextResponse } from 'next/server'
import { guestBase } from '../../airtable'
import axios from 'axios'
import { enData, ptData } from '../../email'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function GET(
    request: NextRequest,
    { params }: { params: { code: string } }
) {
    const code = params.code

    const guests = await guestBase('General View').select({
        view: "Grid view",
        cellFormat: "json",
        fields: [
            "Name",
            "Group",
            "Confirmation 0",
        ],
        filterByFormula: `Group = "${code}"`,
    }).all()

    if (!guests.length) {
        return NextResponse.json(
            {
                error: 'No group found',
            },
            { status: 404 }
        )
    }
    const overallStatus = guests.some((guest) => guest.fields["Confirmation 0"] === "Pending") ? "Pending" : "Done"

    return NextResponse.json({
        overallStatus,
        guests: guests.map(guest => {
            return {
                id: guest.id,
                name: guest.fields.Name,
                group: guest.fields.Group,
                "Confirmation 0": guest.fields["Confirmation 0"],
            }

        }),
    }, { status: 200 })
}

export async function POST(
    request: NextRequest,
    { params }: { params: { code: string } }
) {
    const code = params.code
    const body = await request.json()

    const { guestsGoingIds, guestsGoingNames, email, phone } = body

    const guests = await guestBase('General View').select({
        view: "Grid view",
        cellFormat: "json",
        fields: [
            "Name",
            "Group",
            "Confirmation 0",
            "Language"
        ],
        filterByFormula: `Group = "${code}"`,
    }).all()

    const guestsIds = guests.map(guest => guest.id)

    // find the language of the group
    const language = guests[0].fields.Language as "PT" | "EN"

    await guestBase('General View').update(guestsIds.map(guestId => {
        return {
            id: guestId,
            fields: {
                "Confirmation 0": (guestsGoingIds as any[]).includes(guestId) ? "Yes" : "No",
                "Email": email,
                "Phone Number": phone,
            }
        }
    }))

    try {
        const templateData = language === "PT" ? ptData(guestsGoingNames) : enData(guestsGoingNames)
        await sgMail.send({
            templateId: process.env.SENDGRID_TEMPLATE_ID as string,
            from: {
                email: "gabrielsmborges@gmail.com",
                name: "Gabriel Borges",
            },
            to: email,
            personalizations: [{
                to: [{
                    email,
                }],
                dynamicTemplateData: templateData,
            }]
        })

    } catch (error) {
        // Do nothing
    }

    return NextResponse.json({
        guestsIds,
        guestsGoingIds,
    }, { status: 200 })



}