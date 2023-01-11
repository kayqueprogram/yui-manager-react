import styles from './Home.module.css';
import saving from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo a <span>Yui-manager</span>!</h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newProject" text="Criar novo projeto" />
            <img src={saving} alt="Yui-manager" />
        </section>
    )
}

export default Home