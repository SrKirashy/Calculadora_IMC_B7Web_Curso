import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
    item: Level;
}
export const GridItem = ({item}: Props) => {
    return(
        <>
        <div className={styles.main} style={{backgroundColor: item.color}} >
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} alt="" width='30px'></img>}
                {item.icon === 'down' && <img src={downImage} alt="" width='30px'></img>}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourIMC &&
                <div className={styles.yourIMC}>Seu IMC é de {item.yourIMC.toFixed(2)} kg/m²</div>
            }


            <div className={styles.gridInfo}>{`Seu imc está entre: ${item.imc[0]} e ${item.imc[1]}`}</div>
        </div>
        </>
    );
}