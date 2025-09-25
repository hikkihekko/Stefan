import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ExcavatorTrackedPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные экскаваторов гусеничных с фото и описаниями (отсортированы по весу)
  const excavatorTracked = [
    {
      id: 1,
      name: 'Экскаватор гусеничный 20т',
      capacity: '1.0',
      image: '/images/экск гус.jpg',
      price: 'от 25 000 ₽/смена',
      description: 'Объем ковша: 1.0 м³. Глубина копания: 6.5 м',
      category: '20-25',
      specs: {
        bucketVolume: 1.0,
        maxDepth: 6.5,
        maxHeight: 7.2,
        weight: 20000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'Экскаватор гусеничный 25т',
      capacity: '1.2',
      image: '/images/экск гус.jpg',
      price: 'от 28 000 ₽/смена',
      description: 'Объем ковша: 1.2 м³. Глубина копания: 7.0 м',
      category: '20-25',
      specs: {
        bucketVolume: 1.2,
        maxDepth: 7.0,
        maxHeight: 7.8,
        weight: 25000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'Экскаватор гусеничный 30т',
      capacity: '1.5',
      image: '/images/экск гус.jpg',
      price: 'от 32 000 ₽/смена',
      description: 'Объем ковша: 1.5 м³. Глубина копания: 7.5 м',
      category: '30-35',
      specs: {
        bucketVolume: 1.5,
        maxDepth: 7.5,
        maxHeight: 8.2,
        weight: 30000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'Экскаватор гусеничный 35т',
      capacity: '1.8',
      image: '/images/экск гус.jpg',
      price: 'от 35 000 ₽/смена',
      description: 'Объем ковша: 1.8 м³. Глубина копания: 8.0 м',
      category: '30-35',
      specs: {
        bucketVolume: 1.8,
        maxDepth: 8.0,
        maxHeight: 8.8,
        weight: 35000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'Экскаватор гусеничный 40т',
      capacity: '2.0',
      image: '/images/экск гус.jpg',
      price: 'от 40 000 ₽/смена',
      description: 'Объем ковша: 2.0 м³. Глубина копания: 8.5 м',
      category: '40-45',
      specs: {
        bucketVolume: 2.0,
        maxDepth: 8.5,
        maxHeight: 9.2,
        weight: 40000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'Экскаватор гусеничный 45т',
      capacity: '2.2',
      image: '/images/экск гус.jpg',
      price: 'от 45 000 ₽/смена',
      description: 'Объем ковша: 2.2 м³. Глубина копания: 9.0 м',
      category: '40-45',
      specs: {
        bucketVolume: 2.2,
        maxDepth: 9.0,
        maxHeight: 9.8,
        weight: 45000
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
    { id: '20-25', name: '20-25 тонн', count: excavatorTracked.filter(c => c.category === '20-25').length },
    { id: '30-35', name: '30-35 тонн', count: excavatorTracked.filter(c => c.category === '30-35').length },
    { id: '40-45', name: '40-45 тонн', count: excavatorTracked.filter(c => c.category === '40-45').length }
  ]

  const generateWhatsAppMessage = (excavator: any) => {
    const message = `Здравствуйте! Хочу заказать ${excavator.name} (ковш ${excavator.specs.bucketVolume}м³, вес ${excavator.specs.weight/1000}т)`
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
                style={{height: 460}}
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
            
            <div className="mt-6 p-4 bg-white rounded-[16px] border border-slate-200">
              <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                Ключевые факторы скорости земляных работ
              </h4>
              <p className="font-manrope text-slate-600 mb-3" style={{fontSize: 16}}>
                От чего зависит скорость работы экскаватора? Разбираем 7 главных факторов: от выбора модели и навески до квалификации оператора
              </p>
              <Link
                to="/articles/arenda-ekskavatora-moskva-2025-faktory-skorosti-zemlyanyh-rabot"
                className="inline-flex items-center text-[#3535B9] hover:text-[#2929A3] font-manrope font-medium text-[16px] transition-colors"
              >
                Читать статью →
              </Link>
            </div>
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

