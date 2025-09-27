import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ExcavatorTrackedPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные экскаваторов гусеничных с фото и описаниями (отсортированы по весу)
  const excavatorTracked = [
    {
      id: 1,
      name: 'экскаватор гусеничный hitachi 180',
      capacity: '1.0',
      image: '/images/экс гуси/hitachi 180.webp',
      price: 'от 32 000 ₽/смена',
      description: 'Объем ковша: 1.0 м³. Глубина копания: 5.3 м',
      category: '18-22',
      specs: {
        bucketVolume: 1.0,
        maxDepth: 5.3,
        maxHeight: 6.0,
        weight: 18
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'экскаватор гусеничный hyundai r180lc-7',
      capacity: '0.8',
      image: '/images/экс гуси/hyondai r180lc.webp',
      price: 'от 32 000 ₽/смена',
      description: 'Объем ковша: 0.8 м³. Глубина копания: 6.0 м',
      category: '18-22',
      specs: {
        bucketVolume: 0.8,
        maxDepth: 6.0,
        maxHeight: 6.8,
        weight: 18.2
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'экскаватор гусеничный hitachi zaxis 200',
      capacity: '1.1',
      image: '/images/экс гуси/hitachi zaxis 200.webp',
      price: 'от 32 000 ₽/смена',
      description: 'Объем ковша: 1.1 м³. Глубина копания: 8.0 м',
      category: '18-22',
      specs: {
        bucketVolume: 1.1,
        maxDepth: 8.0,
        maxHeight: 8.8,
        weight: 20
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'экскаватор гусеничный jcb 205',
      capacity: '1.0',
      image: '/images/экс гуси/jcb 205.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Объем ковша: 1.0 м³. Глубина копания: 5.8 м',
      category: '18-22',
      specs: {
        bucketVolume: 1.0,
        maxDepth: 5.8,
        maxHeight: 6.5,
        weight: 21
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'экскаватор гусеничный komatsu pc220',
      capacity: '1.9',
      image: '/images/экс гуси/komatsupc220.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Объем ковша: 1.9 м³. Глубина копания: 6.9 м',
      category: '18-22',
      specs: {
        bucketVolume: 1.9,
        maxDepth: 6.9,
        maxHeight: 7.6,
        weight: 22
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'экскаватор гусеничный jcb 220',
      capacity: '1.25',
      image: '/images/экс гуси/jcb220.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Объем ковша: 1.25 м³. Глубина копания: 6.5 м',
      category: '18-22',
      specs: {
        bucketVolume: 1.25,
        maxDepth: 6.5,
        maxHeight: 7.2,
        weight: 22
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'экскаватор гусеничный volvo ec240b',
      capacity: '1.1',
      image: '/images/экс гуси/volvo240.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Объем ковша: 1.1 м³. Глубина копания: 6.5 м',
      category: '24-30',
      specs: {
        bucketVolume: 1.1,
        maxDepth: 6.5,
        maxHeight: 7.2,
        weight: 24
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'экскаватор гусеничный cat 322 cln',
      capacity: '1.4',
      image: '/images/экс гуси/cat322cl.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Объем ковша: 1.4 м³. Глубина копания: 2.5 м',
      category: '24-30',
      specs: {
        bucketVolume: 1.4,
        maxDepth: 2.5,
        maxHeight: 3.2,
        weight: 24
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'экскаватор гусеничный hitachi zx270',
      capacity: '1.6',
      image: '/images/экс гуси/hitachi270.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Объем ковша: 1.6 м³. Глубина копания: 6.9 м',
      category: '24-30',
      specs: {
        bucketVolume: 1.6,
        maxDepth: 6.9,
        maxHeight: 7.6,
        weight: 28
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 10,
      name: 'экскаватор гусеничный volvo 290',
      capacity: '1.5',
      image: '/images/экс гуси/volvo290.webp',
      price: 'от 34 000 ₽/смена',
      description: 'Объем ковша: 1.5 м³. Глубина копания: 6.0 м',
      category: '24-30',
      specs: {
        bucketVolume: 1.5,
        maxDepth: 6.0,
        maxHeight: 6.7,
        weight: 30
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 11,
      name: 'экскаватор гусеничный hyundai r330lc-9s',
      capacity: '1.6',
      image: '/images/экс гуси/hyundai 330lc.webp',
      price: 'от 35 000 ₽/смена',
      description: 'Объем ковша: 1.6 м³. Глубина копания: 7.3 м',
      category: '32-38',
      specs: {
        bucketVolume: 1.6,
        maxDepth: 7.3,
        maxHeight: 8.0,
        weight: 32
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 12,
      name: 'экскаватор гусеничный hyundai r380lc-9sh',
      capacity: '2.0',
      image: '/images/экс гуси/hyundai-r380lc-9sh.webp',
      price: 'от 35 000 ₽/смена',
      description: 'Объем ковша: 2.0 м³. Глубина копания: 7.5 м',
      category: '32-38',
      specs: {
        bucketVolume: 2.0,
        maxDepth: 7.5,
        maxHeight: 8.2,
        weight: 38
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по весовой категории
  const filteredExcavators = selectedWeightCategory === 'all' 
    ? excavatorTracked 
    : excavatorTracked.filter(excavator => excavator.category === selectedWeightCategory)

  const weightCategories = [
    { id: 'all', name: 'Все экскаваторы гусеничные', count: excavatorTracked.length },
    { id: '18-22', name: '18-22 тонн', count: excavatorTracked.filter(c => c.category === '18-22').length },
    { id: '24-30', name: '24-30 тонн', count: excavatorTracked.filter(c => c.category === '24-30').length },
    { id: '32-38', name: '32-38 тонн', count: excavatorTracked.filter(c => c.category === '32-38').length }
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
          <span className="text-white">Экскаваторы гусеничные</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>экскаваторы гусеничные</h1>
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

          {/* Сетка экскаваторов гусеничных */}
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
              Почему стоит арендовать экскаватор гусеничный у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Высокая проходимость
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Гусеничный ход обеспечивает отличную проходимость по любому грунту
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Мощность и надежность
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Современные экскаваторы с высокой производительностью и надежностью
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ExcavatorTrackedPage

