import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Jongwook',
      company: 'Samsung',
      theme: 'dark',
      title: 'Frontend Developer',
      email: 'babyldk@gmail.com',
      message: 'go for it',
      fileName: 'wook',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Taehoon',
      company: 'Apple',
      theme: 'light',
      title: 'Frontend Developer',
      email: 'sagukorea@gmail.com',
      message: 'go for it',
      fileName: 'hoon',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Joowon',
      company: 'Hyundai',
      theme: 'colorful',
      title: 'Video Editor',
      email: 'dangun@gmail.com',
      message: 'go for it',
      fileName: 'won',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
