import Service from "./Service";
import styles from './AllService.module.scss';
import HomeContext from "../../libs/contextApi/HomeContext";
function AllService({services}){
    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     const fetchData = async()=>{
    //         const res = await fetch('/api/serviceapi');
    //         const data = await res.json()
    //         setServices(data);
    //     }

    //     fetchData()
    //         .catch(console.error);
    // }, []);
    return(
        <>
            <div className={styles.allServiceWrapper}>
                <h2>What We Do</h2>
                <div className={styles.allServiceDescribtion}>Lorem ipsum is simply dummy text printing typesetting industry 
                lorem ipsum has dummy. Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy. 
                Lorem ipsum is simply dummy text printing typesetting industry lorem. </div>
                <HomeContext.Consumer>
                    {({services}) =>(
                        <div className={styles.allService}>
                            {(services.service).map((s)=> <Service key={s.id} service={s}/>)}
                        </div>
                    )}
                </HomeContext.Consumer>
            </div>
        </>
    );
}

export default AllService;

