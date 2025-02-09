import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { find_by_domain } from "@/models/utils";
import {env} from "$env/dynamic/public";
import type { RecordModel } from "pocketbase";

export const load: PageServerLoad = async ({params}) => {
    const club_domain = params.domain;

    if (!club_domain.length) {
        redirect(303, "/");
    }

    // Find club by domain
    const { club } : {club: RecordModel} = await find_by_domain(club_domain);
    const {id, name, domain, about, category, cover, collectionId} = club;

    return {
        id,
        name,
        domain,
        about,
        category,
        cover_photo: cover,
        collection_id: collectionId,
        base_url: env.POCKETBASE_URL
    }
};