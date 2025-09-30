import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BoardTrucksPage: React.FC = () => {
  const [selectedCapacityCategory, setSelectedCapacityCategory] = useState('all')

  // Данные бортовых автомобилей с фото и описаниями
  const boardTrucks = [
    {
      id: 1,
      name: 'бортовой автомобиль газель',
      capacity: '1.5',
      image: '/images/бортавто/¦¦¦-¦¬¦¦¦¬TМ.webp',
      price: 'от 10 000 ₽/смена',
      description: 'Грузоподъемность т: 1.5. Длина борта, м: 4',
      category: '1-5',
      specs: {
        capacity: 1.5,
        boardLength: 4,
        chassis: 'ГАЗель',
        engine: 'ГАЗ-5602',
        weight: 1500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'бортовой автомобиль iveco daily',
      capacity: '3',
      image: '/images/бортавто/ivecodaily.webp',
      price: 'от 10 000 ₽/смена',
      description: 'Грузоподъемность т: 3. Длина борта, м: 4.5',
      category: '1-5',
      specs: {
        capacity: 3,
        boardLength: 4.5,
        chassis: 'Iveco Daily',
        engine: 'Iveco F1C',
        weight: 3000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'бортовой автомобиль газ 33023',
      capacity: '3.5',
      image: '/images/бортавто/¦¦¦-¦¬33023.webp',
      price: 'от 10 000 ₽/смена',
      description: 'Грузоподъемность т: 3.5. Длина борта, м: 5.5',
      category: '1-5',
      specs: {
        capacity: 3.5,
        boardLength: 5.5,
        chassis: 'ГАЗ 33023',
        engine: 'ГАЗ-5602',
        weight: 3500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'бортовой автомобиль baw 33460u',
      capacity: '4',
      image: '/images/бортавто/baw.webp',
      price: 'от 10 000 ₽/смена',
      description: 'Грузоподъемность т: 4. Длина борта, м: 6',
      category: '1-5',
      specs: {
        capacity: 4,
        boardLength: 6,
        chassis: 'BAW 33460U',
        engine: 'BAW',
        weight: 4000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'бортовой автомобиль mitsubishi fuso',
      capacity: '5',
      image: '/images/бортавто/mitsubishifuso.webp',
      price: 'от 11 000 ₽/смена',
      description: 'Грузоподъемность т: 5. Длина борта, м: 6',
      category: '1-5',
      specs: {
        capacity: 5,
        boardLength: 6,
        chassis: 'Mitsubishi Fuso',
        engine: 'Mitsubishi 4M50',
        weight: 5000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'бортовой автомобиль камаз 4308',
      capacity: '6',
      image: '/images/бортавто/¦¦¦-¦-¦-¦¬4308.webp',
      price: 'от 13 000 ₽/смена',
      description: 'Грузоподъемность т: 6. Длина борта, м: 8',
      category: '6-15',
      specs: {
        capacity: 6,
        boardLength: 8,
        chassis: 'КАМАЗ 4308',
        engine: 'КАМАЗ-740.31-240',
        weight: 6000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'бортовой автомобиль маз 5336a5-320',
      capacity: '10',
      image: '/images/бортавто/¦-¦-¦¬5336¦-5.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Грузоподъемность т: 10. Длина борта, м: 6',
      category: '6-15',
      specs: {
        capacity: 10,
        boardLength: 6,
        chassis: 'МАЗ 5336A5-320',
        engine: 'ЯМЗ-238ДЕ2',
        weight: 10000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'бортовой автомобиль камаз 5321',
      capacity: '11',
      image: '/images/бортавто/¦¦¦-¦-¦-¦¬5321.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Грузоподъемность т: 11. Длина борта, м: 6.2',
      category: '6-15',
      specs: {
        capacity: 11,
        boardLength: 6.2,
        chassis: 'КАМАЗ 5321',
        engine: 'КАМАЗ-740.30-260',
        weight: 11000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'бортовой автомобиль hino 500',
      capacity: '14',
      image: '/images/бортавто/hino500.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Грузоподъемность т: 14. Длина борта, м: 8.6',
      category: '6-15',
      specs: {
        capacity: 14,
        boardLength: 8.6,
        chassis: 'Hino 500',
        engine: 'Hino J08E',
        weight: 14000
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по грузоподъемности
  const filteredTrucks = selectedCapacityCategory === 'all' 
    ? boardTrucks 
    : boardTrucks.filter(truck => truck.category === selectedCapacityCategory)

  const capacityCategories = [
    { id: 'all', name: 'Все бортовые автомобили', count: boardTrucks.length },
    { id: '1-5', name: '1-5 тонн', count: boardTrucks.filter(t => t.category === '1-5').length },
    { id: '6-15', name: '6-15 тонн', count: boardTrucks.filter(t => t.category === '6-15').length }
  ]

  const generateWhatsAppMessage = (truck: any) => {
    const message = `Здравствуйте! Хочу заказать ${truck.name} (${truck.capacity}т, ${truck.specs.boardLength}м)`
    return encodeURIComponent(message)
  }

  const handleOrderTruck = (truck: any) => {
    const message = generateWhatsAppMessage(truck)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Бортовые автомобили</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-0" style={{lineHeight: 1}}>бортовые автомобили</h1>
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

          {/* Сетка бортовых автомобилей */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTrucks.map((truck) => (
              <div 
                key={truck.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 460}}
              >
                {/* Изображение */}
                <div className="relative bg-white" style={{height: 240}}>
                  <img 
                    src={truck.image}
                    alt={truck.name}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: 'fill',
                      imageRendering: 'high-quality'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      {truck.capacity} тонн
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {truck.name}
                  </h3>

                  {/* Характеристики */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Грузоподъемность:</span>
                      <span className="text-slate-900 font-medium">{truck.capacity} т</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Длина борта:</span>
                      <span className="text-slate-900 font-medium">{truck.specs.boardLength} м</span>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {truck.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderTruck(truck)}
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
              Почему стоит арендовать бортовой автомобиль у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Собственный парк техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все бортовые автомобили находятся в отличном техническом состоянии и регулярно проходят ТО
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

export default BoardTrucksPage
