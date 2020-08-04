import React from 'react';

import BannerBP from '../../assets/img/pexels-60010.jpg';
import ImageBP from '../../assets/img/pexels-60042.jpg';
import GalImage01 from '../../assets/img/pexels-60040.jpg';
import GalImage02 from '../../assets/img/pexels-60041.jpg';
import Contribuitor from '../../assets/img/avatar-10030.png';

const InternalPost = () => {
  return (
    <div className="post_blog">
      <BannerPost />
      <div className="container">
        <TextUnique />
        <TextPost />
      </div>
      <GalleryPost />
      <div className="container">
        <TextQuote />
        <TextPost />
        <Contributor />
      </div>
      <ImageUnique />
    </div>
  );
};

const BannerPost = () => {
  return (
    <div className="card text-white post_banner">
      <img
        src={BannerBP}
        alt="Banner ombros de mulher"
        className="w-100 h-100 img_post"
      />
      <div className="card-img-overlay">
        <p className="text-white title_post">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
    </div>
  );
};

const TextUnique = () => {
  return (
    <div className="text_post my-5">
      <p className="font-weight-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

const TextPost = () => {
  return (
    <div className="text_post my-5">
      <p className="py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p className="py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

const TextQuote = () => {
  return (
    <div className="text_post my-5">
      <blockquote className="blockquote quote">
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ante.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <footer className="blockquote-footer">
          Someone famous in
          <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </div>
  );
};

const ImageUnique = () => {
  return (
    <div className="d-flex">
      <img src={ImageBP} alt="Foto mulher e dança" className="w-100 h-100" />
    </div>
  );
};

const GalleryPost = () => {
  return (
    <div className="d-flex d-flex justify-content-center">
      <div>
        <img
          src={GalImage01}
          alt="Foto jogadora de futebol"
          className="w-100 h-100 img_post"
        />
      </div>
      <div>
        <img
          src={GalImage02}
          alt="Foto mulher artistica"
          className="w-100 h-100 img_post"
        />
      </div>
    </div>
  );
};

const Contributor = () => {
  return (
    <div className="d-flex flex-column contribuitor">
      <img
        src={Contribuitor}
        alt="contribuitor"
        className="contributor_avatar"
      />
      <p className="contributor_name p-2 m-0">Fulana de Tal</p>
      <small className="contributor_name">08/08/2020</small>
      <p className="contribuitor_description font-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>
    </div>
  );
};

export default InternalPost;
