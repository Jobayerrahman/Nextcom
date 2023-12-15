import { Component } from "react";
import Blog from "../../components/Blog/Blog";
import TopNagivation from "../../components/TopNavigation/TopNavigation";

class ContactPage extends Component{
    render(){
        return(
            <div className="">
                <TopNagivation/>
                <Blog/>
            </div>
        )
    }
}


export default ContactPage;