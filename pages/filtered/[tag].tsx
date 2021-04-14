import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { CssBaseline, Grid, makeStyles, Typography } from "@material-ui/core";
import Layout from "../../components/Layout/Layout";
import PostList from "../../components/Post/PostList";
import { POST, TAG} from '../../types/types';
import Sidebar from '../../components/Post/Sidebar';
import { getAllTags, getAllTagSlugs, getTagFilteredPostData } from '../../lib/fetch';
import Hidden from '@material-ui/core/Hidden';


interface STATICPROPS {
    filteredPosts: POST[]
    tags: TAG[]
    tag: string
}

const useStyles = makeStyles({
    mobileTitle: {
        padding: '10px 0',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',

    },
    postListWrapper: {
        padding: '100px 30px 30px 30px',
        backgroundColor: '#e2f1f8',
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

const TagFilteredBlog: React.FC<STATICPROPS> = ({ filteredPosts, tag, tags }) => {
    const classes = useStyles();
    const selectedTag = tags.find(element => element['slug'] === tag).name

    return (
        <React.Fragment>
            <CssBaseline />
            <Layout title={ selectedTag ? `List of Tagged ${selectedTag}` : "No Tag Search Result"}>
                <Grid container className={classes.postListWrapper}>
                    <Grid item xs={12} md={9}>
                        { filteredPosts[0] ? (
                        <Hidden mdUp>
                            <Typography variant="h6" gutterBottom color="textSecondary" className={classes.mobileTitle}>
                                List of articles tagged with&nbsp;
                                <Typography component="span" variant="h6" color="textPrimary">
                                    "{selectedTag}"
                                </Typography>
                            </Typography>
                        </Hidden>
                        ) : (
                            null
                        )}
                        { filteredPosts[0] ? (
                            filteredPosts.map((post) => (
                                <PostList key={post.id} post={post}/>
                            ))
                        ) : (
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                No Tag Search Result
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.sidebarWrapper}>
                    <Hidden smDown>
                            <Typography variant="h6" gutterBottom color="textSecondary" className={classes.searchTitle}>
                                List of articles<br />tagged with&nbsp;
                            <Typography component="span" variant="h6" color="textPrimary">
                                "{selectedTag}"
                            </Typography>
                            </Typography>
                         </Hidden>
                        <Sidebar tags={tags} selectedTagSlug={tag} />
                    </Grid>
                </Grid>
            </Layout>
        </React.Fragment>
    );
}

export default TagFilteredBlog;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllTagSlugs();
    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const filteredProps = await getTagFilteredPostData(params.tag as string);
    const tags = await getAllTags();

    return {
        props: { ...filteredProps, tags },
        revalidate: 1,
    }
} 
