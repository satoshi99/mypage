import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { useRouter } from 'next/router'
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.7),
      '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.9),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      display: 'flex',
    },
    iconButton: {
      padding: '10px',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    
  })
);


const SearchForm: React.FC = () => {
    const classes = useStyles();
    const router = useRouter();
    const {search, setSearch} = useContext(SearchContext);

    const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearch(e.currentTarget.value);
    }

    return (
        <form 
          action={`/searchResults?q=${search}`}
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/searchResults?q=${search}`)
           }} 
          className={classes.search}
        >
            <InputBase 
            placeholder="Search…"
            value={search}
            color="secondary"
            name="keyword"
            onChange={handleChangeKeyword}
            classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
        <IconButton 
          type="submit" 
          className={classes.iconButton} 
        >
          <SearchIcon />
        </IconButton>
      </form>
    )
}

export default SearchForm
