import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const GradersPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные грейдеров с фото и описаниями (отсортированы по ширине отвала)
  const graders = [
    {
      id: 1,
      name: 'автогрейдер дз-180',
      capacity: '2.5',
      image: '/images/автогрейдеры/dz180.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Ширина отвала: 2500 мм. Высота отвала: 840 мм. Радиус поворота: 12.5 м',
      category: '2.5-3.4',
      specs: {
        bladeWidth: 2500,
        bladeHeight: 840,
        turningRadius: 12.5,
        weight: 12
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'автогрейдер terex tg200',
      capacity: '2.8',
      image: '/images/автогрейдеры/terec-tg200.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Ширина отвала: 2800 мм. Высота отвала: 700 мм. Радиус поворота: 7.8 м',
      category: '2.5-3.4',
      specs: {
        bladeWidth: 2800,
        bladeHeight: 700,
        turningRadius: 7.8,
        weight: 28
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'автогрейдер кировец к-703ма-ос.2',
      capacity: '3.2',
      image: '/images/автогрейдеры/kirovec.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Ширина отвала: 3160 мм. Высота отвала: 1100 мм. Радиус поворота: 8.2 м',
      category: '2.5-3.4',
      specs: {
        bladeWidth: 3160,
        bladeHeight: 1100,
        turningRadius: 8.2,
        weight: 14
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'автогрейдер hbm nobas bg160',
      capacity: '3.4',
      image: '/images/автогрейдеры/hbm-nobas.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Ширина отвала: 3360 мм. Высота отвала: 580 мм. Радиус поворота: 6.9 м',
      category: '2.5-3.4',
      specs: {
        bladeWidth: 3360,
        bladeHeight: 580,
        turningRadius: 6.9,
        weight: 24
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'автогрейдер bomag bg160',
      capacity: '3.7',
      image: '/images/автогрейдеры/bomag-bg-160.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Ширина отвала: 3660 мм. Высота отвала: 580 мм. Радиус поворота: 6.9 м',
      category: '3.7-4.3',
      specs: {
        bladeWidth: 3660,
        bladeHeight: 580,
        turningRadius: 6.9,
        weight: 16
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'автогрейдер john deere 772g',
      capacity: '3.7',
      image: '/images/автогрейдеры/johndeere772g.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Ширина отвала: 3660 мм. Высота отвала: 610 мм. Радиус поворота: 7.21 м',
      category: '3.7-4.3',
      specs: {
        bladeWidth: 3660,
        bladeHeight: 610,
        turningRadius: 7.21,
        weight: 20
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'автогрейдер sem 922awd',
      capacity: '4.3',
      image: '/images/автогрейдеры/sem922.webp',
      price: 'от 34 000 ₽/смена',
      description: 'Ширина отвала: 4279 мм. Высота отвала: 475 мм. Радиус поворота: 7.8 м',
      category: '3.7-4.3',
      specs: {
        bladeWidth: 4279,
        bladeHeight: 475,
        turningRadius: 7.8,
        weight: 26
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'автогрейдер john deere 672g',
      capacity: '4.3',
      image: '/images/автогрейдеры/john-deere-672g.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Ширина отвала: 4270 мм. Высота отвала: 610 мм. Радиус поворота: 7.21 м',
      category: '3.7-4.3',
      specs: {
        bladeWidth: 4270,
        bladeHeight: 610,
        turningRadius: 7.21,
        weight: 18
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'автогрейдер cat 140mawd',
      capacity: '4.3',
      image: '/images/автогрейдеры/cat140.webp',
      price: 'от 33 000 ₽/смена',
      description: 'Ширина отвала: 4300 мм. Высота отвала: 610 мм. Радиус поворота: 7.8 м',
      category: '3.7-4.3',
      specs: {
        bladeWidth: 4300,
        bladeHeight: 610,
        turningRadius: 7.8,
        weight: 22
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по весовой категории
  const filteredGraders = selectedWeightCategory === 'all' 
    ? graders 
    : graders.filter(grader => grader.category === selectedWeightCategory)

  const weightCategories = [
    { id: 'all', name: 'Все грейдеры', count: graders.length },
    { id: '2.5-3.4', name: 'Ширина отвала 2.5-3.4 м', count: graders.filter(c => c.category === '2.5-3.4').length },
    { id: '3.7-4.3', name: 'Ширина отвала 3.7-4.3 м', count: graders.filter(c => c.category === '3.7-4.3').length }
  ]

  const generateWhatsAppMessage = (grader: any) => {
    const message = `Здравствуйте! Хочу заказать ${grader.name} (ширина отвала ${grader.specs.bladeWidth}мм, высота отвала ${grader.specs.bladeHeight}мм)`
    return encodeURIComponent(message)
  }

  const handleOrderGrader = (grader: any) => {
    const message = generateWhatsAppMessage(grader)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Грейдеры</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>грейдеры</h1>
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

          {/* Сетка грейдеров */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGraders.map((grader) => (
              <div 
                key={grader.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 500}}
              >
                {/* Изображение */}
                <div className="relative bg-white" style={{height: 240}}>
                  <img 
                    src={grader.image}
                    alt={grader.name}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: 'fill',
                      imageRendering: 'high-quality'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      {grader.capacity} м
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {grader.name}
                  </h3>

                   {/* Характеристики */}
                   <div className="space-y-2 mb-4">
                     <div className="flex justify-between text-[16px] font-manrope">
                       <span className="text-slate-500">Ширина отвала:</span>
                       <span className="text-slate-900 font-medium">{grader.specs.bladeWidth} мм</span>
                     </div>
                     <div className="flex justify-between text-[16px] font-manrope">
                       <span className="text-slate-500">Высота отвала:</span>
                       <span className="text-slate-900 font-medium">{grader.specs.bladeHeight} мм</span>
                     </div>
                     <div className="flex justify-between text-[16px] font-manrope">
                       <span className="text-slate-500">Радиус поворота:</span>
                       <span className="text-slate-900 font-medium">{grader.specs.turningRadius} м</span>
                     </div>
                   </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {grader.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderGrader(grader)}
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
              Почему стоит арендовать грейдер у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Точная планировка
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Грейдеры обеспечивают высокую точность планировки дорог и площадок
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Универсальность
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Подходят для различных видов дорожных и земляных работ
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default GradersPage
