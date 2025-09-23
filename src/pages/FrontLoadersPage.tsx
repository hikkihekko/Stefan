import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FrontLoadersPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные фронтальных погрузчиков с фото и описаниями
  const frontLoaders = [
    {
      id: 1,
      name: 'фронтальный погрузчик sdlg 953',
      capacity: '5',
      image: '/images/фронтпогруз/sdlg 953.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Грузоподъемность т: 5. Ковш, м³: 1.7',
      category: '1.5-2.0',
      specs: {
        bucket: 1.7,
        maxHeight: 4.0,
        unloadHeight: 3.0,
        engine: 'Weichai WP10G220E40',
        weight: 15000,
        power: 162
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'фронтальный погрузчик liebherr l522',
      capacity: '3',
      image: '/images/фронтпогруз/iebherr522.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Грузоподъемность т: 3. Ковш, м³: 1.8',
      category: '1.5-2.0',
      specs: {
        bucket: 1.8,
        maxHeight: 3.5,
        unloadHeight: 2.85,
        engine: 'Liebherr D934L A6',
        weight: 12000,
        power: 130
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'фронтальный погрузчик sdlg lg933l',
      capacity: '3',
      image: '/images/фронтпогруз/sdlglg933.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Грузоподъемность т: 3. Ковш, м³: 2.0',
      category: '2.1-3.5',
      specs: {
        bucket: 2.0,
        maxHeight: 3.6,
        unloadHeight: 2.95,
        engine: 'Weichai WP10G220E40',
        weight: 12500,
        power: 162
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'фронтальный погрузчик jcb 426 zx',
      capacity: '4',
      image: '/images/фронтпогруз/jcb426.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность т: 4. Ковш, м³: 2.1',
      category: '2.1-3.5',
      specs: {
        bucket: 2.1,
        maxHeight: 3.8,
        unloadHeight: 2.85,
        engine: 'JCB Dieselmax 444',
        weight: 14000,
        power: 74
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'фронтальный погрузчик амкодор 342b',
      capacity: '4',
      image: '/images/фронтпогруз/amkodor342b.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность т: 4. Ковш, м³: 2.3',
      category: '2.1-3.5',
      specs: {
        bucket: 2.3,
        maxHeight: 3.8,
        unloadHeight: 3.1,
        engine: 'Амкодор Д-260.1',
        weight: 13500,
        power: 95
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'фронтальный погрузчик mitsuber ml541n',
      capacity: '5',
      image: '/images/фронтпогруз/mitsuberml541n.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность т: 5. Ковш, м³: 3.0',
      category: '2.1-3.5',
      specs: {
        bucket: 3.0,
        maxHeight: 4.0,
        unloadHeight: 3.0,
        engine: 'Weichai WP10G220E40',
        weight: 15000,
        power: 162
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'фронтальный погрузчик john deere wl56',
      capacity: '5',
      image: '/images/фронтпогруз/johndeerewl56.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность т: 5. Ковш, м³: 3.1',
      category: '2.1-3.5',
      specs: {
        bucket: 3.1,
        maxHeight: 4.0,
        unloadHeight: 2.9,
        engine: 'John Deere 4045TF220',
        weight: 15500,
        power: 162
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'фронтальный погрузчик liebherr l544',
      capacity: '3',
      image: '/images/фронтпогруз/liebherrl544.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность т: 3. Ковш, м³: 3.3',
      category: '2.1-3.5',
      specs: {
        bucket: 3.3,
        maxHeight: 3.6,
        unloadHeight: 2.85,
        engine: 'Liebherr D934L A6',
        weight: 13000,
        power: 130
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'фронтальный погрузчик komatsu wa420',
      capacity: '6.5',
      image: '/images/фронтпогруз/komatsuwa420.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность т: 6.5. Ковш, м³: 3.5',
      category: '2.1-3.5',
      specs: {
        bucket: 3.5,
        maxHeight: 4.2,
        unloadHeight: 3.0,
        engine: 'Komatsu SAA6D107E-1',
        weight: 18000,
        power: 162
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 10,
      name: 'фронтальный погрузчик sdlg lg936l',
      capacity: '3',
      image: '/images/фронтпогруз/sdlg936.webp',
      price: 'от 17 210 ₽/смена',
      description: 'Грузоподъемность т: 3. Ковш, м³: 1.7',
      category: '1.5-2.0',
      specs: {
        bucket: 1.7,
        maxHeight: 3.5,
        unloadHeight: 2.95,
        engine: 'Weichai WP10G220E40',
        weight: 12000,
        power: 162
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по весовой категории
  const filteredLoaders = selectedWeightCategory === 'all' 
    ? frontLoaders 
    : frontLoaders.filter(loader => loader.category === selectedWeightCategory)

  const weightCategories = [
    { id: 'all', name: 'Все погрузчики', count: frontLoaders.length },
    { id: '1.5-2.0', name: '1.5-2.0 м³', count: frontLoaders.filter(l => l.category === '1.5-2.0').length },
    { id: '2.1-3.5', name: '2.1-3.5 м³', count: frontLoaders.filter(l => l.category === '2.1-3.5').length }
  ]

  const generateWhatsAppMessage = (loader: any) => {
    const message = `Здравствуйте! Хочу заказать ${loader.name} (${loader.capacity}т, ковш ${loader.specs.bucket}м³)`
    return encodeURIComponent(message)
  }

  const handleOrderLoader = (loader: any) => {
    const message = generateWhatsAppMessage(loader)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Фронтальные погрузчики</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>фронтальные погрузчики</h1>
            <p className="font-manrope font-medium" style={{fontSize: 20, color: '#525252', lineHeight: 1}}>
              Выберите желаемую технику
            </p>
          </div>

          {/* Фильтр по весовой категории */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2" style={{marginBottom: 12}}>
            {weightCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedWeightCategory(category.id)}
                className={`px-6 py-3 rounded-full font-manrope font-medium text-[16px] whitespace-nowrap transition-all ${
                  selectedWeightCategory === category.id
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

          {/* Сетка фронтальных погрузчиков */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLoaders.map((loader) => (
              <div 
                key={loader.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 500}}
              >
                {/* Изображение */}
                <div className="relative bg-white" style={{height: 240}}>
                  <img 
                    src={loader.image}
                    alt={loader.name}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: 'fill',
                      imageRendering: 'high-quality'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      {loader.specs.bucket} м³
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {loader.name}
                  </h3>

                  {/* Характеристики */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Объем ковша:</span>
                      <span className="text-slate-900 font-medium">{loader.specs.bucket} м³</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Грузоподъемность:</span>
                      <span className="text-slate-900 font-medium">{loader.capacity} т</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Высота выгрузки:</span>
                      <span className="text-slate-900 font-medium">{loader.specs.unloadHeight} м</span>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {loader.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderLoader(loader)}
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
              Почему стоит арендовать фронтальный погрузчик у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Собственный парк техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все фронтальные погрузчики находятся в отличном техническом состоянии и регулярно проходят ТО
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Опытные операторы
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все машинисты имеют соответствующие удостоверения и многолетний опыт работы
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default FrontLoadersPage
