import React from 'react';
import styles from './Profile.module.scss';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

                
const Profile: React.FC = () => {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={styles.wrapper}>
          <Grid container className={styles.container}>
            <Grid item xs={12} md={7} className={styles.content}>
              <Grid item xs={12} className={styles.content1}>
                <Typography variant="h6" align="left" color="primary" gutterBottom className={styles.subtitle}>
                  About this site
                </Typography>
                <div className={styles.introText}>
                <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                  Satoshi Yoshida
                </Typography>
                <Typography variant="h6" align="left">
                  プログラミングを独学中。ここでは日々の学びや製作物を発信していきます。
                  <br />
                  言語は主にPythonやJavaScript、Golangで、DjangoやReact、Next.jsなどのフレームワークを使用しています。
                  <br />
                  フルスタックで一通りの開発を自分で行えるようになりたい 🔥
                </Typography>
                </div>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs={12} sm={6} className={styles.content2}>
                  <Typography variant="h6" align="center" className={styles.subtitle} color="primary">
                    Programming
                  </Typography>
                    <List className={styles.languageList}>
                      <ListItem>
                        <ListItemText primary="◆ Python ... Django・Flask" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="◆ JavaScript ... React・Redux・Next.js" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="◆ Golang" />
                      </ListItem>
                    </List>

                </Grid>

                <Grid item xs={12} sm={6} className={styles.content3}>
                <Typography variant="h6" align="center" className={styles.subtitle} color="primary">
                  Contact
                </Typography>
                  <div className={styles.snsIcons}>
                  <a href="https://twitter.com/tech_satoshi" target="_blank" rel="noopener noreferrer"><TwitterIcon className={styles.snsIcon}/></a>
                  <a href="https://www.facebook.com/otasihsoy/" target="_blank" rel="noopener noreferrer"><FacebookIcon className={styles.snsIcon}/></a>
                  <a href="https://github.com/satoshi99" target="_blank" rel="noopener noreferrer"><GitHubIcon className={styles.snsIcon}/></a>
                </div>
                <Typography variant="h6" align="center" className={styles.email} >
                    sayoshida22#gmail.com
                  </Typography>
                
                </Grid>
               
           
            </Grid>
</Grid>
            <Grid item xs={12} md={5} className={styles.photoGrid}>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );   
}

export default Profile;
