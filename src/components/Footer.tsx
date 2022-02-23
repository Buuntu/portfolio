import React, { FC } from 'react';

type FooterPropsType = {
  timeout: boolean;
};

const Footer: FC<FooterPropsType> = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">&copy; 2020, Gabriel Abud</p>
  </footer>
);

export default Footer;
