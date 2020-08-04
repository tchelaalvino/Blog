import React, { useState } from 'react';

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import image01 from '../../../assets/img/pexels-33010.jpg';
import image02 from '../../../assets/img/pexels-33011.jpg';
import image03 from '../../../assets/img/pexels-33012.jpg';
import image04 from '../../../assets/img/pexels-33013.jpg';
import ImageBT01 from '../../../assets/img/pexels-40011.jpg';
import ImageBT02 from '../../../assets/img/pexels-40012.jpg';
import ImageBT03 from '../../../assets/img/pexels-40010.jpg';

const Article = () => {
  return (
    <section className="articles">
      <TrackArticle />
      <Articles />
      <Pagination />
    </section>
  );
};

const TrackArticle = () => {
  return (
    <div className="blog_track my-5" id="category">
      <p className="title_blog h3">Category</p>
      <div className="d-flex flex-column flex-md-row justify-content-around">
        <div className="card card_track">
          <img
            src={ImageBT01}
            alt="Categoria Cultura"
            className="card-img w-100 h-100"
          />
        </div>
        <div className="card card_track">
          <img
            src={ImageBT02}
            alt="Categoria Moda"
            className="card-img w-100 h-100"
          />
        </div>
        <div className="card card_track">
          <img
            src={ImageBT03}
            alt="Categoria LGBTQI+"
            className="card-img w-100 h-100"
          />
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  const [articles] = useState([
    {
      image: image01,
      tag: 'places',
      contributor: 'fulana de tal',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Praesentium',
      date: '08/08/2020',
      alt: 'países e suas culturas',
    },
    {
      image: image02,
      tag: 'person',
      contributor: 'fulana de tal',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Praesentium',
      date: '08/08/2020',
      alt: 'países e suas culturas',
    },
    {
      image: image03,
      tag: 'places',
      contributor: 'fulana de tal',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Praesentium',
      date: '08/08/2020',
      alt: 'países e suas culturas',
    },
    {
      image: image04,
      tag: 'experience',
      contributor: 'fulana de tal',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Praesentium',
      date: '08/08/2020',
      alt: 'países e suas culturas',
    },
    {
      image: image02,
      tag: 'experience',
      contributor: 'fulana de tal',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Praesentium',
      date: '08/08/2020',
      alt: 'países e suas culturas',
    },
    {
      image: image01,
      tag: 'person',
      contributor: 'fulana de tal',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Praesentium',
      date: '08/08/2020',
      alt: 'países e suas culturas',
    },
  ]);

  return (
    <div className="blog_article" id="articles">
      <p className="title_blog h3">Articles</p>
      <ul className="list-unstyled">
        <div className="row">
          {articles.map((article) => (
            <li key={article} className="col-12 col-md-6">
              <article>
                <div className="card card_article m-3">
                  <img
                    alt={article.alt}
                    src={article.image}
                    className="w-100 h-100"
                  />
                  <span className="badge category_tag">{article.tag}</span>
                  <div className="context_article">
                    <img src="https://i.imgur.com/nUNhspp.jpg" alt="avatar post" className="avatar_post py-1" />
                    <span className="contributor">{article.contributor}</span>
                    <h4 className="text-left">
                      <a href="/internalPost" className="title_article">{article.title}</a>
                    </h4>
                    <time className="text-center" pubdate="pubdate">{article.date}</time>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

const Pagination = () => {
  return (
    <nav className="pagination_blog d-flex justify-content-end">
      <ul className="pagination pagination-lg">
        <li className="page-item">
          <a className="page-link" href="/blog">
            <BsArrowLeftShort />
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/blog">1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/blog">2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/blog">3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/blog">
            <BsArrowRightShort />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Article;
