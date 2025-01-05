import { PostData } from '@/types';
import React from 'react'

type CardProps = {
    post: PostData;
}

const Card = ({ post }: CardProps) => {

    return (

        <div className="card">

            <h2 className="card-heading">{post.title}</h2>
            <p className="date-text">{post.date} | {post.tags.join(' , ')}</p>
            <p className="description">{post.description}</p>

        </div>
    )
}

export default React.memo(Card)