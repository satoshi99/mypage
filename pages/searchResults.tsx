import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import { CssBaseline, Grid, makeStyles, Typography } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import PostList from "../components/Post/PostList";
import { POST, TAG} from '../types/types';
import Sidebar from '../components/Post/Sidebar';
import { getAllTags, getSearchedPostData } from '../lib/fetch';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
    mobileTitle: {
        padding: '10px 0',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',

    },
    postListWrapper: {
        padding: '100px 30px 30px 30px',
        backgroundColor: '#e2f1f8',
        minHeight: '100vh',
    },
    search: {
        color: 'white',
        position: 'relative',
        borderRadius: '5px',
        backgroundColor: 'rgba(225, 225, 225, 0.15)',
        width: '40%',
    },
    searchIcon: {
        padding: '5px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: '5px',
        width: '100%',
    },
    sidebarWrapper: {
        backgroundColor:'transparent',
      },
      searchTitle: {
        paddingLeft: '20px',
      }
})


const SearchResults: React.FC = () => {
    const classes = useStyles();
    const {search} = useContext(SearchContext);
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [tags, setTags] = useState([]);
    
    let isExistPosts = true;
    if (!searchedPosts.length) {
        isExistPosts = false;
    }

    useEffect(() => {
        const fetch = async () => {
            const searchedPosts: POST[] = await getSearchedPostData(search);
            const tags: TAG[] = await getAllTags();
            setSearchedPosts(searchedPosts);
            setTags(tags);
        };
        fetch();
    }, [search]);

    return (
        <React.Fragment>
            <CssBaseline />
            <Layout title={ isExistPosts ? `Search Results for ${search}` : `No Search Results for ${search}`}>
                <Grid container className={classes.postListWrapper}>
                    <Grid item xs={12} md={9}>
                        { isExistPosts ? (
                        <Hidden mdUp>
                            <Typography variant="h6" gutterBottom color="textSecondary" className={classes.mobileTitle}>
                                Search Results for&nbsp;
                                <Typography component="span" variant="h6" color="textPrimary">
                                    "{search}"
                                </Typography>
                            </Typography>
                        </Hidden>
                        ) : (
                            null
                        )}
                        { isExistPosts ? (
                            searchedPosts.map((post) => (
                                <PostList key={post.id} post={post}/>
                            ))
                        ) : (
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                No Search Result {search}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.sidebarWrapper}>
                        <Hidden smDown>
                            <Typography variant="h6" gutterBottom color="textSecondary" className={classes.searchTitle}>
                                Search Results<br />for&nbsp;
                            <Typography component="span" variant="h6" color="textPrimary">
                                "{search}"
                            </Typography>
                            </Typography>
                         </Hidden>
                        <Sidebar tags={tags} selectedTagSlug={null} />
                    </Grid>
                </Grid>
            </Layout>
        </React.Fragment>
    );
}

export default SearchResults;
