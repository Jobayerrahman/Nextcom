import React, { Component } from 'react';
import Default from '../app/layouts/Default/Default';
import ContactPage from '../app/templates/ContactPage/ContactPage';
import HomeContext from '../app/libs/contextApi/HomeContext';
import { loadBlogs } from '../app/libs/loadApi/LoadBlogs';

class Contact extends Component{
    render(){
        const { blog } = this.props;
        return (
            <Default>
                <HomeContext.Provider value={{blogs:{blog}}}>
                    <ContactPage/>
                </HomeContext.Provider>
            </Default>
        );
    }
}

Contact.defaultProps = {
    blog: [],
}


export async function getServerSideProps(){
    const blog = await loadBlogs();

    return{
        props:{
            blog: blog?.data || [],
        },
    }
}

export default Contact;