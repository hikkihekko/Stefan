import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LongTrucksPage: React.FC = () => {
  const [selectedCapacityCategory, setSelectedCapacityCategory] = useState('all')

  // Данные длинномеров с фото и описаниями (отсортированы по грузоподъемности)
  const longTrucks = [
    {
      id: 1,
      name: 'длинномер камаз 65116',
      capacity: '12',
      length: '9',
      image: '/images/длинномеры/65116.webp',
      price: 'от 15 000 ₽/смена',
      description: 'грузоподъемность т: 12. длина борта м: 9',
      category: '10-15',
      specs: {
        capacity: 12,
        length: 9,
        chassis: 'КАМАЗ-65116',
        engine: 'КАМАЗ-740.30-260',
        weight: 12000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'длинномер камаз 44108',
      capacity: '12',
      length: '13.6',
      image: '/images/длинномеры/44108.webp',
      price: 'от 15 000 ₽/смена',
      description: 'грузоподъемность т: 12. длина борта м: 13.6',
      category: '10-15',
      specs: {
        capacity: 12,
        length: 13.6,
        chassis: 'КАМАЗ-44108',
        engine: 'КАМАЗ-740.31-240',
        weight: 12000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'длинномер scania 21957',
      capacity: '20',
      length: '13.6',
      image: '/images/длинномеры/scania21957.webp',
      price: 'от 16 000 ₽/смена',
      description: 'грузоподъемность т: 20. длина борта м: 13.6',
      category: '20-25',
      specs: {
        capacity: 20,
        length: 13.6,
        chassis: 'SCANIA 21957',
        engine: 'SCANIA',
        weight: 20000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'длинномер volvo fh 12',
      capacity: '20',
      length: '13.6',
      image: '/images/длинномеры/volvo fh13.webp',
      price: 'от 16 000 ₽/смена',
      description: 'грузоподъемность т: 20. длина борта м: 13.6',
      category: '20-25',
      specs: {
        capacity: 20,
        length: 13.6,
        chassis: 'VOLVO FH 12',
        engine: 'VOLVO',
        weight: 20000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'длинномер камаз 65116',
      capacity: '25',
      length: '12',
      image: '/images/длинномеры/651162.webp',
      price: 'от 16 000 ₽/смена',
      description: 'грузоподъемность т: 25. длина борта м: 12',
      category: '20-25',
      specs: {
        capacity: 25,
        length: 12,
        chassis: 'КАМАЗ-65116',
        engine: 'КАМАЗ-740.31-240',
        weight: 25000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'длинномер man f2000 тент',
      capacity: '25',
      length: '12',
      image: '/images/длинномеры/АMANf2000.webp',
      price: 'от 16 000 ₽/смена',
      description: 'грузоподъемность т: 25. длина борта м: 12',
      category: '20-25',
      specs: {
        capacity: 25,
        length: 12,
        chassis: 'MAN F2000',
        engine: 'MAN',
        weight: 25000
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по грузоподъемности
  const filteredTrucks = selectedCapacityCategory === 'all' 
    ? longTrucks 
    : longTrucks.filter(truck => truck.category === selectedCapacityCategory)

  const capacityCategories = [
    { id: 'all', name: 'Все длинномеры', count: longTrucks.length },
    { id: '10-15', name: '12 тонн', count: longTrucks.filter(t => t.category === '10-15').length },
    { id: '20-25', name: '20-25 тонн', count: longTrucks.filter(t => t.category === '20-25').length }
  ]

  const generateWhatsAppMessage = (truck: any) => {
    const message = `Здравствуйте! Хочу заказать ${truck.name} (${truck.capacity}т, ${truck.length}м)`
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
          <span className="text-white">Длинномеры</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-0" style={{lineHeight: 1}}>длинномеры</h1>
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

          {/* Сетка длинномеров */}
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
                      <span className="text-slate-900 font-medium">{truck.length} м</span>
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
              Почему стоит арендовать длинномер у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Собственный парк техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все длинномеры находятся в отличном техническом состоянии и регулярно проходят ТО
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

export default LongTrucksPage
