import Header from "../../modules/Header/Header";
import styles from './Default.module.css'
export default function Default({Children}){
        return(
            <div className={styles.default}>
                <Header/>
                <div>{Children}</div>
            </div>
        );
}