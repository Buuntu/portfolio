import React, { FC } from 'react';

type HeaderPropsType = {
  onOpenArticle: (article: string) => void;
  timeout: boolean;
};

const Header: FC<HeaderPropsType> = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Gabriel Abud</h1>
        <p>Full stack software engineer based in the San Francisco Bay Area </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro');
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work');
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about');
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact');
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
