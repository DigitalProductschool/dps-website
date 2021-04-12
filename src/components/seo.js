import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({
  lang,
  meta,
  description,
  title,
  author,
  image,
  keywords,
  pathname,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaImage = image || data.site.siteMetadata.image;
        const metaKeywords = keywords;

        const canonical = pathname
          ? `${data.site.siteMetadata.url}${pathname}`
          : null;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={metaTitle}
            titleTemplate={`%s`}
            link={
              canonical
                ? [
                    {
                      rel: 'canonical',
                      href: canonical,
                    },
                  ]
                : []
            }
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: 'og:image',
                content: metaImage,
              },
              {
                property: `og:image:type`,
                content: `image/jpeg`,
              },
              {
                property: 'og:image:width',
                content: `1200`,
              },
              {
                property: 'og:image:height',
                content: `630`,
              },
              {
                property: `og:image:alt`,
                content: `Apply now for DPS and become an experienced digital product maker!`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.twitterAuthor,
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.twitterAuthor,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `instagram:card`,
                content: `summary`,
              },
              {
                name: `instagram:creator`,
                content: metaAuthor,
              },
              {
                name: `instagram:site`,
                content: metaAuthor,
              },
              {
                name: `instagram:title`,
                content: metaTitle,
              },
              {
                name: `instagram:description`,
                content: metaDescription,
              },
              {
                name: `facebook:card`,
                content: `summary`,
              },
              {
                name: `facebook:creator`,
                content: metaAuthor,
              },
              {
                name: `facebook:site`,
                content: metaAuthor,
              },
              {
                name: `facebook:title`,
                content: metaTitle,
              },
              {
                name: `facebook:description`,
                content: metaDescription,
              },
              {
                property: `google-site-verification`,
                content: `4zjoV-3vBa7xWLagSj2ATnLDmHfHAYClMkSbxg8MdeE`,
              },
            ]
              .concat(
                metaKeywords && metaKeywords.length > 0
                  ? {
                      name: `keywords`,
                      content: metaKeywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.array,
  description: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        twitterAuthor
        image
        url
      }
    }
  }
`;
