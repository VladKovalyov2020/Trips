import React from 'react';

// Modules

// import { FaUtensils } from 'react-icons/fa';
// import { GiSandwich, GiFoodChain, GiSpottedArrowhead } from 'react-icons/gi';

// Components

import { ContentWidthLimiter } from '../../components/ContentWidthLimiter';
import { Tabs } from '../Tabs';
import { OurPosts } from '../../components/OurBlog/OurPosts';
import { OurVideo } from '../../components/OurBlog/OurVideo';
import { OurPhotosCard } from '../../components/OurBlog/OurPhotos';
import { ourPhotosList } from '../../constans/index';
import { ourPostsList } from '../../constans/index';

// Styles

import './styles.scss';

// ----------------

export const OurBlog = () => {
  const tabsLinks = [
    { name: 'ourPosts', title: 'Our Posts' },
    { name: 'ourVideo', title: 'Our Video' },
    { name: 'ourPhotos', title: 'Our Photos' },
  ];

  const tabsContent = [
    {
      name: 'ourPosts',
      content: () => (
        <div>
          <OurPosts list={ourPostsList} />
        </div>
      ),
    },
    {
      name: 'ourVideo',
      content: () => (
        <div>
          <OurVideo />
        </div>
      ),
    },
    {
      name: 'ourPhotos',
      content: () => (
        <div>
          <OurPhotosCard list={ourPhotosList} />
        </div>
      ),
    },
  ];

  return (
    <section id="blog" className="blog">
      <ContentWidthLimiter>
        <div className="blog__content">
          <div className="title blog__title">
            <p>Blog</p>
            <h3>Updates</h3>
            <h2>Our Blog</h2>
          </div>
          <Tabs
            defaultTab={tabsLinks[0].name}
            content={tabsContent}
            links={tabsLinks}
          />{' '}
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
