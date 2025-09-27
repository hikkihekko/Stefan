import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BulldozersPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные бульдозеров с фото и описаниями
  const bulldozers = [
    {
      id: 1,
      name: 'бульдозер cat d3k',
      weight: '8',
      image: '/images/бульдозеры/catd3k.webp',
      price: 'от 19 500 ₽/смена',
      description: 'Масса т: 8. Ширина отвала, м: 3.2',
      category: '8-16',
      specs: {
        weight: 8,
        bladeWidth: 3.2,
        engine: 'CAT C4.4',
        power: 85,
        operatingWeight: 8000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'бульдозер cat d5',
      weight: '12',
      image: '/images/бульдозеры/catd5.webp',
      price: 'от 22 000 ₽/смена',
      description: 'Масса т: 12. Ширина отвала, м: 3.3',
      category: '8-16',
      specs: {
        weight: 12,
        bladeWidth: 3.3,
        engine: 'CAT C6.6',
        power: 110,
        operatingWeight: 12000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'бульдозер т-130',
      weight: '14',
      image: '/images/бульдозеры/chtz130.webp',
      price: 'от 28 000 ₽/смена',
      description: 'Масса т: 14. Ширина отвала, м: 3.2',
      category: '8-16',
      specs: {
        weight: 14,
        bladeWidth: 3.2,
        engine: 'Д-160',
        power: 160,
        operatingWeight: 14000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'бульдозер cat d6n',
      weight: '16',
      image: '/images/бульдозеры/catd6n.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Масса т: 16. Ширина отвала, м: 3.8',
      category: '8-16',
      specs: {
        weight: 16,
        bladeWidth: 3.8,
        engine: 'CAT C7.1',
        power: 140,
        operatingWeight: 16000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'бульдозер cat d6',
      weight: '16',
      image: '/images/бульдозеры/catd6.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Масса т: 16. Ширина отвала, м: 4.2',
      category: '8-16',
      specs: {
        weight: 16,
        bladeWidth: 4.2,
        engine: 'CAT C7.1',
        power: 140,
        operatingWeight: 16000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'бульдозер cat d6n lgp',
      weight: '17',
      image: '/images/бульдозеры/catd6nlgp.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Масса т: 17. Ширина отвала, м: 4.0',
      category: '17-20',
      specs: {
        weight: 17,
        bladeWidth: 4.0,
        engine: 'CAT C7.1',
        power: 140,
        operatingWeight: 17000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'бульдозер shantui sd16',
      weight: '17',
      image: '/images/бульдозеры/shantuisd16.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Масса т: 17. Ширина отвала, м: 3.9',
      category: '17-20',
      specs: {
        weight: 17,
        bladeWidth: 3.9,
        engine: 'Shantui',
        power: 120,
        operatingWeight: 17000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'бульдозер komatsu d61',
      weight: '18',
      image: '/images/бульдозеры/komatsud61.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Масса т: 18. Ширина отвала, м: 3.2',
      category: '17-20',
      specs: {
        weight: 18,
        bladeWidth: 3.2,
        engine: 'Komatsu SAA6D107E-3',
        power: 130,
        operatingWeight: 18000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'бульдозер cat d6r',
      weight: '19',
      image: '/images/бульдозеры/catd6r.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Масса т: 19. Ширина отвала, м: 4.2',
      category: '17-20',
      specs: {
        weight: 19,
        bladeWidth: 3.3,
        engine: 'CAT C7.1',
        power: 140,
        operatingWeight: 19000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 10,
      name: 'бульдозер чтз б10м 0111-ен',
      weight: '20',
      image: '/images/бульдозеры/chtzb10m.webp',
      price: 'от 34 000 ₽/смена',
      description: 'Масса т: 20. Ширина отвала, м: 3.0',
      category: '21-27',
      specs: {
        weight: 20,
        bladeWidth: 3.0,
        engine: 'ЧТЗ',
        power: 110,
        operatingWeight: 20000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 11,
      name: 'бульдозер liebherr pr732',
      weight: '21',
      image: '/images/бульдозеры/liebherrpr732.webp',
      price: 'от 35 000 ₽/смена',
      description: 'Масса т: 21. Ширина отвала, м: 3.2',
      category: '21-27',
      specs: {
        weight: 21,
        bladeWidth: 3.2,
        engine: 'Liebherr D934',
        power: 150,
        operatingWeight: 21000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 12,
      name: 'бульдозер john deere 850j',
      weight: '22',
      image: '/images/бульдозеры/johndeere850j.webp',
      price: 'от 36 000 ₽/смена',
      description: 'Масса т: 22. Ширина отвала, м: 3.2',
      category: '21-27',
      specs: {
        weight: 22,
        bladeWidth: 3.2,
        engine: 'John Deere',
        power: 160,
        operatingWeight: 22000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 13,
      name: 'бульдозер liebherr 742',
      weight: '27',
      image: '/images/бульдозеры/liebherr742.webp',
      price: 'от 40 000 ₽/смена',
      description: 'Масса т: 27. Ширина отвала, м: 3.2',
      category: '21-27',
      specs: {
        weight: 27,
        bladeWidth: 3.2,
        engine: 'Liebherr D934',
        power: 180,
        operatingWeight: 27000
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по весовой категории
  const filteredBulldozers = selectedWeightCategory === 'all' 
    ? bulldozers 
    : bulldozers.filter(bulldozer => {
      const weight = parseInt(bulldozer.weight)
      switch(selectedWeightCategory) {
        case '8-16': return weight >= 8 && weight <= 16
        case '17-20': return weight >= 17 && weight <= 20
        case '21-27': return weight >= 21 && weight <= 27
        default: return bulldozer.category === selectedWeightCategory
      }
    })

  const weightCategories = [
    { id: 'all', name: 'Все бульдозеры', count: bulldozers.length },
    { id: '8-16', name: '8-16 тонн', count: bulldozers.filter(b => parseInt(b.weight) >= 8 && parseInt(b.weight) <= 16).length },
    { id: '17-20', name: '17-20 тонн', count: bulldozers.filter(b => parseInt(b.weight) >= 17 && parseInt(b.weight) <= 20).length },
    { id: '21-27', name: '21-27 тонн', count: bulldozers.filter(b => parseInt(b.weight) >= 21 && parseInt(b.weight) <= 27).length }
  ]

  const generateWhatsAppMessage = (bulldozer: any) => {
    const message = `Здравствуйте! Хочу заказать ${bulldozer.name} (${bulldozer.weight}т, отвал ${bulldozer.specs.bladeWidth}м)`
    return encodeURIComponent(message)
  }

  const handleOrderBulldozer = (bulldozer: any) => {
    const message = generateWhatsAppMessage(bulldozer)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Бульдозеры</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>бульдозеры</h1>
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

          {/* Сетка бульдозеров */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBulldozers.map((bulldozer) => (
              <div 
                key={bulldozer.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 460}}
              >
                {/* Изображение */}
                <div className="relative bg-white" style={{height: 240}}>
                  <img 
                    src={bulldozer.image}
                    alt={bulldozer.name}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: 'fill',
                      imageRendering: 'high-quality'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      {bulldozer.weight} тонн
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {bulldozer.name}
                  </h3>

                  {/* Характеристики */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Масса:</span>
                      <span className="text-slate-900 font-medium">{bulldozer.weight} т</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Ширина отвала:</span>
                      <span className="text-slate-900 font-medium">{bulldozer.specs.bladeWidth} м</span>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {bulldozer.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderBulldozer(bulldozer)}
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
              Почему стоит арендовать бульдозер у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Собственный парк техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все бульдозеры находятся в отличном техническом состоянии и регулярно проходят ТО
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

export default BulldozersPage
