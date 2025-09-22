import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ExcavatorLoadersPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные экскаваторов-погрузчиков с фото и описаниями (отсортированы по ковшу погрузчика)
  const excavatorLoaders = [
    {
      id: 1,
      name: 'Экскаватор-погрузчик jcb 3cx',
      capacity: '1.0',
      image: '/images/экскаваторыпогруз/jcb 3cx cool pic.webp',
      price: 'от 21 000 ₽/смена',
      description: 'Объем ковша погрузчика: 0.11 м³. Объем ковша экскаватора: 1.0 м³',
      category: '1.0-1.15',
      specs: {
        excavatorBucket: 0.11,
        loaderBucket: 1.0,
        maxDepth: 4.2,
        maxHeight: 4.8,
        weight: 8500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'Экскаватор-погрузчик volvo bl71b',
      capacity: '1.0',
      image: '/images/экскаваторыпогруз/volvo bl71b.webp',
      price: 'от 19 500 ₽/смена',
      description: 'Объем ковша погрузчика: 0.2 м³. Объем ковша экскаватора: 1.0 м³',
      category: '1.0-1.15',
      specs: {
        excavatorBucket: 0.2,
        loaderBucket: 1.0,
        maxDepth: 5.5,
        maxHeight: 6.2,
        weight: 13500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'Экскаватор-погрузчик jcb 3cx super',
      capacity: '1.1',
      image: '/images/экскаваторыпогруз/jcb 3cx super.webp',
      price: 'от 20 000 ₽/смена',
      description: 'Объем фронтального ковша: 1.1 м³. Объем заднего ковша: 0.16 м³',
      category: '1.0-1.15',
      specs: {
        excavatorBucket: 0.16,
        loaderBucket: 1.1,
        maxDepth: 4.2,
        maxHeight: 4.8,
        weight: 8500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'Экскаватор-погрузчик cat 444f',
      capacity: '1.15',
      image: '/images/экскаваторыпогруз/cat 44f.webp',
      price: 'от 20 000 ₽/смена',
      description: 'Объем ковша погрузчика: 0.2 м³. Объем ковша экскаватора: 1.15 м³',
      category: '1.0-1.15',
      specs: {
        excavatorBucket: 0.2,
        loaderBucket: 1.15,
        maxDepth: 5.2,
        maxHeight: 5.8,
        weight: 12000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'Экскаватор-погрузчик Terex 860SX',
      capacity: '1.2',
      image: '/images/экскаваторыпогруз/terex 860.webp',
      price: 'от 20 000 ₽/смена',
      description: 'Объем фронтального ковша: 1.2 м³. Объем заднего ковша: 0.12 м³',
      category: '1.2-1.3',
      specs: {
        excavatorBucket: 0.12,
        loaderBucket: 1.2,
        maxDepth: 4.2,
        maxHeight: 4.8,
        weight: 8500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'Экскаватор-погрузчик jcb 4cx',
      capacity: '1.3',
      image: '/images/экскаваторыпогруз/jcb 4cx.webp',
      price: 'от 21 000 ₽/смена',
      description: 'Объем ковша погрузчика: 0.23 м³. Объем ковша экскаватора: 1.3 м³',
      category: '1.2-1.3',
      specs: {
        excavatorBucket: 0.23,
        loaderBucket: 1.3,
        maxDepth: 4.8,
        maxHeight: 5.2,
        weight: 9500
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по весовой категории
  const filteredLoaders = selectedWeightCategory === 'all' 
    ? excavatorLoaders 
    : excavatorLoaders.filter(loader => loader.category === selectedWeightCategory)

  const weightCategories = [
    { id: 'all', name: 'Все экскаваторы-погрузчики', count: excavatorLoaders.length },
    { id: '1.0-1.15', name: 'Ковш погрузчика 1.0-1.15м³', count: excavatorLoaders.filter(c => c.category === '1.0-1.15').length },
    { id: '1.2-1.3', name: 'Ковш погрузчика 1.2-1.3м³', count: excavatorLoaders.filter(c => c.category === '1.2-1.3').length }
  ]

  const generateWhatsAppMessage = (loader: any) => {
    const message = `Здравствуйте! Хочу заказать ${loader.name} (ковш экскаватора ${loader.specs.excavatorBucket}м³, ковш погрузчика ${loader.specs.loaderBucket}м³)`
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
          <span className="text-white">Экскаваторы-погрузчики</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>экскаваторы-погрузчики</h1>
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

          {/* Сетка экскаваторов-погрузчиков */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLoaders.map((loader) => (
              <div 
                key={loader.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 460}}
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
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      Вилы
                    </span>
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      Молот
                    </span>
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      Ковш
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
                       <span className="text-slate-500">Ковш погрузчика:</span>
                       <span className="text-slate-900 font-medium">{loader.specs.loaderBucket} м³</span>
                     </div>
                     <div className="flex justify-between text-[16px] font-manrope">
                       <span className="text-slate-500">Ковш экскаватора:</span>
                       <span className="text-slate-900 font-medium">{loader.specs.excavatorBucket} м³</span>
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
              Почему стоит арендовать экскаватор-погрузчик у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Универсальная техника
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Одна машина выполняет функции экскаватора и погрузчика, экономя время и средства
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

export default ExcavatorLoadersPage
