import Link from 'next/link';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
          <h1>Satoshi Yoshida Portfolio</h1>
          <h3>my brain<br/>my creativity<br/>my words ...</h3>

      </div>
    );   
}

export default Home;
