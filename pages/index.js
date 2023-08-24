import Default from '../app/layouts/Default/Default'
import HomePage from '../app/templates/HomePage/HomePage'


export async function getStaticProps(){
  const res1 = await fetch('http://localhost:3000/api/serviceapi');
  const res2 = await fetch('http://localhost:5000/blogs');
  const data1 = await res1.json()
  const data2 = await res2.json()
  
  return { 
      props:{
          services: data1,
          blogs:data2,
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



// export async function getServerSideProps(){
//   const res1 = await fetch('http://localhost:3000/api/serviceapi');
//   const res2 = await fetch('http://localhost:5000/blogs');
//   const data1 = await res1.json()
//   const data2 = await res2.json()
  
//   return { 
//       props:{
//           services: data1,
//           blogs:data2,
//       }, 
//   }

// }
