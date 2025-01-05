import React from 'react'
import Card from './Card'
import { PostData } from '@/types';

type RecentPostSectionProps = {
  postData: PostData[];
}
const RecentPostSection = ({ postData }: RecentPostSectionProps) => {
  return (
    <section className="recent-post-section">
      <div className="container">
        <div className="heading">
          <h3 className="recent-post">Recent Post</h3>
          <span className="view-all-button">View all</span>
        </div>

        <div className="card-parent">
          {postData?.length ? (postData.map((post: PostData) => 
              <Card post={post}
                key={post._id} />
            )

          ) : (
            <p>No Recent Posts available.</p>

          )
          }
          { }


 
        </div>

      </div>
    </section>
  )
}

export default RecentPostSection