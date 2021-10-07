import {IAuthor} from "../types";

export const processAuthors = (authors: IAuthor[]) => {
    const result: Record<number, IAuthor> = {};
    for (const author of authors) {
        result[author.id] = author;
    }
    return result;
};
