import { NextRequest, NextResponse } from 'next/server'
import { guestBase } from '../airtable'

export async function POST(request: NextRequest) {
    const body = await request.json()

    const { groupCode } = body

    const groups = await guestBase('General View').select({
        // Selecting the first 3 records in Grid view:
        view: "Grid view",
        cellFormat: "json",
        filterByFormula: `Group = "${groupCode}"`,
        fields: [
            "Group",
            "Name",
            "Language",
            "Display Name",
            "Confirmation 0",
        ],
    }).all()

    if (!groups.length) {
        return NextResponse.json(
            {
                error: 'No group found',
            },
            { status: 404 }
        )
    }







    // const guestsToReturn = guests.map((guest) => guest._rawJson.fields)

    return NextResponse.json(
        groups.map((group) => ({
            id: group.id,
            name: group.fields["Display Name"],
            language: group.fields.Language,
            confirmed: group.fields["Confirmation 0"] === "Yes"
        })),
        { status: 200 }
    )
}