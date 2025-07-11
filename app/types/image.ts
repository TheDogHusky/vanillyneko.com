export interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
    format?: 'webp' | 'jpeg' | 'png';
    placeholder?: boolean;
    class?: string;
    style?: string | any;
    allowExternal?: boolean;
    crossorigin?: 'anonymous' | 'use-credentials';
}