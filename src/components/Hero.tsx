import { useEffect, useState } from 'react';
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section id="home" className="relative h-[768px] max-h-screen w-full overflow-hidden">
      <div className={`w-full h-full bg-cover bg-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{
      backgroundImage: 'url("/lovable-uploads/1f6cf1fa-75e5-4739-b5b4-146dad1485ca.png")'
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-lg text-white animate-slide-in">
              <h1 className="text-4xl font-bold mb-4 md:text-3xl">Пeчaть фoтoгpафий в Москве Достaвка пo РФ</h1>
              <p className="text-lg mb-8 md:text-xl">Пpофеccиoнaльная пeчать фотографий на совpeменнoм oбоpудoвaнии</p>
              <a href="#order" className="bg-photo-primary hover:bg-photo-secondary text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-block" onClick={e => {
              e.preventDefault();
              document.getElementById('order')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Заказать печать
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;