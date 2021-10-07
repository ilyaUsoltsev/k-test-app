import {IComment, IAuthor, ICommentWithAuthor} from "../types";

export const processComments = (
    rootComments: IComment[],
    authorsMap: Record<number, IAuthor>,
) => {
    const result: Record<number, ICommentWithAuthor[]> = {};
    const root: ICommentWithAuthor[] = [];
    for (const comment of rootComments) {
        if (comment.parent === null) {
            root.push({...comment, author: authorsMap[comment.author]});
        } else if (result[comment.parent]) {
            result[comment.parent] = [
                ...result[comment.parent],
                {...comment, author: authorsMap[comment.author]},
            ];
        } else {
            result[comment.parent] = [
                {...comment, author: authorsMap[comment.author]},
            ];
        }
    }
    return {nestedComments: result, root};
};
