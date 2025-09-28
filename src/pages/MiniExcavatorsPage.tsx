import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MiniExcavatorsPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные мини экскаваторов с фото и описаниями
  const miniExcavators = [
    {
      id: 1,
      name: 'мини экскаватор jcb 8030, гидромолот',
      weight: '3',
      image: '/images/мини эксы/jcb830.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Вес: 3 т. Глубина копания: 3.2 м',
      category: '3-5',
      specs: {
        weight: 3,
        diggingDepth: 3.2,
        bucketCapacity: 0.1,
        engine: 'JCB',
        power: 20
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'мини-экскаватор komatsu pc45r',
      weight: '4.8',
      image: '/images/мини эксы/komatsupc45r.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Вес: 4.8 т. Глубина копания: 3.5 м',
      category: '3-5',
      specs: {
        weight: 4.8,
        diggingDepth: 3.5,
        bucketCapacity: 0.15,
        engine: 'Komatsu',
        power: 25
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'мини экскаватор hitachi zx16',
      weight: '1.6',
      image: '/images/мини эксы/hitachizx16.webp',
      price: 'от 16 500 ₽/смена',
      description: 'Вес: 1.6 т. Глубина копания: 2.4 м',
      category: '1.5-3',
      specs: {
        weight: 1.6,
        diggingDepth: 2.4,
        bucketCapacity: 0.04,
        engine: 'Hitachi',
        power: 12
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'мини экскаватор pel-job с планировочным ковшом',
      weight: '1.8',
      image: '/images/мини эксы/minipeljob.webp',
      price: 'от 16 500 ₽/смена',
      description: 'Вес: 1.8 т. Глубина копания: 2.5 м',
      category: '1.5-3',
      specs: {
        weight: 1.8,
        diggingDepth: 2.5,
        bucketCapacity: 0.05,
        engine: 'Pel-Job',
        power: 13
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'мини экскаватор volvo ec55b',
      weight: '5.3',
      image: '/images/мини эксы/volvoec55b.webp',
      price: 'от 16 500 ₽/смена',
      description: 'Вес: 5.3 т. Глубина копания: 2.6 м',
      category: '3-5',
      specs: {
        weight: 5.3,
        diggingDepth: 2.6,
        bucketCapacity: 0.18,
        engine: 'Volvo',
        power: 30
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'мини экскаватор hanix h08b',
      weight: '0.7',
      image: '/images/мини эксы/hanixh08b.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Вес: 0.7 т. Глубина копания: 1.5 м',
      category: '1.5-3',
      specs: {
        weight: 0.7,
        diggingDepth: 1.5,
        bucketCapacity: 0.02,
        engine: 'Hanix',
        power: 8
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'мини экскаватор kubota u25-3 gl',
      weight: '2.5',
      image: '/images/мини эксы/ubotau25.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Вес: 2.5 т. Глубина копания: 2.8 м',
      category: '1.5-3',
      specs: {
        weight: 2.5,
        diggingDepth: 2.8,
        bucketCapacity: 0.08,
        engine: 'Kubota',
        power: 18
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'мини экскаватор wacker neuson 2503',
      weight: '1.6',
      image: '/images/мини эксы/wackerneusob.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Вес: 1.6 т. Глубина копания: 2.6 м',
      category: '1.5-3',
      specs: {
        weight: 1.6,
        diggingDepth: 2.6,
        bucketCapacity: 0.04,
        engine: 'Wacker Neuson',
        power: 12
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'мини экскаватор sany sy35u',
      weight: '3.8',
      image: '/images/мини эксы/sanysu35u.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Вес: 3.8 т. Глубина копания: 3.1 м',
      category: '3-5',
      specs: {
        weight: 3.8,
        diggingDepth: 3.1,
        bucketCapacity: 0.12,
        engine: 'SANY',
        power: 22
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 10,
      name: 'мини экскаватор kubota u48-4',
      weight: '4.7',
      image: '/images/мини эксы/kubotau48.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Вес: 4.7 т. Глубина копания: 3.4 м',
      category: '3-5',
      specs: {
        weight: 4.7,
        diggingDepth: 3.4,
        bucketCapacity: 0.15,
        engine: 'Kubota',
        power: 28
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 11,
      name: 'мини экскаватор sany sy55c',
      weight: '5.7',
      image: '/images/мини эксы/sanysy55c.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Вес: 5.7 т. Глубина копания: 3.8 м',
      category: '3-5',
      specs: {
        weight: 5.7,
        diggingDepth: 3.8,
        bucketCapacity: 0.2,
        engine: 'SANY',
        power: 32
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по весовой категории и сортировка по весу
  const filteredExcavators = selectedWeightCategory === 'all' 
    ? miniExcavators.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight))
    : miniExcavators
        .filter(excavator => excavator.category === selectedWeightCategory)
        .sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight))

  const weightCategories = [
    { id: 'all', name: 'Все мини экскаваторы', count: miniExcavators.length },
    { id: '1.5-3', name: 'до 3 тонн', count: miniExcavators.filter(e => e.category === '1.5-3').length },
    { id: '3-5', name: '3-6 тонн', count: miniExcavators.filter(e => e.category === '3-5').length }
  ]

  const generateWhatsAppMessage = (excavator: any) => {
    const message = `Здравствуйте! Хочу заказать ${excavator.name} (${excavator.weight}т, глубина копания ${excavator.specs.diggingDepth}м)`
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
          <span className="text-white">Мини экскаваторы</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>мини экскаваторы</h1>
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

          {/* Сетка мини экскаваторов */}
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
                      {excavator.weight} тонн
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
                      <span className="text-slate-500">Вес:</span>
                      <span className="text-slate-900 font-medium">{excavator.weight} т</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Глубина копания:</span>
                      <span className="text-slate-900 font-medium">{excavator.specs.diggingDepth} м</span>
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
              Почему стоит арендовать мини экскаватор у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Компактность и маневренность
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Идеально подходят для работ в стесненных условиях, узких проездах и внутри помещений
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Широкий спектр работ
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Подходят для копки траншей, фундаментов, демонтажа, планировки и других земляных работ
                </p>
              </div>
            </div>
            
            {/* Ссылка на статью */}
            <div className="mt-6 p-4 bg-white rounded-[16px] border border-slate-200">
              <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                Разрешения и ограничения для работы в городе
              </h4>
              <p className="font-manrope text-slate-600 mb-3" style={{fontSize: 16}}>
                Полное руководство по аренде мини-экскаватора в Москве и МО: разрешения, ограничения, реальная стоимость и кейсы применения
              </p>
              <Link 
                to="/articles/arenda-mini-ekskavatora-moskva-2025-razresheniya-stoimost"
                className="inline-flex items-center text-[#3535B9] hover:text-[#2929A3] font-manrope font-medium text-[16px] transition-colors"
              >
                Читать статью →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default MiniExcavatorsPage
