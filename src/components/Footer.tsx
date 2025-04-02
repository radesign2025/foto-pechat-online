
import { Phone, Mail, ShoppingBag } from 'lucide-react';

const footerServices = [
  { name: "Печать бирок", url: "#" },
  { name: "Печать визиток", url: "#" },
  { name: "Печать буклетов", url: "#" },
  { name: "Печать листовок", url: "#" },
  { name: "Печать открыток", url: "#" },
  { name: "Печать каталогов", url: "#" },
  { name: "Печать календарей", url: "#" },
  { name: "Создание макетов", url: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Другие услуги */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Другие услуги</h3>
            <ul className="space-y-2">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <a href={service.url} className="hover:text-white transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://avito.ru/brands/e9b6ef1e939b7c69e4d3b277bb64c2d9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <ShoppingBag className="mr-2" size={18} />
                  <span>Авито</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+79250275414" 
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Phone className="mr-2" size={18} />
                  <span>+7 925 027-54-14</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/RADesign_StudiaD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2581 2.99951C21.9502 2.67691 21.4692 2.56191 20.9722 2.69601L2.45225 8.69601C1.88525 8.84671 1.49225 9.22701 1.38125 9.71401C1.26725 10.217 1.44925 10.752 1.86425 11.152L5.74425 14.942L8.28425 22.6C8.46525 23.132 8.89225 23.5 9.40225 23.5C9.40825 23.5 9.41525 23.5 9.42125 23.5C9.93825 23.493 10.3723 23.107 10.5403 22.566L16.5403 4.04601C16.6743 3.54901 16.5663 3.06201 16.2442 2.75401L22.2581 2.99951ZM9.40225 20.898L7.39225 14.8L11.8952 10.413C12.0952 10.216 12.0952 9.89601 11.8952 9.70001C11.6982 9.50401 11.3762 9.50401 11.1792 9.70001L6.61125 14.148L3.12125 10.733L19.7143 5.23901L9.40225 20.898Z" fill="currentColor"/>
                  </svg>
                  <span>Телеграмм</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@radesign.space" 
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Mail className="mr-2" size={18} />
                  <span>info@radesign.space</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Создание и аренда сайта */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Создание и аренда сайта</h3>
            <p>Студия Вэб-аренда</p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Фото-Печать. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
