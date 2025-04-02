import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

// Предполагаем, что у нас есть 10 фотографий различных типов
const photos = [{
  id: 1,
  type: 'vertical',
  src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
  alt: 'Пейзаж с горами'
}, {
  id: 2,
  type: 'vertical',
  src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
  alt: 'Водопад'
}, {
  id: 3,
  type: 'vertical',
  src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
  alt: 'Сосны'
}, {
  id: 4,
  type: 'vertical',
  src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
  alt: 'Морская волна'
}, {
  id: 5,
  type: 'horizontal',
  src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  alt: 'Озеро в горах'
}, {
  id: 6,
  type: 'horizontal',
  src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
  alt: 'Зеленые горы'
}, {
  id: 7,
  type: 'horizontal',
  src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  alt: 'Туманные горы'
}, {
  id: 8,
  type: 'horizontal',
  src: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
  alt: 'Песчаная дюна'
}, {
  id: 9,
  type: 'square',
  src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
  alt: 'Река в скалах'
}, {
  id: 10,
  type: 'square',
  src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
  alt: 'Лес в лучах солнца'
}];
const Quality = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const openModal = (id: number) => {
    setSelectedPhoto(id);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };
  const verticalPhotos = photos.filter(photo => photo.type === 'vertical');
  const horizontalPhotos = photos.filter(photo => photo.type === 'horizontal');
  const squarePhotos = photos.filter(photo => photo.type === 'square');
  return <section id="quality" className="section-container">
      <h2 className="section-title">Качество печати фотографий</h2>
      
      <div className="max-w-5xl mx-auto">
        <p className="mb-10 text-gray-700 my-[15px] text-left">Мы печатаем фотографии с особой заботой о качестве! Используем профессиональные шестицветные принтеры Epson и премиальную глянцевую фотобумагу плотностью 230 г/м², чтобы каждая деталь фотографий выглядела безупречно.</p>
        <p className="mb-10 text-gray-700 text-justify my-[15px]"> - Строгий контроль качества.  <br /> - Бесплатная цветокоррекция. <br /> - Высочайшее качество печати.</p> 
        <p className="mb-10 text-gray-700 text-justify">Ваши воспоминания достойны лучшего!</p>
        
        <div className="space-y-6">
          {/* Вертикальные фотографии */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {verticalPhotos.slice(0, 4).map((photo, index) => <div key={photo.id} className="gallery-item cursor-pointer col-span-1" onClick={() => openModal(photo.id)}>
                <img src={`${photo.src}?w=600&h=900&fit=crop&q=80`} alt={photo.alt} className="w-full h-full object-cover aspect-[2/3]" loading="lazy" />
              </div>)}
          </div>
          
          {/* Горизонтальные фотографии */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {horizontalPhotos.slice(0, 4).map(photo => <div key={photo.id} className="gallery-item cursor-pointer" onClick={() => openModal(photo.id)}>
                <img src={`${photo.src}?w=900&h=600&fit=crop&q=80`} alt={photo.alt} className="w-full h-full object-cover aspect-[3/2]" loading="lazy" />
              </div>)}
          </div>
          
          {/* Квадратные фотографии */}
          <div className="grid grid-cols-2 gap-4">
            {squarePhotos.slice(0, 2).map(photo => <div key={photo.id} className="gallery-item cursor-pointer" onClick={() => openModal(photo.id)}>
                <img src={`${photo.src}?w=600&h=600&fit=crop&q=80`} alt={photo.alt} className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>)}
          </div>
        </div>
      </div>
      
      {/* Модальное окно для просмотра фотографий */}
      {selectedPhoto !== null && <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={closeModal}>
            <X size={32} />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh]">
            {photos.find(photo => photo.id === selectedPhoto) && <img src={`${photos.find(photo => photo.id === selectedPhoto)?.src}?w=1200&q=90`} alt={photos.find(photo => photo.id === selectedPhoto)?.alt} className="max-w-full max-h-[90vh] object-contain" />}
          </div>
        </div>}
    </section>;
};
export default Quality;