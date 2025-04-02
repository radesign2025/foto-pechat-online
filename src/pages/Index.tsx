
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Prices from '../components/Prices';
import Quality from '../components/Quality';
import Delivery from '../components/Delivery';
import Order from '../components/Order';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Перемотка к якорю, если он есть в URL при загрузке страницы
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Печать фотографий в Москве с доставкой России</title>
        <meta name="description" content="Печать фотографий в Москве от 5 руб. / шт. Доставка по России. Форматы: 10х15, 9х13, 13х18, 15х21, 21х30, Polaroid." />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Prices />
      <Quality />
      <Delivery />
      <Order />
      <Faq />
      <Footer />
    </>
  );
};

export default Index;
