import fetch from 'node-fetch';
import remark from 'remark';
import slug from 'remark-slug';
import math from 'remark-math';
import katex from 'rehype-katex';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import { POST, TAG } from '../types/types';


// Get Posts
export const getAllPostsData = async () => {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/posts/`)
    );
    const posts: POST[] = await res.json();
    return posts;
}

export const getAllPostIds = async () => {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/posts/`)
    );
    const posts = await res.json();
    return posts.results.map((post) => {
        return {
            params: { id: String(post.id) }
        }
    });
}

export const getPostData = async (id: string) => {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/posts/${id}`)
    );
    const post: POST = await res.json();

    const processedContent = await remark()
    .use(markdown)
    .use(math)
    .use(slug)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(katex)
    .use(stringify)
    .process(post.content)

    const contentHtml = processedContent.toString();

    return {
        contentHtml,
        post
    };
}

// Get Tags
export const getAllTags = async () => {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/tags/`)
    );
    const tags = await res.json();
    return tags;
}

export const getAllTagSlugs = async () => {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/tags/`)
    );
    const tags = await res.json();
    return tags.map((tag) => {
        return { 
            params: { tag: String(tag.slug) }
        }
    })
}

// Get Tagged Posts
export const getTagFilteredPostData = async (tag: string) => {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/tags/${tag}`)
    );
    const filteredPosts = await res.json();
    return {
        filteredPosts,
        tag
    };
}

// Get Searched Post
export const getSearchedPostData = async (keyword: string) => {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/posts/search/?q=${keyword}`)
    );
    const searchedPosts = await res.json();
    return searchedPosts;
}


