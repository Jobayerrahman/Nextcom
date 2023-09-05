import React, { Component } from 'react';
import Default from '../app/layouts/Default/Default';
import HomePage from '../app/templates/HomePage/HomePage';
import HomeContext from '../app/libs/contextApi/HomeContext';

class Home extends Component{
  render(){
    const {topBanner, service, about, blog} = this.props;
    return (
      <Default>
        <HomeContext.Provider value={{topBannerItems:{topBanner}, services:{service}, abouts:{about}, blogs:{blog}}}>
          <HomePage/>
        </HomeContext.Provider>
      </Default>
    )
  }
}

export async function getStaticProps(){
  const topBanner_Response = await fetch('http://localhost:3000/api/topbanner');
  const service_Response = await fetch('http://localhost:3000/api/services');
  const about_Response = await fetch('http://localhost:3000/api/abouts');
  const blog_Response = await fetch('http://localhost:3000/api/blogs');
  const topBanner_Data = await topBanner_Response.json()
  const service_Data = await service_Response.json()
  const about_Data = await about_Response.json()
  const blog_Data = await blog_Response.json()
  return { 
      props:{
          topBanner: topBanner_Data.data,
          service: service_Data.data,
          about: about_Data.data,
          blog: blog_Data.data
      }, 
  }
}

export default Home;