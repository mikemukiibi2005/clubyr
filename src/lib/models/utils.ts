import { pb } from "./db";

// Find club by domain
export const find_by_domain = async (domain:String) => {
    const record = await pb.collection("clubs").getFirstListItem(`domain="${domain}"`);

    if (!record) {
        return {
            success: false,
            club: record,
        }
    }

    return {
        success: false,
        club: record,
    }
}