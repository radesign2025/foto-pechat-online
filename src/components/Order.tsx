
import { MessageCircle, ShoppingBag } from 'lucide-react';

const Order = () => {
  return (
    <section id="order" className="section-container">
      <h2 className="section-title">Заказать печать фотографий</h2>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-center mb-12 text-lg">
          Посчитать стоимость и оформить заказ на печать фотографий можно с нашим оператором в чате телеграмм или на сайте Авито.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <a 
            href="https://t.me/RADesign_StudiaD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <MessageCircle size={48} className="text-photo-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Заказать в Telegram</h3>
            <p className="text-gray-600 text-center mb-4">Напишите нам в Telegram и мы рассчитаем стоимость заказа</p>
            <span className="link">@RADesign_StudiaD</span>
          </a>
          
          <a 
            href="https://avito.ru/brands/e9b6ef1e939b7c69e4d3b277bb64c2d9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <ShoppingBag size={48} className="text-photo-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Заказать на Авито</h3>
            <p className="text-gray-600 text-center mb-4">Оформите заказ через безопасную сделку на Авито</p>
            <span className="link">Перейти на Авито</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Order;
