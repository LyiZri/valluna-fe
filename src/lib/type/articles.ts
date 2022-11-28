export interface IArticlesDraft extends IArticles {
    article_title?: string;
    article_img?: string;
    games?: string[];
    content?: string;
    action?: number;
    featured?: number;
}
export interface IArticles {
    optime?: number;
    author?: string;
    operator?: string;
    atid?: string;
    editstatus?: number;
    status?: number;
    draft?: IArticlesDraft;
    site_url?: string;
    external_url?: string;
    total_views?: string;
    unique_views?: string;
    shares?: string;
    article_title?: string;
    featured?: number;
    games?: string[] | {glid?:string;game_name?:string}[];
    categorys?: string[];
    content?: string;
    article_img?: string;
}