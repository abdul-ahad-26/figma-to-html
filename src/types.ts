import { Image } from "sanity";

// MainData Type
export type MainData = {
    _id: string;
    title: string;
    description: string;
    image: Image;
}

// PostData Type
export type PostData = {
    _id: string;
    title: string;
    date: string;
    tags: string[];
    description: string;
}

// WorkData Type
export type WorkData = {
    _id: string;
    title: string;
    year: number;
    tags: string[];
    description: string;
    image: Image;
}