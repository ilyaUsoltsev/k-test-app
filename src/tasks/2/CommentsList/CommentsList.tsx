import React, { useState, useEffect } from "react";
import getDataRequest from '../data/getDataRequest';
import {ICommentWithAuthor } from "./types";
import Comment from './components/comment';
import { processAuthors } from "./utils/process-authors";
import { processComments } from "./utils/process-comments";
import { getCommentsChain } from "./utils/get-comments-chain";

const CommentsList:React.FC = () => {
    const [rootComments, setRootComments] = useState<ICommentWithAuthor[]>();
    const [nestedComments, setNestedComments] = useState<Record<number, ICommentWithAuthor[]>>();
    const [error, setError] = useState<any>();
    
    useEffect(() => {
        async function load() {
            try {
                const {comments, authors} = await getDataRequest();
                const authorsMap = processAuthors(authors);
                const {root, nestedComments} = processComments(comments, authorsMap);
                setRootComments(root);
                setNestedComments(nestedComments);
            } catch (error) {
                setError((error as Error).message)
            }
        }
        load();
    }, [])


    return  (<div>
                <h1>Comments list</h1>
                {rootComments && <ul>
                    {rootComments.map(comment => 
                    <div key={comment.id}>
                        <Comment comment={comment} />
                        {getCommentsChain(comment, nestedComments, 0)}
                    </div>)}
                </ul>}
                {error && <p>{error}</p>}
            </div>);
};

export default CommentsList;
