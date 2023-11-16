import { NextRequest, NextResponse } from 'next/server'
import { guestBase } from '../airtable'

export async function GET(request: NextRequest) {
  const guests = await guestBase('General View').select({
    // Selecting the first 3 records in Grid view:
    view: "Grid view",
    cellFormat: "json",
    fields: [
      "Name",
      "Group",
      "Email",
      "Confirmation 0",
      "Confirmation 1",
      "Confirmation 2",
    ],
  }).all()



  // const guestsToReturn = guests.map((guest) => guest._rawJson.fields)

  return NextResponse.json(guests, { status: 200 })
}