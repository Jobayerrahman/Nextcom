import Header from "../../modules/Header/Header";
import styles from './Default.module.css'
export default function Default({children}){
        return(
            <div className={styles.default}>
                <Header/>
                <div>{children}</div>
            </div>
        );
}