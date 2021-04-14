export interface TITLE {
    title: string;
}

export interface TAG {
    id: number;
    name: string;
    slug: string;
}

export interface POST {
    id: number;
    tags: TAG[];
    title: string;
    thumbnail: string;
    content: string;
    contentHtml: string;
    description: string;
    created_at: number;
    updated_at: number;
    published_at: number;
    is_public: boolean;
    htmlcontent: string;
}

