import '../styles/globals.css';
import '../styles/index.scss';
import '../styles/PostDetail.scss';
import '../styles/prismjs/prism.css';
import '../node_modules/katex/dist/katex.min.css';
import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { SearchContext } from '../context/SearchContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState<string>('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Component {...pageProps} />
    </SearchContext.Provider>
  )
}

export default MyApp;
