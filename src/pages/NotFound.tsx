
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Страница не найдена | Печать фотографий онлайн</title>
        <meta name="description" content="Страница не найдена. Вернитесь на главную страницу для печати фотографий." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-photo-primary">404</h1>
          <p className="text-xl text-gray-600 mb-6">Упс! Страница не найдена</p>
          <a 
            href="/" 
            className="bg-photo-primary hover:bg-photo-secondary text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Вернуться на главную
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
