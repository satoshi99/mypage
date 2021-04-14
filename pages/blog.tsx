import React from 'react';
import { GetStaticProps } from 'next';
import { getAllPostsData, getAllTags } from '../lib/fetch';
import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import PostList from "../components/Post/PostList";
import TopPinnedPost from '../components/Post/TopPinnedPost';
import { POST, TAG } from '../types/types';
import Sidebar from '../components/Post/Sidebar';


interface STATICPROPS {
    posts: POST[]
    tags: TAG[]
}

const useStyles = makeStyles({
    postListWrapper: {
        padding: '50px 30px',
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
})

const Blog: React.FC<STATICPROPS> = ({ posts, tags }) => {
    const classes = useStyles();
    const topPost = posts['results'][0];
    const otherPosts = posts['results'].filter((post) => post.id !== topPost.id)

    return (
        <React.Fragment>
            <CssBaseline />
            <Layout title="Tech Blog">
                <TopPinnedPost post={topPost}/>
                <Grid container className={classes.postListWrapper}>
                    <Grid item xs={12} md={9}>
                    {otherPosts.map((post) => (
                        <PostList key={post.id} post={post}/>
                    ))}
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.sidebarWrapper}>
                        <Sidebar tags={tags} selectedTagSlug={null} />
                    </Grid>
                </Grid>
            </Layout>
        </React.Fragment>
    );
}

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPostsData();
    const tags = await getAllTags();
    return {
        props: { posts, tags },
        revalidate: 1,
    }
} 