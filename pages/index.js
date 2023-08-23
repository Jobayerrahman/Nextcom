import Default from '../app/layouts/Default/Default'
import HomePage from '../app/templates/HomePage/HomePage'


export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/serviceapi');
  const data = await res.json()
  
  return { 
      props:{
          services: data,
      }, 
  }
}

export default function Home({services,blogs}) {
  return (
    <Default>
      <HomePage services={services} blogs={blogs}/>
    </Default>
  )
}



export async function getServerSideProps(){
  const res = await fetch('http://localhost:5000/blogs');
  const data = await res.json()

  return{ props:{blogs:data}}

}
