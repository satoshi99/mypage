import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { POST } from '../../types/types';
import { GetStaticProps, GetStaticPaths } from 'next';
import { CssBaseline, Typography, makeStyles, Grid } from '@material-ui/core';
import { getAllPostIds, getPostData } from '../../lib/fetch';
import Toc from '../../components/Toc/Toc';
import Prism from '../../styles/prismjs/prism';

interface PROPS {
    post: POST
    contentHtml: string
}


const useStyles = makeStyles({
    title: {
        padding: '120px 50px 50px 50px',
        color: '#e2f1f8',
        background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
    },
    tocWrapper: {
        backgroundColor: '#e2f1f8'
    },
    contentWrapper: {
        padding: '50px',
    },
    tocTitle: {
        paddingTop: '50px',
        paddingLeft: '20px',
    }
});

const PostDetail: React.FC<PROPS> = ({
    post,
    contentHtml
}) => {
    const classes = useStyles();

    useEffect(() => {
        Prism.highlightAll();
    }, [])



    return (
        <React.Fragment>
            <CssBaseline />
            <Layout title={`Blog : ${post.title}`}>
                <div className={classes.title}>
                    <Typography component="h4" variant="h4" gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography variant="h6" align="left" paragraph>
                        {post.published_at}
                    </Typography>
                </div>
                <Grid container>
                    <Grid item xs={12} md={3} className={classes.tocWrapper}>
                        <h3 className={classes.tocTitle}>Contents</h3>
                        <Toc />
                    </Grid>
                    <Grid item xs={12} md={9} className={classes.contentWrapper}>
                        <div 
                            className="postText" 
                            dangerouslySetInnerHTML={{ __html: contentHtml }} 
                        />
                    </Grid>
                </Grid>
            </Layout>
        </React.Fragment>
    );
}


export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            ...postData,
        },
        revalidate: 1
    };
}
