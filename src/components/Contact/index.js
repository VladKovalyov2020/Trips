import React from 'react';

// Components

import { ContentWidthLimiter } from '../ContentWidthLimiter';
import { contactFotoList } from '../../constans/index';
import { ContactSocialFoto } from './ContactSocialFoto';
import { quickLinksList } from '../../constans/index';
import { ContactQuickLinks } from '../../components/Contact/ContactQuickLinks';
import EmailForm from '../../components/Contact/EmailForm';

// Styles

import './styles.scss';

//------------

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <ContentWidthLimiter>
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact-info__social-link">
              <p>Instagram</p>
              <ContactSocialFoto list={contactFotoList} />
            </div>

            <div className="contact-info__quicks-link">
              <p>Quick Links</p>
              <ContactQuickLinks list={quickLinksList} />
            </div>

            <div className=" contact-info__letter-text">
              <p>Newsletter</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt odio iure animi ullam quam, deleniti rem!
              </p>
              <EmailForm onSubmit={() => console.log()} />
            </div>
          </div>
          <div className="contact__copyright">
            <p>Copyright ©2020 All rights reserved</p>
          </div>
        </div>
      </ContentWidthLimiter>
    </section>
  );
};
