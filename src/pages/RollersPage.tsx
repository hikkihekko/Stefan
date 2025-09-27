import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RollersPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные катков с фото и описаниями (отсортированы по возрастанию массы)
  const rollers = [
    {
      id: 1,
      name: 'тандемный каток bomag bw 174 ap-4 am',
      weight: '2.7',
      image: '/images/катки/katok/bomagbw174.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Масса т: 2.7. Ширина вальца мм: 750',
      category: '1-3',
      specs: {
        weight: 2.7,
        drumWidth: 750
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'каток комбинированный sakai tw500',
      weight: '3.5',
      image: '/images/катки/katok/sakaitw500.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Масса т: 3.5. Ширина вальца мм: 1300',
      category: '1-3',
      specs: {
        weight: 3.5,
        drumWidth: 1300
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'каток комбинированный dynapac cc1300c',
      weight: '4',
      image: '/images/катки/katok/dynapac-cc1300.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Масса т: 4. Ширина вальца мм: 1300',
      category: '4-6',
      specs: {
        weight: 4,
        drumWidth: 1300
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'двухвальцовый каток bw 154 ad-5',
      weight: '4',
      image: '/images/катки/katok/bomag154.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Масса т: 4. Ширина вальца мм: 3388',
      category: '4-6',
      specs: {
        weight: 4,
        drumWidth: 3388
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'каток комбинированный dynapac cc224hf',
      weight: '7.7',
      image: '/images/катки/katok/katok-Dynapac-CC224HF.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Масса т: 7.7. Ширина вальца мм: 1500',
      category: '7-10',
      specs: {
        weight: 7.7,
        drumWidth: 1500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'каток грунтовый bomag bw 211 d-3',
      weight: '10.5',
      image: '/images/катки/katok/bomagbw211.webp',
      price: 'от 15 500 ₽/смена',
      description: 'Масса т: 10.5. Ширина вальца мм: 2130',
      category: '7-10',
      specs: {
        weight: 10.5,
        drumWidth: 2130
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'каток грунтовый hamm 3412',
      weight: '12',
      image: '/images/катки/katok/hamm3412.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Масса т: 12. Ширина вальца мм: 2130',
      category: '11+',
      specs: {
        weight: 12,
        drumWidth: 2130
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'каток грунтовый ammann asc 150d',
      weight: '14',
      image: '/images/катки/katok/AMMANN-ASC-150-D.webp',
      price: 'от 18 000 ₽/смена',
      description: 'Масса т: 14. Ширина вальца мм: 2200',
      category: '11+',
      specs: {
        weight: 14,
        drumWidth: 2200
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'каток грунтовый cat cs74b',
      weight: '15',
      image: '/images/катки/katok/cat-cs74b.webp',
      price: 'от 18 000 ₽/смена',
      description: 'Масса т: 15. Ширина вальца мм: 2130',
      category: '11+',
      specs: {
        weight: 15,
        drumWidth: 2130
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 10,
      name: 'каток грунтовый dynapac ca 511 d',
      weight: '16',
      image: '/images/катки/katok/dynapac511.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Масса т: 16. Ширина вальца мм: 2130',
      category: '11+',
      specs: {
        weight: 16,
        drumWidth: 2130
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 11,
      name: 'каток грунтовый bomag bw 138 ac',
      weight: '19',
      image: '/images/катки/katok/bomag138ac.webp',
      price: 'от 20 000 ₽/смена',
      description: 'Масса т: 19. Ширина вальца мм: 1380',
      category: '11+',
      specs: {
        weight: 19,
        drumWidth: 1380
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по весовой категории
  const filteredRollers = selectedWeightCategory === 'all' 
    ? rollers 
    : rollers.filter(roller => {
        const weight = parseFloat(roller.weight)
        switch(selectedWeightCategory) {
          case '2-8':
            return weight >= 2 && weight <= 8
          case '10-14':
            return weight >= 10 && weight <= 14
          case '15-19':
            return weight >= 15 && weight <= 19
          default:
            return true
        }
      })

  const weightCategories = [
    { id: 'all', name: 'Все катки', count: rollers.length },
    { id: '2-8', name: '2-8 тонн', count: rollers.filter(r => {
        const weight = parseFloat(r.weight)
        return weight >= 2 && weight <= 8
      }).length },
    { id: '10-14', name: '10-14 тонн', count: rollers.filter(r => {
        const weight = parseFloat(r.weight)
        return weight >= 10 && weight <= 14
      }).length },
    { id: '15-19', name: '15-19 тонн', count: rollers.filter(r => {
        const weight = parseFloat(r.weight)
        return weight >= 15 && weight <= 19
      }).length }
  ]

  const generateWhatsAppMessage = (roller: any) => {
    const message = `Здравствуйте! Хочу заказать ${roller.name} (${roller.weight}т, ${roller.specs.drumWidth}мм)`
    return encodeURIComponent(message)
  }

  const handleOrderRoller = (roller: any) => {
    const message = generateWhatsAppMessage(roller)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Катки</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>катки</h1>
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

          {/* Сетка катков */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRollers.map((roller) => (
              <div 
                key={roller.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 460}}
              >
                {/* Изображение */}
                <div className="relative bg-white" style={{height: 240}}>
                  <img 
                    src={roller.image}
                    alt={roller.name}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: 'fill',
                      imageRendering: 'high-quality'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      {roller.weight} тонн
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {roller.name}
                  </h3>

                  {/* Характеристики */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Масса:</span>
                      <span className="text-slate-900 font-medium">{roller.weight} т</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Ширина вальца:</span>
                      <span className="text-slate-900 font-medium">{roller.specs.drumWidth} мм</span>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {roller.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderRoller(roller)}
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
              Почему стоит арендовать каток у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Собственный парк техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все катки находятся в отличном техническом состоянии и регулярно проходят ТО
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

export default RollersPage
