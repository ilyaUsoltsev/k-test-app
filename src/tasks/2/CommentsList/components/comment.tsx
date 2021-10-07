import React from 'react'
import {  ICommentWithAuthor } from '../types';
import './comment.styles.css';
import like_icon from '../../../../assets/like.svg'
import { formatTimeForComment } from '../utils/format-time';

interface IProps {
    comment: ICommentWithAuthor
}

const Comment:React.FC<IProps> = ({comment}) => {
    return (
        <div className='comment_wrapper'>
            <img className='comment_avatar' src={comment.author.avatar} />
            <div className='comment_main'>
                <div className='comment_header'>
                    <div className='comment_header-left'>
                        <h2>{comment.author.name}</h2>
                        <div className='comment_header-time'>{formatTimeForComment(comment.created)}</div>
                    </div>
                    <div className='comment_header-right'>
                       <img className='comment_header-right-icon' src={like_icon} alt={'avatar'}/>
                        <span>{comment.likes}</span>
                    </div>
                </div>
                <article className='comment_article'>
                    {comment.text}
                </article>
            </div>
        </div>
    )
}

export default Comment
