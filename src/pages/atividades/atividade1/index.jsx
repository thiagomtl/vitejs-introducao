import { Link } from "react-router";

import styles from './index.module.css';

function Atividade1() {

  return (
    <div className={styles.container}>
      <div className={styles.containerLista}>
        <h1>Exemplos</h1>
        <Link to="/exemplo/1">Exemplo</Link><br />
        <Link to="/exemplo/2">Exemplo 2</Link><br />
        <Link to="/exemplo/3">Exemplo 3</Link><br />
      </div>
      <div className={styles.containerLista}>
        <h1>Atividades</h1>
        <Link to="/exemplo/1">Atividade 1</Link><br />
        <Link to="/atividade2">Atividade 2</Link>
        
        <img src="/cs.jpg" alt="" />
      </div>
    </div>
  )
}

export default Atividade1;