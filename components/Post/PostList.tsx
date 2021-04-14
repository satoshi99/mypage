import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { POST } from '../../types/types';


const useStyles = makeStyles({
  paper: {
    display: 'flex',
    padding: '10px',
    outline: 'none',
    border: 'none',
    borderRadius: '0',
    margin: '20px 10px',
    minHeight: '200px',
    transition: 'all 0.3s',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'white',
    }
  },
  content: {
    flex: 1,
    padding: '0 30px',
  },
  title: {
    paddingBottom: '5px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.7)',
  },
  date: {
    float: 'right',
  },
  hoverAction: {
    transition: 'all 0.3s',
  },
  button: {
    position: 'relative',
    '&:hover': {
      color: '#f05545',
    }
  },
  cardMedia: {
    width: '300px',
  },
  tags: {
    float: 'left',
    marginRight: '10px',
  }
});

interface PROPS_POST {
  post: POST
}

const PostList: React.FC<PROPS_POST> = ({ post }) => {
  const classes = useStyles();
    return (
      <Link href={`/posts/${post.id}`}>
        <a>
        <Paper elevation={0} className={classes.paper}>
        <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.thumbnail} title='title' />
          </Hidden>
          <div className={classes.content}>
            <Typography component="p" variant="subtitle2" color="textSecondary" className={classes.date}>
                {post.published_at}
              </Typography>
              <Typography component="h2" variant="h5" color="primary" gutterBottom className={classes.title}>
                {post.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              { post.tags.map((tag) => (
                <Typography key={tag.id} component="p" variant="subtitle2" color="textSecondary" className={classes.tags}>{tag.name}</Typography>
              ))}
          </div>
        </Paper>
        </a>
      </Link>
    );   
}

export default PostList;
