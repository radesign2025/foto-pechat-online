
import { useState } from 'react';

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

interface PriceItem {
  format: string;
  prices: {
    price: string;
    quantity: string;
  }[];
}

const priceData: PriceCategory[] = [
  {
    title: "Печать фотографий 10х15. Глянцевая бумага 230 гр.м.",
    items: [
      {
        format: "10х15",
        prices: [
          { price: "10 рублей / шт.", quantity: "от 1 до 100 шт." },
          { price: "7 рублей / шт.", quantity: "от 101 до 1000 шт." },
          { price: "5 рублей / шт.", quantity: "от 1001 шт." }
        ]
      }
    ]
  },
  {
    title: "Печать фотографий 9х13. Глянцевая бумага 230 гр.м.",
    items: [
      {
        format: "9х13",
        prices: [
          { price: "18 рублей / шт.", quantity: "от 1 до 100 шт." },
          { price: "15 рублей / шт.", quantity: "от 101 до 1000 шт." },
          { price: "13 рублей / шт.", quantity: "от 1001 шт." }
        ]
      }
    ]
  },
  {
    title: "Печать фотографий 13х18. Глянцевая бумага 230 гр.м.",
    items: [
      {
        format: "13х18",
        prices: [
          { price: "23 рублей / шт.", quantity: "от 1 до 100 шт." },
          { price: "20 рублей / шт.", quantity: "от 101 до 1000 шт." },
          { price: "18 рублей / шт.", quantity: "от 1001 шт." }
        ]
      }
    ]
  },
  {
    title: "Печать фотографий 15х21. Глянцевая бумага 230 гр.м.",
    items: [
      {
        format: "15х21",
        prices: [
          { price: "26 рублей / шт.", quantity: "от 1 до 100 шт." },
          { price: "23 рублей / шт.", quantity: "от 101 до 1000 шт." },
          { price: "21 рублей / шт.", quantity: "от 1001 шт." }
        ]
      }
    ]
  },
  {
    title: "Печать фотографий 21х30. Глянцевая бумага 230 гр.м.",
    items: [
      {
        format: "21х30",
        prices: [
          { price: "35 рублей / шт.", quantity: "от 1 до 100 шт." },
          { price: "32 рублей / шт.", quantity: "от 101 до 1000 шт." },
          { price: "30 рублей / шт.", quantity: "от 1001 шт." }
        ]
      }
    ]
  },
  {
    title: "Печать в стиль Polaroid 10х10. Глянцевая бумага 230 гр.м.",
    items: [
      {
        format: "10х10",
        prices: [
          { price: "15 рублей / шт.", quantity: "от 1 до 100 шт." },
          { price: "12 рублей / шт.", quantity: "от 101 до 1000 шт." },
          { price: "10 рублей / шт.", quantity: "от 1001 шт." }
        ]
      }
    ]
  },
  {
    title: "Печать в стиль Polaroid 10х12. Глянцевая бумага 230 гр.м.",
    items: [
      {
        format: "10х12",
        prices: [
          { price: "15 рублей / шт.", quantity: "от 1 до 100 шт." },
          { price: "12 рублей / шт.", quantity: "от 101 до 1000 шт." },
          { price: "10 рублей / шт.", quantity: "от 1001 шт." }
        ]
      }
    ]
  }
];

const Prices = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="prices" className="section-container bg-gray-50">
      <h2 className="section-title">Печать фотографий, цена</h2>
      
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {priceData.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md text-sm md:text-base transition-colors ${
              activeTab === index 
                ? 'bg-photo-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {category.items[0].format}
          </button>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-4">{priceData[activeTab].title}</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="table-cell table-header">Формат</th>
                  <th className="table-cell table-header">Цена</th>
                  <th className="table-cell table-header">Количество</th>
                </tr>
              </thead>
              <tbody>
                {priceData[activeTab].items.map((item, itemIndex) => (
                  item.prices.map((price, priceIndex) => (
                    <tr key={`${itemIndex}-${priceIndex}`} className={priceIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      {priceIndex === 0 && (
                        <td className="table-cell" rowSpan={item.prices.length}>
                          {item.format}
                        </td>
                      )}
                      <td className="table-cell">{price.price}</td>
                      <td className="table-cell">{price.quantity}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
