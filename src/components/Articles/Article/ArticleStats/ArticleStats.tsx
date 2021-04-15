import React from 'react';
import './ArticleStats.scss';

const articleStats: React.FC = () => {
   return (
      <div className="article-stats">
         <div className="article-stats__stat-body">
            <i className="far fa-heart"></i>
            <span>57</span>
         </div>
         <div className="article-stats__stat-body">
            <i className="far fa-comments"></i>
            <span>57</span>
         </div>
      </div>
   );
}


export default articleStats;