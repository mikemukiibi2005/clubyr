import { pb } from "@/models/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    pb.authStore.clear()
};