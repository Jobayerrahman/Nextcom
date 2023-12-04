export async function loadAbout() {
    const about_Response = await fetch('http://localhost:3000/api/abouts')
    const about_Data = await about_Response.json()

    return about_Data
}