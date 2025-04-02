
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
              
              {/* Знак отличия Авито вместо кнопки */}
              <a 
                href="https://www.avito.ru/brands/e9b6ef1e939b7c69e4d3b277bb64c2d9/all?sellerId=1e5c282f2fd7e9d3fc6141cd3ec3f5d9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-3 rounded-lg shadow-md transition-all duration-300 border border-white/30"
              >
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-yellow-400 fill-yellow-400" 
                    />
                  ))}
                </div>
                <Badge 
                  variant="outline" 
                  className="bg-green-600 text-white font-medium border-0 text-xs"
                >
                  Авито Продавец
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
