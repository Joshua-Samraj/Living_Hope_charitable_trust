// src/pages/GalleryPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Living Hope Charitable Trust | Project Photos & Impact</title>
        <meta 
          name="description" 
          content="View our gallery showcasing the impact of Living Hope Charitable Trust. Photos from medical camps, educational programs, flood relief, and community initiatives." 
        />
        <meta name="keywords" content="Gallery, Photo Gallery, Project Photos, Community Work, Humanitarian Aid, Medical Camp, Education Program" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://living-hope-charitable-trust.vercel.app/gallery" />
        <meta property="og:title" content="Gallery | Living Hope Charitable Trust" />
        <meta property="og:description" content="Explore photos from our community projects and humanitarian initiatives." />
        <meta property="og:image" content="https://ik.imagekit.io/vc42cyymbb/logo.png?updatedAt=1754075020511" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Living Hope Charitable Trust" />
        <meta name="twitter:description" content="See the impact of our charitable programs in real photos" />
      </Helmet>
      <Gallery />
    </>
  );
};

export default GalleryPage;
