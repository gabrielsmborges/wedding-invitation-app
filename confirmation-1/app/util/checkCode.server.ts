import { guestBase } from "./airtable"

export type GroupCodeType = {
    id: string,
    name: string,
    language: string,
    confirmed: boolean,
}

export const checkCodeAndLogin = async (code?: string): Promise<GroupCodeType[]> => {

    if (!code) {
        // return error
        throw new Error("No code provided")
    }

    const groups = await guestBase('General View').select({
        // Selecting the first 3 records in Grid view:
        view: "Grid view",
        cellFormat: "json",
        filterByFormula: `Group = "${code}"`,
        fields: [
            "Group",
            "Name",
            "Language",
            "Display Name",
            "Confirmation 0",
            "Confirmation 1"
        ],
    }).all()

    if (!groups.length) {
        // return error
        throw new Error("No group found with that code")
    }

    const res = groups.map((group) => {
        if (group.fields["Confirmation 0"] !== "Yes") {
            return undefined
        }

        return {
            id: group.id,
            name: group.fields["Display Name"],
            language: group.fields.Language,
            confirmed: group.fields["Confirmation 1"] === "Yes" && group.fields["Confirmation 0"] === "Yes"
        }
    })



    return res as GroupCodeType[]

}