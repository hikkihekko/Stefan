import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ExcavatorWheeledPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные экскаваторов колесных с фото и описаниями (отсортированы по весу)
  const excavatorWheeled = [
    {
      id: 1,
      name: 'экскаватор колесный komatsu pw130',
      capacity: '0.8',
      image: '/images/эксы колесные/komatsupw130.jpg',
      price: 'от 20 000 ₽/смена',
      description: 'Объем ковша: 0.8 м³. Глубина копания: 4.7 м',
      category: '14-18',
      specs: {
        bucketVolume: 0.8,
        maxDepth: 4.7,
        maxHeight: 5.2,
        weight: 14.5
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'экскаватор колесный volvo ew160',
      capacity: '0.8',
      image: '/images/эксы колесные/volvoew160.webp',
      price: 'от 20 000 ₽/смена',
      description: 'Объем ковша: 0.8 м³. Глубина копания: 6.2 м',
      category: '14-18',
      specs: {
        bucketVolume: 0.8,
        maxDepth: 6.2,
        maxHeight: 6.8,
        weight: 16.8
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'экскаватор колесный jcb js160w',
      capacity: '0.9',
      image: '/images/эксы колесные/jcbjs160w.webp',
      price: 'от 21 000 ₽/смена',
      description: 'Объем ковша: 0.9 м³. Глубина копания: 5.6 м',
      category: '14-18',
      specs: {
        bucketVolume: 0.9,
        maxDepth: 5.6,
        maxHeight: 6.2,
        weight: 17
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'экскаватор колесный hyundai r180w-9s',
      capacity: '0.9',
      image: '/images/эксы колесные/hyundair180w9s.webp',
      price: 'от 21 000 ₽/смена',
      description: 'Объем ковша: 0.9 м³. Глубина копания: 5.8 м',
      category: '18-24',
      specs: {
        bucketVolume: 0.9,
        maxDepth: 5.8,
        maxHeight: 6.4,
        weight: 18.3
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'экскаватор колесный new holland we 170',
      capacity: '0.8',
      image: '/images/эксы колесные/newhollandwe170.webp',
      price: 'от 20 000 ₽/смена',
      description: 'Объем ковша: 0.8 м³. Глубина копания: 5.4 м',
      category: '18-24',
      specs: {
        bucketVolume: 0.8,
        maxDepth: 5.4,
        maxHeight: 6.0,
        weight: 18.5
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'экскаватор колесный святовит ew-25-m1',
      capacity: '0.6',
      image: '/images/эксы колесные/svyatovitew25v.webp',
      price: 'от 20 000 ₽/смена',
      description: 'Объем ковша: 0.6 м³. Глубина копания: 5.4 м',
      category: '18-24',
      specs: {
        bucketVolume: 0.6,
        maxDepth: 5.4,
        maxHeight: 6.0,
        weight: 22
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'экскаватор колесный hidromek hmk 200-w',
      capacity: '0.9',
      image: '/images/эксы колесные/hidromek200w.webp',
      price: 'от 21 000 ₽/смена',
      description: 'Объем ковша: 0.9 м³. Глубина копания: 5.9 м',
      category: '18-24',
      specs: {
        bucketVolume: 0.9,
        maxDepth: 5.9,
        maxHeight: 6.5,
        weight: 22.8
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'экскаватор колесный terex atlas 2205m',
      capacity: '1.5',
      image: '/images/эксы колесные/erex2205m.webp',
      price: 'от 21 000 ₽/смена',
      description: 'Объем ковша: 1.5 м³. Глубина копания: 6.7 м',
      category: '18-24',
      specs: {
        bucketVolume: 1.5,
        maxDepth: 6.7,
        maxHeight: 7.4,
        weight: 24
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по весовой категории
  const filteredExcavators = selectedWeightCategory === 'all' 
    ? excavatorWheeled 
    : excavatorWheeled.filter(excavator => excavator.category === selectedWeightCategory)

  const weightCategories = [
    { id: 'all', name: 'Все экскаваторы колесные', count: excavatorWheeled.length },
    { id: '14-18', name: '14-17 тонн', count: excavatorWheeled.filter(c => c.category === '14-18').length },
    { id: '18-24', name: '18-24 тонн', count: excavatorWheeled.filter(c => c.category === '18-24').length }
  ]

  const generateWhatsAppMessage = (excavator: any) => {
    const message = `Здравствуйте! Хочу заказать ${excavator.name} (ковш ${excavator.specs.bucketVolume}м³, вес ${excavator.specs.weight}т)`
    return encodeURIComponent(message)
  }

  const handleOrderExcavator = (excavator: any) => {
    const message = generateWhatsAppMessage(excavator)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Экскаваторы колесные</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-0" style={{lineHeight: 1}}>экскаваторы колесные</h1>
            <p className="font-manrope font-medium text-base sm:text-lg lg:text-xl text-[#525252]" style={{lineHeight: 1}}>
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

          {/* Сетка экскаваторов колесных */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExcavators.map((excavator) => (
              <div 
                key={excavator.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 500}}
              >
                {/* Изображение */}
                <div className="relative bg-white" style={{height: 240}}>
                  <img 
                    src={excavator.image}
                    alt={excavator.name}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: 'fill',
                      imageRendering: 'high-quality'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      {excavator.capacity} м³
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {excavator.name}
                  </h3>

                   {/* Характеристики */}
                   <div className="space-y-2 mb-4">
                     <div className="flex justify-between text-[16px] font-manrope">
                       <span className="text-slate-500">Объем ковша:</span>
                       <span className="text-slate-900 font-medium">{excavator.specs.bucketVolume} м³</span>
                     </div>
                     <div className="flex justify-between text-[16px] font-manrope">
                       <span className="text-slate-500">Глубина копания:</span>
                       <span className="text-slate-900 font-medium">{excavator.specs.maxDepth} м</span>
                     </div>
                     <div className="flex justify-between text-[16px] font-manrope">
                       <span className="text-slate-500">Масса:</span>
                       <span className="text-slate-900 font-medium">{excavator.specs.weight} т</span>
                     </div>
                   </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {excavator.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderExcavator(excavator)}
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
              Почему стоит арендовать экскаватор колесный у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Высокая мобильность
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Колесный ход обеспечивает быстрое перемещение между объектами
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Универсальность
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Идеально подходят для работ в городских условиях и на твердых покрытиях
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ExcavatorWheeledPage
