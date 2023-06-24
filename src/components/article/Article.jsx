import React from 'react';
import './article.scss';

const Article = ({ imageURL, articleTitle, publishedDate }) => (
  <div className='article'>
    <div className='article__image'>
      <img src={imageURL} alt='article image' />
    </div>
    <div className='flex article__content'>
      <div className='header'>
        <p className='published__date'>{publishedDate}</p>
        <h3 className='article__title'>{articleTitle}</h3>
      </div>
      <p className='article__readmore'><a href='#'>Read Full Article</a></p>
    </div>
  </div>
)

export default Article;