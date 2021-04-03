import React from 'react';
import './ArticleSorter.scss'

const articleSorter: React.FC = () => {
   return (
      <div className="article-sorter">
         <h4 className="article-sorter__title">Posts</h4>
         <div className="article-sorter__sort-block">
            <a className="article-sorter__sort-link" href="">All</a>
            <a className="article-sorter__sort-link" href="">Week</a>
            <a className="article-sorter__sort-link" href="">Month</a>
            <a className="article-sorter__sort-link" href="">Year</a>
         </div>
      </div>
   );
}


export default articleSorter;