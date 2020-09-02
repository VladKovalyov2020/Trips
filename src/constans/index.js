import React from 'react';

// Modules

import {
  FaArtstation,
  FaHome,
  FaList,
  FaBlog,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import { RiContactsBookLine } from 'react-icons/ri';

export const navbarList = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Trips', to: 'trips' },
  { name: 'Blog', to: 'blog' },
  { name: 'Contact', to: 'contact' },
];

export const sidebarList = [
  { name: 'Home', to: 'home', icon: () => <FaHome /> },
  { name: 'About', to: 'about', icon: () => <FaArtstation /> },
  { name: 'Trips', to: 'trips', icon: () => <FaList /> },
  { name: 'Blog', to: 'blog', icon: () => <FaBlog /> },
  { name: 'Contact', to: 'contact', icon: () => <RiContactsBookLine /> },
];

export const tripsList = [
  {
    price: '200.00',
    title: 'Dignissimos debitis',
    img: require('../assets/images/img_1.jpg'),
  },
  {
    price: '390.00',
    title: 'Consectetur adipisicing',
    img: require('../assets/images/img_2.jpg'),
  },
  {
    price: '180.00',
    title: 'Temporibus aperiam',
    img: require('../assets/images/img_3.jpg'),
  },
  {
    price: '600.00',
    title: 'Expedita fugiat',
    img: require('../assets/images/img_4.jpg'),
  },
  {
    price: '330.00',
    title: 'Consectetur adipisicing',
    img: require('../assets/images/img_5.jpg'),
  },
  {
    price: '450.00',
    title: 'Consectetur Amet',
    img: require('../assets/images/img_6.jpg'),
  },
];

export const sliderList = [
  {
    id: '1',
    img: require('../../src/assets/images/person_1.jpg'),
    title: 'John Doe',
    subtitle: 'Staff',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error',
    socialLink: [
      { icon: () => <FaFacebookF />, to: 'https://www.facebook.com' },
      { icon: () => <FaInstagram />, to: 'https://www.instagram.com' },
      { icon: () => <FaTwitter />, to: 'https://twitter.com' },
    ],
  },
  {
    id: '2',
    img: require('../../src/assets/images/person_2.jpg'),
    title: 'Jean Doe',
    subtitle: 'Staff',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error',
    socialLink: [
      { icon: () => <FaFacebookF />, to: 'https://www.facebook.com' },
      { icon: () => <FaInstagram />, to: 'https://www.instagram.com' },
      { icon: () => <FaTwitter />, to: 'https://twitter.com' },
    ],
  },
  {
    id: '3',
    img: require('../../src/assets/images/person_3.jpg'),
    title: 'Claire Dormey',
    subtitle: 'Staff',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error',
    socialLink: [
      { icon: () => <FaFacebookF />, to: 'https://www.facebook.com' },
      { icon: () => <FaInstagram />, to: 'https://www.instagram.com' },
      { icon: () => <FaTwitter />, to: 'https://twitter.com' },
    ],
  },
];

export const ourPostsList = [
  {
    id: '1',
    img: require('../assets/images/img_1.jpg'),
    name: 'picture-1',
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2020 ',
    published: 'Admin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
  },
  {
    id: '2',
    img: require('../assets/images/img_2.jpg'),
    name: 'picture-2',
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2020 ',
    published: 'Admin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
  },
  {
    id: '3',
    img: require('../assets/images/img_3.jpg'),
    name: 'picture-3',
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2020 ',
    published: 'Admin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
  },
];

export const ourPhotosList = [
  {
    id: '1',
    img: require('../assets/images/ouro-photo-1.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2020',
  },
  {
    id: '2',
    img: require('../assets/images/ouro-photo-2.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2020',
  },
  {
    id: '3',
    img: require('../assets/images/ouro-photo-3.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2020',
  },
  {
    id: '4',
    img: require('../assets/images/ouro-photo-4.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2020',
  },
  {
    id: '5',
    img: require('../assets/images/ouro-photo-5.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2020',
  },
  {
    id: '6',
    img: require('../assets/images/ouro-photo-6.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    date: 'July 17, 2020',
  },
];

export const contactFotoList = [
  {
    title: 'trips-1',
    img: require('../assets/images/img_1.jpg'),
    link: 'https://www.instagram.com',
  },
  {
    title: 'trips-2',
    img: require('../assets/images/img_2.jpg'),
    link: 'https://www.instagram.com',
  },
  {
    title: 'trips-3',
    img: require('../assets/images/img_3.jpg'),
    link: 'https://www.instagram.com',
  },
  {
    title: 'trips-4',
    img: require('../assets/images/img_4.jpg'),
    link: 'https://www.instagram.com',
  },
  {
    title: 'trips-5',
    img: require('../assets/images/img_5.jpg'),
    link: 'https://www.instagram.com',
  },
  {
    title: 'trips-6',
    img: require('../assets/images/img_6.jpg'),
    link: 'https://www.instagram.com',
  },
];

export const quickLinksList = [
  { name: 'About Us', to: '#' },
  { name: 'Testimonials', to: '#' },
  { name: 'Terms of Service', to: '#' },
  { name: 'Privacy', to: '#' },
  { name: 'Contact Us', to: '#' },
];
