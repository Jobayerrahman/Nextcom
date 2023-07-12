import Header from "../../modules/Header/Header";
import Footer from "../../modules/Footer/Footer";
import styles from './Default.module.scss'
export default function Default({children}){
        return(
            <div className={styles.default}>
                <Header/>
                <div>{children}</div>
                <Footer/>
            </div>
        );
}