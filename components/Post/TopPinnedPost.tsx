import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { POST } from '../../types/types';
import styles from './Post.module.scss';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        color: 'white',
        width: '60%',
    },
    description: {
        width: '90%'
    },
    button: {
        color: 'white',
        display: 'inline-block',
        transition: 'all 0.3s',
        '&:hover': {
            color: '#f05545',
        }
    }
})


interface PROPS_POST {
    post: POST
}

const TopPinnedPost: React.FC<PROPS_POST> = ({ post }) => {
    const classes = useStyles();

    return (
        <div className={styles.topPinnedPostWrapper}>
            <div className={styles.container}>
            <Typography component="h4" variant="h4" gutterBottom className={classes.title}>
                {post.title}
            </Typography>
            <Typography component="h6" variant="h6" paragraph className={classes.description}>
                {post.description}
            </Typography>
            <Link href={`/posts/${post.id}`}>
                <a>
                    <Typography variant="button" className={classes.button}>
                        Continue reading ...
                    </Typography>
                </a>
            </Link>
            </div>
        </div>
    );
}

export default TopPinnedPost;
