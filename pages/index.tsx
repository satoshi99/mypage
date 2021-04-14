import Head from 'next/head';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | Satoshi Tech Portfolio</title>
      </Head>
        <div className="wrapper">
      <div className="text">
        <h1>Satoshi Tech Portfolio</h1>
        <div>
          <h3>my brain<br/><br/>my creativity<br/><br/>my words ...</h3>
        </div>
      </div>
      <div className="link-block">
        <ul>
          <li>
          <Link href="/blog">
            <a>
              Tech Blog ...

            </a>
          </Link>
          </li>
          <li>
          <Link href="/about">
          <a>
              About ...
              
            </a>
          </Link>
          </li>
          <li>
          <Link href="/contact">
          <a>
              Contact ...
              
            </a>
          </Link>
          </li>
        </ul>
      </div>
      <div className="circle"></div>
      <div className="square"></div>
      <div className="vertical-line"></div>
      <div className="horizon-line"></div>
      </div>
    </>
  )
}

export default HomePage;
