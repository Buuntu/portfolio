import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/scss/main.scss';

type LayoutPropsType = {
  children: React.ReactNode;
  location?: any;
};

const Layout: FC<LayoutPropsType> = ({ children, location }) => {
  let content;

  if (location && location.pathname === '/') {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  );
};

export default Layout;
