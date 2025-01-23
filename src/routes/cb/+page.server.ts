import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { search_by_name } from "@/models/utils";

export const load: PageServerLoad = async ({params}) => {
    return
};

export const actions: Actions = {
    search: async ({request}) => {
        // Get data
        const data = await request.formData();
        const search_string = data.get("club")?.toString() || "";

        const results = await search_by_name(search_string) as {name:string,domain:string}[];

        return {
            success:true,
            results: results,
        }
    }
};