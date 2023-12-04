export async function loadBlogs() {
    const blog_Response = await fetch('http://localhost:3000/api/blogs')
    const blog_Data = await blog_Response.json()

    return blog_Data
}