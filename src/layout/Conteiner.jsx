import styles from "./Conteiner.module.css"

function Container(props){
    return <div className={styles.min_altura}>{props.children}</div>
    
} 

export default Container