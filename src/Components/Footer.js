import React from 'react';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/bfmahad" target='_blank' rel='noreferrer'>
          <FaGithub className="icon" />
        </a>
        <a href="https://instagram.com/absolutely_ahadali" target='_blank' rel='noreferrer'>
          <FaInstagram className="icon" />
        </a>
        <a href="https://facebook.com/absolutely.ahadali" target='_blank' rel='noreferrer'>
          <FaFacebook className="icon" />
        </a>
      </div>
      <h2 className="made-by">Made with 🖤 by Ahad Ali</h2>
    </footer>
  );
};

export default Footer;
