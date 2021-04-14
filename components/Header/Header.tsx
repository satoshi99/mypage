import React, { useState } from 'react';
import Link from 'next/link';
import CssBaseline from '@material-ui/core/CssBaseline';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import FaceIcon from '@material-ui/icons/Face';
import ContactMailSharpIcon from '@material-ui/icons/ContactMailSharp';
import styles from './Header.module.scss';
import Menu from "@material-ui/icons/Menu";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    appbar: {
        display: 'flex',
        width: '100%',
        transition: 'all 150ms ease 0s',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        position: 'absolute',
      },
      toolbar: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        "@media (min-width: 576px)": {
            maxWidth: "540px"
          },
          "@media (min-width: 768px)": {
            maxWidth: "720px"
          },
          "@media (min-width: 992px)": {
            maxWidth: "960px"
          },
          "@media (min-width: 1200px)": {
            maxWidth: "1140px"
          },
        minHeight: "50px",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexWrap: "nowrap",
      },
      menuIcon: {
          color: "white",
      },
      drawerPaper: {
        width: "260px",
        backgroundColor: '#e2f1f8',
      },
      drawerItem: {
          height: "80px",
          margin: '0 auto',
          paddingLeft: '30px',
          width: "80%",
      },
});

const Header:React.FC = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <React.Fragment>
      <CssBaseline />
        <header className={styles.header}>
            <AppBar position="static" color="primary" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                        <Link href='/'>
                            <a data-testid="home-nav">
                                <Typography variant="h6" className={styles.title}>
                                    SATOSHI TECH PORTFOLIO
                                </Typography>
                            </a>
                        </Link>
                    <div className={styles.rightlink}>
                    <Hidden smDown implementation="css">
                        <Link href="/blog">
                            <a data-testid="blog-nav" className={styles.linkitem}>
                            <Typography>
                                TECH BLOG
                            </Typography>
                            </a>
                        </Link>
                        <Link href="/about">
                            <a data-testid="about-nav" className={styles.linkitem}>
                            <Typography>
                                ABOUT
                            </Typography>
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a data-testid="contact-nav" className={styles.linkitem}>
                            <Typography>
                                CONTACT
                            </Typography>
                            </a>
                        </Link>
                    </Hidden>
                    </div>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            className={classes.menuIcon}
                        >
                        <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
                <Hidden mdUp implementation="js">
                    <Drawer
                        variant="temporary"
                        anchor={"right"}
                        open={mobileOpen}
                        classes={{
                            paper: classes.drawerPaper
                          }}
                        onClose={handleDrawerToggle}
                    >
                        <List>
                            {['HOME', 'TECH BLOG', 'ABOUT', 'CONTACT'].map((text, id) => (
                                <Link 
                                    key={id}
                                    href={
                                    text==='HOME' ? '/'
                                    : text==='TECH BLOG' ? '/blog'
                                    : text==='ABOUT' ? '/about'
                                    : '/contact'
                                    }
                                >
                                    <ListItem button className={classes.drawerItem}>
                                        <ListItemIcon>
                                            <Typography color="textPrimary">
                                                {text==='HOME' ? <HomeIcon />
                                                : text==='TECH BLOG' ? <DescriptionSharpIcon />
                                                : text==='ABOUT' ? <FaceIcon />
                                                : <ContactMailSharpIcon />}
                                            </Typography>
                                        </ListItemIcon>
                                        <Typography color="textPrimary">
                                            <ListItemText primary={text} />
                                        </Typography >
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Drawer>
                </Hidden>
            </AppBar>
        </header>
        </React.Fragment>
    )
}

export default Header;
