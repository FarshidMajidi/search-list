export interface SearchVm {
    kind: string;
    url: Url;
    queries: Queries;
    context: Context;
    searchInformation: SearchInformation;
    items: Item[];
}

export interface Item {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    pagemap: Pagemap;
    cacheId?: string;
}

export interface Pagemap {
    cse_thumbnail: Csethumbnail[];
    metatags: Metatag[];
    cse_image: Cseimage[];
}

export interface Cseimage {
    src: string;
}

export interface Metatag {
    'og:image'?: string;
    'twitter:card'?: string;
    'twitter:title'?: string;
    'og:image:width'?: string;
    'og:type'?: string;
    'og:title'?: string;
    'og:image:height'?: string;
    'og:description'?: string;
    'twitter:image'?: string;
    'twitter:site'?: string;
    viewport: string;
    'twitter:description'?: string;
    'og:url'?: string;
    referrer?: string;
    'theme-color'?: string;
    google?: string;
}

export interface Csethumbnail {
    src: string;
    width: string;
    height: string;
}

export interface SearchInformation {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
}

export interface Context {
    title: string;
}

export interface Queries {
    request: Request[];
    nextPage: Request[];
}

export interface Request {
    title: string;
    totalResults: string;
    searchTerms: string;
    count: number;
    startIndex: number;
    inputEncoding: string;
    outputEncoding: string;
    safe: string;
    cx: string;
}

export interface Url {
    type: string;
    template: string;
}
