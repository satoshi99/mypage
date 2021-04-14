import React from 'react';
import Link from 'next/link';
import { TAG } from '../../types/types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchForm from './SearchForm';

interface PROPS {
  tags: TAG[]
  selectedTagSlug: string | null
}

const useStyles = makeStyles({
  container: {
    paddingTop: '20px',
  },
  tagList: {
    margin: '50px 25px 0 25px',
  },
  tag: {
    display: 'inline-block',
    '&:hover': {
      color: '#f05545',
    },
  },
  selectedTag: {
    display: 'inline-block',
    color: '#f05545',
    '&:hover': {
      color: '#f05545',
    },
  },
});


const Sidebar: React.FC<PROPS> = ({ tags, selectedTagSlug }) => {
  const classes = useStyles();
  let selectedTag: TAG;
  if (selectedTagSlug) {
    selectedTag = tags.find(tag => tag.slug === selectedTagSlug)
  }

  return (
    <div className={classes.container}>
      <SearchForm />
      <div className={classes.tagList}>
        <Typography variant="h6" gutterBottom color="primary">
          Tags
        </Typography>
        <div>
          {tags.map((tag) => selectedTagSlug === tag.slug ? (
            <Link key={tag.id} href={`/filtered/${encodeURIComponent(tag.slug)}`}>
              <a>
                <Typography 
                  variant="subtitle1" 
                  className={classes.selectedTag}
                >
                  {tag.name}
                </Typography>
                <br />
              </a>
            </Link>
          ) : (
            <Link key={tag.id} href={`/filtered/${encodeURIComponent(tag.slug)}`}>
              <a>
                <Typography 
                  variant="subtitle1" 
                  color="textSecondary" 
                  className={classes.tag}
                >
                  {tag.name}
                </Typography>
                <br />
              </a>
            </Link>
          )
        )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
