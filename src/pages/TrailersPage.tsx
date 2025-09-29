import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TrailersPage: React.FC = () => {
  const [selectedCapacityCategory, setSelectedCapacityCategory] = useState('all')

  // Данные тралов с фото и описаниями (по возрастанию грузоподъемности)
  const trailers = [
    {
      id: 1,
      name: 'трал man tga 9.6м',
      capacity: '30',
      image: '/images/тралы/man tga30.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность т: 30. Длина платформы, м: 9.6',
      category: '30-40',
      specs: {
        platformLength: 9.6,
        platformWidth: 2.5,
        chassis: 'MAN TGA',
        engine: 'MAN',
        weight: 30000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'трал freightliner argosy 14м',
      capacity: '30',
      image: '/images/тралы/freightliner argosy30.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность т: 30. Длина платформы, м: 14',
      category: '30-40',
      specs: {
        platformLength: 14,
        platformWidth: 2.5,
        chassis: 'Freightliner Argosy',
        engine: 'Freightliner',
        weight: 30000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'трал мега 15.5м',
      capacity: '38',
      image: '/images/тралы/tralnega.webp.webp',
      price: 'от 20 000 ₽/смена',
      description: 'Грузоподъемность т: 38. Длина платформы, м: 15.5',
      category: '30-40',
      specs: {
        platformLength: 15.5,
        platformWidth: 2.5,
        chassis: 'Мега',
        engine: 'Мега',
        weight: 38000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'трал volvo 9.3м',
      capacity: '40',
      image: '/images/тралы/volvo40t.webp',
      price: 'от 22 000 ₽/смена',
      description: 'Грузоподъемность т: 40. Длина платформы, м: 9.3',
      category: '30-40',
      specs: {
        platformLength: 9.3,
        platformWidth: 2.5,
        chassis: 'Volvo',
        engine: 'Volvo',
        weight: 40000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'трал scania 7.95м',
      capacity: '45',
      image: '/images/тралы/scania45t.webp',
      price: 'от 23 000 ₽/смена',
      description: 'Грузоподъемность т: 45. Длина платформы, м: 7.95',
      category: '45-65',
      specs: {
        platformLength: 7.95,
        platformWidth: 2.5,
        chassis: 'Scania',
        engine: 'Scania',
        weight: 45000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'трал volvo fm 13м',  
      capacity: '50',
      image: '/images/тралы/volvo50t.webp',
      price: 'от 25 000 ₽/смена',
      description: 'Грузоподъемность т: 50. Длина платформы, м: 13',
      category: '45-65',
      specs: {
        platformLength: 13,
        platformWidth: 2.5,
        chassis: 'Volvo',
        engine: 'Volvo',
        weight: 50000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'трал юмба 11.6м',
      capacity: '61.5',
      image: '/images/тралы/tralyumba.webp',
      price: 'от 25 000 ₽/смена',
      description: 'Грузоподъемность т: 61.5. Длина платформы, м: 11.6',
      category: '45-65',
      specs: {
        platformLength: 11.6,
        platformWidth: 2.5,
        chassis: 'Юмба',
        engine: 'Юмба',
        weight: 61500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'трал полуприцеп корыто 17.7м',
      capacity: '64',
      image: '/images/тралы/tralkoryto.webp',
      price: 'от 27 000 ₽/смена',
      description: 'Грузоподъемность т: 64. Длина платформы, м: 17.7',
      category: '45-65',
      specs: {
        platformLength: 17.7,
        platformWidth: 2.5,
        chassis: 'Корыто',
        engine: 'Корыто',
        weight: 64000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'трал камаз 11.5м',
      capacity: '65',
      image: '/images/тралы/kamaz65tonn.webp',
      price: 'от 27 000 ₽/смена',
      description: 'Грузоподъемность т: 65. Длина платформы, м: 11.5',
      category: '45-65',
      specs: {
        platformLength: 11.5,
        platformWidth: 2.5,
        chassis: 'Камаз 99426F',
        engine: 'Камаз',
        weight: 65000
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по грузоподъемности
  const filteredTrailers = selectedCapacityCategory === 'all' 
    ? trailers 
    : trailers.filter(trailer => trailer.category === selectedCapacityCategory)

  const capacityCategories = [
    { id: 'all', name: 'Все тралы', count: trailers.length },
    { id: '30-40', name: '30-40 тонн', count: trailers.filter(t => t.category === '30-40').length },
    { id: '45-65', name: '45-65 тонн', count: trailers.filter(t => t.category === '45-65').length }
  ]

  const generateWhatsAppMessage = (trailer: any) => {
    const message = `Здравствуйте! Хочу заказать ${trailer.name} (${trailer.capacity}т, ${trailer.specs.platformLength}м)`
    return encodeURIComponent(message)
  }

  const handleOrderTrailer = (trailer: any) => {
    const message = generateWhatsAppMessage(trailer)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Тралы</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-0" style={{lineHeight: 1}}>тралы</h1>
            <p className="font-manrope font-medium text-base sm:text-lg lg:text-xl text-[#525252]" style={{lineHeight: 1}}>
              Выберите желаемую технику
            </p>
          </div>

          {/* Фильтр по грузоподъемности */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2" style={{marginBottom: 12}}>
            {capacityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCapacityCategory(category.id)}
                className={`px-6 py-3 rounded-full font-manrope font-medium text-[16px] whitespace-nowrap transition-all ${
                  selectedCapacityCategory === category.id
                    ? 'bg-[#3535B9] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Описание */}
          <div style={{marginBottom: 24}}>
            <p className="font-manrope text-slate-600" style={{fontSize: 18, lineHeight: 1}}>
              Итоговая стоимость аренды зависит от условий работ и обсуждается непосредственно с менеджером
            </p>
          </div>

          {/* Сетка тралов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTrailers.map((trailer) => (
              <div 
                key={trailer.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 460}}
              >
                {/* Изображение */}
                <div className="relative bg-white" style={{height: 240}}>
                  <img 
                    src={trailer.image}
                    alt={trailer.name}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: 'fill',
                      imageRendering: 'high-quality'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      {trailer.capacity} тонн
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {trailer.name}
                  </h3>

                  {/* Характеристики */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Грузоподъемность:</span>
                      <span className="text-slate-900 font-medium">{trailer.capacity} т</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Длина платформы:</span>
                      <span className="text-slate-900 font-medium">{trailer.specs.platformLength} м</span>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {trailer.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderTrailer(trailer)}
                      className="w-full h-[48px] rounded-[24px] bg-[#3535B9] hover:bg-[#2929A3] text-white font-manrope font-medium text-[15px] transition-colors"
                    >
                      Арендовать технику
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Информация в конце */}
          <div className="mt-12 p-6 bg-slate-50 rounded-[24px]">
            <h3 className="font-baron font-bold text-slate-900 mb-4" style={{fontSize: 24}}>
              Почему стоит арендовать трал у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Собственный парк техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все тралы находятся в отличном техническом состоянии и регулярно проходят ТО
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Опытные водители
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все водители имеют соответствующие удостоверения и многолетний опыт работы
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default TrailersPage
