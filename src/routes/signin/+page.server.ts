import type { Actions } from "./$types";
import { pb } from "@/models/db";

export const actions: Actions = {
    signin: async ({request}) => {
        // Get data
        const data = await request.formData()

        // Set cookies
        const email = data.get("email")?.toString() || "";
        const pass = data.get("password")?.toString() || "";

        const auth_data = await pb.collection("users").authWithPassword(
            email,
            pass,
        )

        

        // Redirect to feed
    }
};