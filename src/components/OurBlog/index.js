import React from 'react';

// Components

import { ContentWidthLimiter } from '../../components/ContentWidthLimiter';
import { Tabs } from '../Tabs';
import { Title } from '../../components/Title';
import { blogTitleList } from '../../constants/index';
import { OurPosts } from '../../components/OurBlog/OurPosts';
import { OurVideo } from '../../components/OurBlog/OurVideo';
import { OurPhotosCard } from '../../components/OurBlog/OurPhotos';
import { ourPhotosList } from '../../constants/index';
import { ourPostsList } from '../../constants/index';

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
          <Title className="blog__title" list={blogTitleList} />
          <Tabs
            defaultTab={tabsLinks[0].name}
            content={tabsContent}
            links={tabsLinks}
          />
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
