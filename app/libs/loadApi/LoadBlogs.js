import { assetPrefix } from "../../../next.config";
export async function loadBlogs() {
    const blog_Response = await fetch(`${assetPrefix}/api/blogs`)
    const blog_Data = await blog_Response.json()

    return blog_Data
}