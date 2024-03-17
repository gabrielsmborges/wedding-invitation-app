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
            "Confirmation 1"
        ],
    }).all()

    const filteredGroup = groups.filter((group) => group.fields["Confirmation 0"] === "Yes")

    if (!filteredGroup.length) {
        return NextResponse.json(
            {
                error: 'No group found',
            },
            { status: 404 }
        )
    }

    return NextResponse.json(
        filteredGroup.map((group) => ({
            id: group.id,
            name: group.fields["Display Name"],
            language: group.fields.Language,
            confirmed: group.fields["Confirmation 0"] === "Yes",
            confirmation1: group.fields["Confirmation 1"] === "Yes"
        })),
        { status: 200 }
    )
}