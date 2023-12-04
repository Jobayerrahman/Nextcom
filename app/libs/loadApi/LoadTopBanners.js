export async function loadTopBanner() {
    const topBanner_Response = await fetch('http://localhost:3000/api/topbanner')
    const topBanner_Data = await topBanner_Response.json()

    return topBanner_Data
}