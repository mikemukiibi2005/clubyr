import { pb } from "@/models/db";
import type { Actions } from "./$types";

export const actions: Actions = {
    create: async ({request}) => {
        // Get data
        const data = await request.formData()

        let club_name = data.get("club")?.toString()
        let club_domain = data.get("domain")?.toString()

        // Save
        const club_record = await pb.collection("clubs").create({
            name: club_name,
            domain: club_domain,
        })

        return {success: true, id: club_record.id}
    }
};