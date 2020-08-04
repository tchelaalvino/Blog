import React from 'react';

import { BsSearch } from 'react-icons/bs';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header_blog">
      <div className="d-flex justify-content-between">
        <Medias />
        <Search />
      </div>
      <div className="boll_head">
        <h1 className="title_head text-center">Blog</h1>
        <Menu />
      </div>
    </header>
  );
};

const Search = () => {
  return (
    <div className="form-group search w-25 h-50">
      <label htmlFor="Buscar">
        <input type="text" className="form-control control_search" id="buscar" />
      </label>
      <BsSearch size={20} className="icon_search" />
    </div>
  );
};

const Medias = () => {
  return (
    <ul className="list-unstyled list-group list-group-horizontal list_media">
      <li className="p-2 item_social">
        <FaInstagram size={24} />
      </li>
      <li className="p-2 item_social">
        <FaFacebookF size={24} />
      </li>
      <li className="p-2 item_social">
        <FaTwitter size={24} />
      </li>
      <li className="p-2 item_social">
        <FaPinterest size={24} />
      </li>
    </ul>
  );
};

const Menu = () => {
  return (
    <nav className="nav nav_blog justify-content-center mt-5">
      <a className="nav-link link_blog" href="#category">Category</a>
      <a className="nav-link link_blog" href="#articles">Articles</a>
      <a className="nav-link link_blog" href="#follow">Follow us</a>
    </nav>
  );
};

export default Header;
