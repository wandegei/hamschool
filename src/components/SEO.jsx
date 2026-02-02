import React from 'react';
import { Helmet } from 'react-helmet';
import { SCHOOL_INFO } from '../lib/constants';

const SEO = ({ 
  title, 
  description, 
  keywords,
  image = 'https://horizons-cdn.hostinger.com/1f45429d-a9a2-45db-8ba9-c11d21539189/3d927806ed3d5cfab74c836476e47832.jpg',
  url = window.location.href
}) => {
  const siteTitle = title ? `${title} | ${SCHOOL_INFO.name}` : `${SCHOOL_INFO.name} - ${SCHOOL_INFO.motto}`;
  const siteDescription = description || SCHOOL_INFO.tagline;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;