import { NextRequest, NextResponse } from 'next/server'
import { guestBase } from '../../airtable'
import axios from 'axios'

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
        ],
        filterByFormula: `Group = "${code}"`,
    }).all()

    const guestsIds = guests.map(guest => guest.id)


    await guestBase('General View').update(guestsIds.map(guestId => {
        return {
            id: guestId,
            fields: {
                "Confirmation 0": (guestsGoingIds as any[]).includes(guestId) ? "Yes" : "No",
                "Email": (guestsGoingIds as any[]).includes(guestId) ? email : "",
                "Phone Number": (guestsGoingIds as any[]).includes(guestId) ? phone : "",
            }
        }
    }))

    try {
        const emailHookUrl = process.env.EMAIL_HOOK_URL
        if (!emailHookUrl) {
            throw new Error("EMAIL_HOOK_URL is not set");
        }
        await axios.post(emailHookUrl, {
            email: email,
            people: guestsGoingNames,  
        })
    } catch (error) {
        console.log(error)
    }

    return NextResponse.json({
        guestsIds,
        guestsGoingIds,
    }, { status: 200 })



}