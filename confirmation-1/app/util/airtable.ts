import Airtable from "airtable";

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey) {
    throw new Error("AIRTABLE_API_KEY is not set");
}

if (!baseId) {
    throw new Error("AIRTABLE_BASE_ID is not set");
}

export const guestBase = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);

