import Head from 'next/head';
import { TITLE } from '../../types/types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import theme from '../../styles/theme';
import { CssBaseline, ThemeProvider } from '@material-ui/core';


const Layout: React.FC<TITLE> = ({ children, title = 'MyPage'}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
                <title>{title} | Satoshi Tech Portfolio</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    )
}

export default Layout;
