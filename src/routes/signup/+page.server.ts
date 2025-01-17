import { pb } from "@/models/db";
import type { Actions } from "./$types";

export const actions: Actions = {
    signup: async ({request}) => {
        // Get data
        const data = await request.formData()

        const username = data.get('username')
        const password = data.get('password')

        // Save
        await pb.collection('users').create({
            "password": password?.toString(),
            "passwordConfirm": password?.toString(),
            "email":username?.toString(),
            "emailVisibility":true,
        })

        return {success: true}
    }
};