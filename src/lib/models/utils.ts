import { pb } from "./db";

// Find club by domain
export const find_by_domain = async (domain:string) => {
    const record = await pb.collection("clubs").getFirstListItem(`domain="${domain}"`);

    if (!record) {
        return {
            success: false,
            club: record,
        };
    }

    return {
        success: false,
        club: record,
    };
}

// Find club by name
export const search_by_name = async (search_string:string) => {
    const results = await pb.collection("clubs").getList(1, 5,
        {
            filter: `name?~"${search_string}"`
        }
    );

    const clubs = results.items.map(result => {
        return {name: result?.name as string, domain: result?.domain as string}
    })
    
    return clubs
}