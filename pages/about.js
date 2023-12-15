import { Component } from 'react';
import Default from '../app/layouts/Default/Default';
import { loadAbout } from '../app/libs/loadApi/LoadAbouts';
import AboutPage from '../app/templates/AboutPage/AboutPage';
import HomeContext from '../app/libs/contextApi/HomeContext';
class About extends Component{
  render(){
    const {about} = this.props;
    return (
      <Default>
        <HomeContext.Provider value={{abouts: {about}}}>
          <AboutPage/>
        </HomeContext.Provider>
      </Default>
    )
  }
}

About.defaultProps = {
    about: []
}

export async function getServerSideProps(){
  const about = await loadAbout();

  return {
    props:{
      about: about?.data || [],
    },
  }
}

export default About;