import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MiniLoadersPage: React.FC = () => {
  const [selectedCapacityCategory, setSelectedCapacityCategory] = useState('all')

  // Данные мини погрузчиков с фото и описаниями
  const miniLoaders = [
    {
      id: 1,
      name: 'мини погрузчик bobcat s450',
      capacity: '0.7',
      image: '/images/минипогруз/bobcats450.webp',
      price: 'от 14 000 ₽/смена',
      description: 'Грузоподъемность т: 0.7. Ковш, м³: 0.34',
      category: '0.7-1.0',
      specs: {
        bucket: 0.34,
        maxHeight: 2.7,
        unloadHeight: 2.7,
        engine: 'Kubota V2403-M-DI',
        weight: 3200,
        power: 45
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'мини погрузчик mustang 2054',
      capacity: '0.7',
      image: '/images/минипогруз/mustang2054.webp',
      price: 'от 14 000 ₽/смена',
      description: 'Грузоподъемность т: 0.7. Ковш, м³: 0.43',
      category: '0.7-1.0',
      specs: {
        bucket: 0.43,
        maxHeight: 3.7,
        unloadHeight: 3.7,
        engine: 'Kubota V2403-M-DI',
        weight: 3200,
        power: 45
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'мини погрузчик bobcat s175',
      capacity: '0.8',
      image: '/images/минипогруз/bobcats175.webp',
      price: 'от 14 000 ₽/смена',
      description: 'Грузоподъемность т: 0.8. Ковш, м³: 0.67',
      category: '0.7-1.0',
      specs: {
        bucket: 0.67,
        maxHeight: 3.0,
        unloadHeight: 3.0,
        engine: 'Kubota V2403-M-DI',
        weight: 3500,
        power: 50
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'мини погрузчик john deere 318',
      capacity: '0.8',
      image: '/images/минипогруз/johndeere318.webp',
      price: 'от 14 000 ₽/смена',
      description: 'Грузоподъемность т: 0.8. Ковш, м³: 0.4',
      category: '0.7-1.0',
      specs: {
        bucket: 0.4,
        maxHeight: 2.4,
        unloadHeight: 2.4,
        engine: 'John Deere 4045TF220',
        weight: 3500,
        power: 50
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'мини погрузчик earthforce s18',
      capacity: '0.9',
      image: '/images/минипогруз/earthforce318.webp',
      price: 'от 14 000 ₽/смена',
      description: 'Грузоподъемность т: 0.9. Ковш, м³: 0.4',
      category: '0.7-1.0',
      specs: {
        bucket: 0.4,
        maxHeight: 2.3,
        unloadHeight: 2.3,
        engine: 'Kubota V2403-M-DI',
        weight: 3800,
        power: 55
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'мини погрузчик liugong 385',
      capacity: '1.0',
      image: '/images/минипогруз/liugong385.webp',
      price: 'от 14 500 ₽/смена',
      description: 'Грузоподъемность т: 1.0. Ковш, м³: 0.6',
      category: '0.7-1.0',
      specs: {
        bucket: 0.6,
        maxHeight: 2.5,
        unloadHeight: 2.5,
        engine: 'Kubota V2403-M-DI',
        weight: 4000,
        power: 60
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'мини погрузчик bobcat s650',
      capacity: '1.2',
      image: '/images/минипогруз/bobcats650.webp',
      price: 'от 14 500 ₽/смена',
      description: 'Грузоподъемность т: 1.2. Ковш, м³: 0.6',
      category: '1.2-1.4',
      specs: {
        bucket: 0.6,
        maxHeight: 2.5,
        unloadHeight: 2.5,
        engine: 'Kubota V2403-M-DI',
        weight: 4200,
        power: 65
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'мини погрузчик bobcat a300',
      capacity: '1.3',
      image: '/images/минипогруз/bobcata300.webp',
      price: 'от 14 500 ₽/смена',
      description: 'Грузоподъемность т: 1.3. Ковш, м³: 1.4',
      category: '1.2-1.4',
      specs: {
        bucket: 1.4,
        maxHeight: 2.5,
        unloadHeight: 2.5,
        engine: 'Kubota V2403-M-DI',
        weight: 4500,
        power: 70
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'мини погрузчик mustang 2100rt',
      capacity: '1.3',
      image: '/images/минипогруз/mustang2100rt.webp',
      price: 'от 14 500 ₽/смена',
      description: 'Грузоподъемность т: 1.3. Ковш, м³: 0.6',
      category: '1.2-1.4',
      specs: {
        bucket: 0.6,
        maxHeight: 2.4,
        unloadHeight: 2.4,
        engine: 'Kubota V2403-M-DI',
        weight: 4500,
        power: 70
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 10,
      name: 'мини погрузчик bobcat s150',
      capacity: '1.4',
      image: '/images/минипогруз/bobcats150.webp',
      price: 'от 14 500 ₽/смена',
      description: 'Грузоподъемность т: 1.4. Ковш, м³: 0.7',
      category: '1.2-1.4',
      specs: {
        bucket: 0.7,
        maxHeight: 2.9,
        unloadHeight: 2.9,
        engine: 'Kubota V2403-M-DI',
        weight: 4800,
        power: 75
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 11,
      name: 'мини погрузчик mustang 2700v',
      capacity: '1.4',
      image: '/images/минипогруз/ustang2700V.webp',
      price: 'от 14 500 ₽/смена',
      description: 'Грузоподъемность т: 1.4. Ковш, м³: 0.65',
      category: '1.2-1.4',
      specs: {
        bucket: 0.65,
        maxHeight: 3.3,
        unloadHeight: 3.3,
        engine: 'Kubota V2403-M-DI',
        weight: 4800,
        power: 75
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 12,
      name: 'мини погрузчик mustang 2066',
      capacity: '1.5',
      image: '/images/минипогруз/mustang2066.webp',
      price: 'от 14 500 ₽/смена',
      description: 'Грузоподъемность т: 1.5. Ковш, м³: 0.52',
      category: '1.5-1.8',
      specs: {
        bucket: 0.52,
        maxHeight: 3.0,
        unloadHeight: 3.0,
        engine: 'Kubota V2403-M-DI',
        weight: 5000,
        power: 80
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 13,
      name: 'мини погрузчик bobcat s300',
      capacity: '1.5',
      image: '/images/минипогруз/bobcats300.webp',
      price: 'от 14 500 ₽/смена',
      description: 'Грузоподъемность т: 1.5. Ковш, м³: 0.55',
      category: '1.5-1.8',
      specs: {
        bucket: 0.55,
        maxHeight: 2.5,
        unloadHeight: 2.5,
        engine: 'Kubota V2403-M-DI',
        weight: 5000,
        power: 80
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по грузоподъемности
  const filteredLoaders = selectedCapacityCategory === 'all' 
    ? miniLoaders 
    : miniLoaders.filter(loader => loader.category === selectedCapacityCategory)

  const capacityCategories = [
    { id: 'all', name: 'Все погрузчики', count: miniLoaders.length },
    { id: '0.7-1.0', name: '0.7-1.0 т', count: miniLoaders.filter(l => l.category === '0.7-1.0').length },
    { id: '1.2-1.4', name: '1.2-1.4 т', count: miniLoaders.filter(l => l.category === '1.2-1.4').length },
    { id: '1.5-1.8', name: '1.5-1.8 т', count: miniLoaders.filter(l => l.category === '1.5-1.8').length }
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
          <span className="text-white">Мини погрузчики</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-0" style={{lineHeight: 1}}>мини погрузчики</h1>
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

          {/* Сетка мини погрузчиков */}
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
                      {loader.capacity} т
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
                      <span className="text-slate-500">Грузоподъемность:</span>
                      <span className="text-slate-900 font-medium">{loader.capacity} т</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Объем ковша:</span>
                      <span className="text-slate-900 font-medium">{loader.specs.bucket} м³</span>
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
              Почему стоит арендовать мини погрузчик у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Компактные размеры
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Мини погрузчики идеально подходят для работы в стесненных условиях и на ограниченных площадках
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Универсальность применения
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Подходят для погрузки, разгрузки, планировки, уборки снега и других задач на стройплощадках
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default MiniLoadersPage