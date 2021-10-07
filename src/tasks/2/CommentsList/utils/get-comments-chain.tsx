import { ICommentWithAuthor } from '../types';
import Comment from '../components/comment';

export const getCommentsChain = (rootComment: ICommentWithAuthor, nestedComments: any, counter: number) => {
    if(nestedComments?.[rootComment?.id]) {
        return nestedComments[rootComment.id].map((i: any) => 
        <div key={i.id} style={{marginLeft: `${counter*30}px`}}>
            <Comment comment={i} />
            {getCommentsChain(i, nestedComments, ++counter)}
        </div>)
    } 
}