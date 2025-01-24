import { pb } from "@/models/db";
import type { Actions } from "./$types";

export const actions: Actions = {
    create: async ({request}) => {
        // Get data
        const data = await request.formData();

        // let club_name = data.get("name")?.toString();
        // let club_domain = data.get("domain")?.toString();
        // let club_about = data.get("about")?.toString();
        // let club_cover = data.get("cover");

        // Save
        const club_record = await pb.collection("clubs").create(data);

        return {success: true, id: club_record.id, domain: club_record.domain};
    }
};