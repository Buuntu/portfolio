import React, { FC } from 'react';
import pic01 from '../images/golden_gate.jpg';
import pic02 from '../images/san_francisco_skyline.jpg';
import pic03 from '../images/san_luis_potosi.jpg';

type MainPropsType = {
  route: Object;
  article: string;
  articleTimeout: boolean;
  onCloseArticle: () => void;
  timeout: boolean;
  setWrapperRef: () => void;
};

const Main: FC<MainPropsType> = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle();
      }}
    ></div>
  );

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Intro</h2>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <p>
          Hi, I'm Gabe, a software engineer living in the bay area since 2015.
          Currently working at{' '}
          <a href="https://www.tempoautomation.com/">Tempo Automation</a>, a San
          Francisco based automation company focusing on printed circuit board
          assembly. I mostly write Python and Typescript these days and dabble
          in cloud and serverless technologies.
        </p>
        <p>
          I am also interested in bioinformatics and biology. I have a degree in
          molecular biology and have worked in many labs across the country.
          Most recently I worked at an agricultural biotech company in Berkeley,
          California called <a href="">Pivot Bio</a>.
        </p>
        <p>
          Checkout out my <a href="https://github.com/Buuntu">Github</a> to see
          some of my projects (
          <a href="https://github.com/Buuntu/portfolio">including this site</a>)
          , or my Contact page to get ahold of me for any freelance work.
        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Work</h2>
        <span className="image main">
          <img src={pic02} alt="" />
        </span>
        <ul>
          <li>
            Software Engineer @{' '}
            <a href="https://www.tempoautomation.com/">Tempo Automation</a>.{' '}
            <i>2019 - Present</i>
          </li>
          <li>
            Software/Data Engineer @{' '}
            <a href="https://www.pivotbio.com/">Pivot Bio</a>.{' '}
            <i>2018 - 2019</i>
          </li>
          <li>
            Math/Science Teacher @{' '}
            <a href="https://www.oaklandinternational.org/">
              Oakland International High School
            </a>
            . <i>2016-2018</i>
          </li>
          <li>
            Software Engineer @{' '}
            <a href="https://www.marrick.com/">Marrick Medical</a>. <i>2015</i>
          </li>
          <li>
            Freelance Software Engineer. <i>2014-2015</i>
          </li>
        </ul>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About</h2>
        <span className="image main">
          <img src={pic03} alt="" />
        </span>
        <p>
          Originally from Mexico, I moved to the states (southeast Idaho) when I
          was young and have now lived in 5 different states. I went to a small
          liberal arts college in the midwest where I ran track and cross
          country at the Division 3 level, and graduated with a degree in
          molecular biology.
        </p>
        <p>
          Currently living in Oakland, CA. I spend my free time travelling,
          trying out new restaurants, and biking in the East Bay.
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4}></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <a href="https://twitter.com/G_Abud" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-abud"
              className="icon fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Buuntu" className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  );
};

export default Main;
