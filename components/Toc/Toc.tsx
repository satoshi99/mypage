import React, { useEffect } from 'react'
import tocbot from 'tocbot'

// Toc css file is putted under the styles folder and importing in _app.tsx


const Toc: React.VFC = () => {
    useEffect(() => {
      tocbot.init({
        tocSelector: '.tocbot',
        contentSelector: '.postText',
        headingSelector: 'h1, h2',
        linkClass: 'toc-link',
        activeLinkClass: 'is-active-link',
        listClass: 'toc-list',
        positionFixedClass: 'is-position-fixed',
        listItemClass: 'toc-list-item',
      })
    }, [])
    return <div className="tocbot" />
  }

  export default Toc;
  