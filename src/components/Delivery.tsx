import { Truck, Shield, CreditCard } from 'lucide-react';
const Delivery = () => {
  return <section id="delivery" className="section-container bg-gray-50">
      <h2 className="section-title">Печать фотографий с доставкой</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <Truck size={40} className="text-photo-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Доставка по всей России</h3>
            <p className="text-gray-600">Отправляем фотографии в любую точку России партнёрами Avito</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <Shield size={40} className="text-photo-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Безопасная оплата</h3>
            <p className="text-gray-600">Никаких скрытых платежей и комиссий. Только заранее оговоренная сумма</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <CreditCard size={40} className="text-photo-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Удобная оплата</h3>
            <p className="text-gray-600">Оплата через безопасную сделку Avito, или курьеру на руки, при доставке по Москве</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Информация о доставке</h3>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Мы предлагаем доставку через Avito по Москве и всей России.
            </p>
            <p>
              Стоимость доставки включена в стоимость заказа, вы платите заранее оговоренную сумму, без скрытых платежей и комиссий.
            </p>
            <p>
              Курьерская доставка по Москве в пределах МКАД стоит 600 рублей (до квартиры).
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Как происходит оплата</h3>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Если доставляет курьер, оплата производится при получении заказа.
            </p>
            <p>
              Если доставляет Avito, оплата производится при оформлении заказа через безопасную сделку.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Delivery;