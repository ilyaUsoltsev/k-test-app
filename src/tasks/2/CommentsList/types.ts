export interface IComment {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: null | number;
    likes: number;
}

export interface IAuthor {
    id: number;
    name: string;
    avatar: string;
}

export interface ICommentWithAuthor extends Omit<IComment, "author"> {
    author: IAuthor;
}
