import Default from '../app/layouts/Default/Default'
import HomePage from '../app/templates/HomePage/HomePage'


export async function getStaticProps(){
  const topBanner_Response = await fetch('http://localhost:3000/api/services');
  const service_Response = await fetch('http://localhost:3000/api/services');
  const blog_Response = await fetch('http://localhost:5000/blogs');
  const topBanner_Data = await topBanner_Response.json()
  const service_Data = await service_Response.json()
  const blog_Data = await blog_Response.json()
  return { 
      props:{
          topBanner: topBanner_Data,
          services: service_Data.data,
          blogs: blog_Data
      }, 
  }
}

export default function Home({topBanner,services,blogs}) {
  return (
    <Default>
      <HomePage topBanner={topBanner} services={services} blogs={blogs}/>
    </Default>
  )
}
