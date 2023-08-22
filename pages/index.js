import Default from '../app/layouts/Default/Default'
import HomePage from '../app/templates/HomePage/HomePage'
export default function Home({services}) {
  return (
    <Default>
      <HomePage services={services}/>
    </Default>
  )
}


export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/serviceapi');
  const data = await res.json()
  
  return { 
      props:{
          services: data,
      }, 
  }
}
