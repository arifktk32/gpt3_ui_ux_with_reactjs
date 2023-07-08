import React from 'react';
import './blog.scss';
import Article from '../../components/article/Article';
import articles from './articles';

const Blog = () => {
  const firstFeatured = articles.find(obj => obj.featured === true);
  // const indexOfFirstFeatured = (articles.indexOf(firstFeatured) === 0) ? (articles.indexOf(firstFeatured) + 1) : articles.indexOf(firstFeatured);
  const indexOfFirstFeatured = articles.indexOf(firstFeatured);
  var beforeFeatured = articles.slice(0, indexOfFirstFeatured);
  var afterFeatured = articles.slice(indexOfFirstFeatured + 1);

  var nonFeatured = beforeFeatured.concat(afterFeatured);

  return (
    <div className='container blog' id='blog'>
      <div className='blog__header'>
        <h1 className='gradient__text blog__header-title'>A lot is happening, <br />We are blogging about it.</h1>
      </div>
      <div className='flex blog__body'>
        <div className='featured__article'>
          <Article imageURL={firstFeatured.imageURL} publishedDate={firstFeatured.publishedDate} articleTitle={firstFeatured.title} />
        </div>
        <div className='flex nonfeatured__articles'>
          {nonFeatured.map((article, index) => (
            <Article imageURL={article.imageURL} publishedDate={article.publishedDate} articleTitle={article.title} key={article.title + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog