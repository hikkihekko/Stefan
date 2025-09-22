import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TrucksPage: React.FC = () => {
  const [selectedVolumeCategory, setSelectedVolumeCategory] = useState('all')

  // Данные самосвалов с фото и описаниями (по порядку объема кузова)
  const trucks = [
    {
      id: 1,
      name: 'самосвал камаз 65115',
      capacity: '14.5',
      image: '/images/самосвалы/камаз65115.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Грузоподъемность: 14,5т. Объем кузова: 10 куб.м',
      category: '10-12',
      specs: {
        capacity: 14.5,
        volume: 10,
        bodyType: 'задний',
        wheelFormula: '6x4'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'самосвал вездеход татра 815',
      capacity: '17',
      image: '/images/самосвалы/татра115вездех.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Грузоподъемность: 17т. Объем кузова: 10 куб.м',
      category: '10-12',
      specs: {
        capacity: 17,
        volume: 10,
        bodyType: 'задний',
        wheelFormula: '6x6'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'самосвал камаз 6520',
      capacity: '20',
      image: '/images/самосвалы/камаз 65200.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Грузоподъемность: 20т. Объем кузова: 16 куб.м',
      category: '15-18',
      specs: {
        capacity: 20,
        volume: 16,
        bodyType: 'задний',
        wheelFormula: '6x4'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'самосвал volvo fm 400',
      capacity: '35',
      image: '/images/самосвалы/вольво фм400.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Грузоподъемность: 35т. Объем кузова: 16 куб.м',
      category: '15-18',
      specs: {
        capacity: 35,
        volume: 16,
        bodyType: 'задний',
        wheelFormula: '8x4'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'самосвал volvo fm 6x4',
      capacity: '30',
      image: '/images/самосвалы/вольво эфэм0.webp',
      price: 'от 18 000 ₽/смена',
      description: 'Грузоподъемность: 30т. Объем кузова: 18 куб.м',
      category: '15-18',
      specs: {
        capacity: 30,
        volume: 18,
        bodyType: 'задний',
        wheelFormula: '6x4'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'самосвал man tgs 41.400 8x4',
      capacity: '24',
      image: '/images/самосвалы/man tgs 41400 8x4.webp',
      price: 'от 24 000 ₽/смена',
      description: 'Грузоподъемность: 24т. Объем кузова: 20 куб.м',
      category: '20-32',
      specs: {
        capacity: 24,
        volume: 20,
        bodyType: 'задний',
        wheelFormula: '8x4'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'самосвал volvo fmx 8x4',
      capacity: '35',
      image: '/images/самосвалы/самосвал вольво фмкс8на4.webp',
      price: 'от 25 000 ₽/смена',
      description: 'Грузоподъемность: 35т. Объем кузова: 25 куб.м',
      category: '20-32',
      specs: {
        capacity: 35,
        volume: 25,
        bodyType: 'задний',
        wheelFormula: '8x4'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'самосвал scania g450 kassbohrer',
      capacity: '50',
      image: '/images/самосвалы/kassbonher.webp',
      price: 'от 25 000 ₽/смена',
      description: 'Грузоподъемность: 50т. Объем кузова: 32 куб.м',
      category: '20-32',
      specs: {
        capacity: 50,
        volume: 32,
        bodyType: 'задний',
        wheelFormula: '6x2'
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по объему кузова
  const filteredTrucks = selectedVolumeCategory === 'all' 
    ? trucks 
    : trucks.filter(truck => truck.category === selectedVolumeCategory)

  const volumeCategories = [
    { id: 'all', name: 'Все самосвалы', count: trucks.length },
    { id: '10-12', name: '10-12 куб.м', count: trucks.filter(t => t.category === '10-12').length },
    { id: '15-18', name: '15-18 куб.м', count: trucks.filter(t => t.category === '15-18').length },
    { id: '20-32', name: '20-32 куб.м', count: trucks.filter(t => t.category === '20-32').length }
  ]

  const generateWhatsAppMessage = (truck: any) => {
    const message = `Здравствуйте! Хочу заказать ${truck.name} (${truck.capacity}т, ${truck.specs.volume} куб.м)`
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
          <span className="text-white">Самосвалы</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>самосвалы</h1>
            <p className="font-manrope font-medium" style={{fontSize: 20, color: '#525252', lineHeight: 1}}>
              Выберите желаемую технику
            </p>
          </div>

          {/* Фильтр по объему кузова */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2" style={{marginBottom: 12}}>
            {volumeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedVolumeCategory(category.id)}
                className={`px-6 py-3 rounded-full font-manrope font-medium text-[16px] whitespace-nowrap transition-all ${
                  selectedVolumeCategory === category.id
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

          {/* Сетка самосвалов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTrucks.map((truck) => (
              <div 
                key={truck.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 460}}
              >
                {/* Изображение */}
                <div className="relative" style={{height: 240}}>
                  <img 
                    src={truck.image}
                    alt={truck.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                      imageRendering: '-webkit-optimize-contrast'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      {truck.specs.volume} куб.м
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
                      <span className="text-slate-900 font-medium">{truck.specs.capacity} т</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Объем кузова:</span>
                      <span className="text-slate-900 font-medium">{truck.specs.volume} куб.м</span>
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
              Почему стоит арендовать самосвал у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Надежная техника
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все самосвалы проходят регулярное ТО и находятся в отличном техническом состоянии
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Опытные водители
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Профессиональные водители с большим опытом работы на различных объектах
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default TrucksPage
