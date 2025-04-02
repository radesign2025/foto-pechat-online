
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: "На каком оборудовании идёт печать фотографий? Какое качество печати?",
    answer: (
      <p>
        У нас струйная печать на шестицветных фото принтерах Epson. Фотобумага глянцевая плотностью 230 г/м². 
        Каждая фотография при необходимости проходит цветокоррекцию, а также обязательный контроль качества после печати.
      </p>
    )
  },
  {
    question: "Фотографии будут с полями?",
    answer: (
      <>
        <p className="mb-2">
          При печати края изображения немного обрезаются. Если важные элементы выходят за линию реза, такие фотографии мы печатаем с полями, в этом случае кадр сохраняется без обрезки.
        </p>
        <p>
          Однако в целом фотографии печатаются без полей.
        </p>
      </>
    )
  },
  {
    question: "Какие форматы файлов принимаются?",
    answer: (
      <p>
        Мы принимаем любые графические форматы: JPG, JPEG, PNG, HEIC, HEIF, WEBP, TIFF, TIF, GIF, CR2.
        Пожалуйста, присылайте файлы в максимально возможном качестве — это обеспечит наилучший результат печати.
      </p>
    )
  },
  {
    question: "Сколько времени занимает печать фотографий?",
    answer: (
      <p>
        Время печати зависит от количества фотографий и очереди перед вами.
        В среднем это занимает от 1 до 5 рабочих дней.
      </p>
    )
  }
];

const Faq = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter(item => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section id="faq" className="section-container bg-gray-50">
      <h2 className="section-title">Ответы на ваши вопросы</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md divide-y">
          {faqItems.map((item, index) => (
            <div key={index} className="p-6">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="flex-shrink-0 ml-2 text-gray-500" />
                ) : (
                  <ChevronDown className="flex-shrink-0 ml-2 text-gray-500" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="mt-4 text-gray-700 animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
