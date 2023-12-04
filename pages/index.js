import React, { Component } from 'react';
import Default from '../app/layouts/Default/Default';
import HomePage from '../app/templates/HomePage/HomePage';
import HomeContext from '../app/libs/contextApi/HomeContext';
import { loadTopBanner } from '../app/libs/loadApi/LoadTopBanners';
import { loadService } from '../app/libs/loadApi/LoadServices';
import { loadAbout } from '../app/libs/loadApi/LoadAbouts';
import { loadBlogs } from '../app/libs/loadApi/LoadBlogs';

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

Home.defaultProps = {
  topBanner: [],
  service: [],
  about: [],
  blog:[]
}

export async function getStaticProps(){
  const topBanner = await loadTopBanner();
  const service = await loadService();
  const about = await loadAbout();
  const blog = await loadBlogs()
  return { 
      props:{
          topBanner: topBanner?.data || null,
          service: service?.data || null,
          about: about?.data || null,
          blog: blog?.data || null
      }, 
      revalidate: 1,
  }
}

export default Home;