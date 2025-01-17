import type { Actions } from "./$types";

export const actions: Actions = {
    signin: async ({request}) => {
        // Get data
        const data = await request.formData()

        // Set cookies

        // Redirect to feed
    }
};