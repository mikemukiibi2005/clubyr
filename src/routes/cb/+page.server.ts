import type { Actions } from "./$types";
import { search_by_name_or_domain } from "@/models/utils";

export const actions: Actions = {
    search: async ({request}) => {
        // Get data
        const data = await request.formData();
        const search_string = data.get("club")?.toString() || "";

        // Search
        const results = await search_by_name_or_domain(search_string) as {name:string,domain:string}[];

        return {
            success:true,
            results: results,
        }
    }
};