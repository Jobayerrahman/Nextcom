import { assetPrefix } from "../../../next.config";
export async function loadAbout() {
    const about_Response = await fetch(`${assetPrefix}/api/abouts`)
    const about_Data = await about_Response.json()

    return about_Data
}