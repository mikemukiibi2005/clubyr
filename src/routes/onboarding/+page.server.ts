import { pb } from "@/models/db";
import type { Actions } from "./$types";

export const actions: Actions = {
    create: async ({request}) => {
        // Get data
        const data = await request.formData()

        // Get name
        let name = data.get("club")?.toString()

        // Save
        const club_record = await pb.collection("clubs").create({
            name,
        })

        return {success: true, id: club_record.id}
    }
};