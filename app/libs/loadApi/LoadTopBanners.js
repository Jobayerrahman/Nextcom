import { assetPrefix } from "../../../next.config";
export async function loadTopBanner() {
    const topBanner_Response = await fetch(`${assetPrefix}/api/topbanner`)
    const topBanner_Data = await topBanner_Response.json()

    return topBanner_Data
}