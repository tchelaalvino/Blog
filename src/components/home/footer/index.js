import React, { useState } from 'react';

import { FaInstagram } from 'react-icons/fa';

import image01 from '../../../assets/img/pexels-30010.jpg';

const Footer = () => {
  const [images] = useState([
    { src: image01 },
    { src: image01 },
    { src: image01 },
    { src: image01 },
  ]);

  return (
    <footer className="footer_blog" id="follow">
      <p className="title_blog h3">Follow Us</p>
      <ul className="list-unstyled d-flex flex-wrap justify-content-center pt-4">
        {images.map((image) => (
          <li className="gallery_insta">
            <img
              src={image.src}
              alt="Galeria Instagram"
              className="img_insta"
            />
            <div className="overlay">
              <div className="link_follow">
                <a href="/blog" className="link">
                  <FaInstagram size={20} />
                  Follow
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
