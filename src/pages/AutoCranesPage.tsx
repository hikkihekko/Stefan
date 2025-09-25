import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AutoCranesPage: React.FC = () => {
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('all')

  // Данные автокранов с фото и описаниями
  const autoCranes = [
    {
      id: 1,
      name: 'Автокран Ивановец КС-3577-3',
      capacity: '14',
      image: '/images/ивановец кс35773.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Грузоподъемность т: 14. Длина стрелы, м: 14',
      category: '14-16',
      specs: {
        boom: 14,
        maxHeight: 18,
        chassis: 'КАМАЗ-43118',
        engine: 'КАМАЗ-740.30-260',
        weight: 14500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'Автокран Ивановец КС-35714К-3',
      capacity: '16',
      image: '/images/автокраны/ivan16twebp.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Грузоподъемность т: 16. Длина стрелы, м: 18',
      category: '14-16',
      specs: {
        boom: 18,
        maxHeight: 25,
        chassis: 'КАМАЗ-65115',
        engine: 'КАМАЗ-740.31-240',
        weight: 16000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'Автокран КС-45719-8А',
      capacity: '25',
      image: '/images/автокраны/klincy-25t_6.jpg',
      price: 'от 18 000 ₽/смена',
      description: 'Грузоподъемность т: 25. Длина стрелы, м: 22',
      category: '25-30',
      specs: {
        boom: 22,
        maxHeight: 28,
        chassis: 'КАМАЗ-65115',
        engine: 'КАМАЗ-740.31-240',
        weight: 22000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'Автокран Ивановец КС-45717К-1, 21 м',
      capacity: '25',
      image: '/images/автокраны/иван2521.webp',
      price: 'от 18 000 ₽/смена',
      description: 'Грузоподъемность т: 25. Длина стрелы, м: 21',
      category: '25-30',
      specs: {
        boom: 21,
        maxHeight: 21,
        chassis: 'КАМАЗ-65115',
        engine: 'КАМАЗ-740.31-240',
        weight: 25000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'Автокран Галичанин КС-55713-1B',
      capacity: '25',
      image: '/images/автокраны/галичанин2521.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность т: 25. Длина стрелы, м: 28',
      category: '25-30',
      specs: {
        boom: 28,
        maxHeight: 37,
        chassis: 'КАМАЗ-65115',
        engine: 'КАМАЗ-740.31-240',
        weight: 25000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'Автокран SANY STC300T5',
      capacity: '30',
      image: '/images/автокраны/avtokran-palfinger-sany-stc300t5-6h4-euro-v_foto_largest.webp',
      price: 'от 24 000 ₽/смена',
      description: 'Грузоподъемность т: 30. Длина стрелы, м: 42',
      category: '25-30',
      specs: {
        boom: 42,
        maxHeight: 50,
        chassis: 'SANY',
        engine: 'SANY',
        weight: 30000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'Автокран Галичанин КС 55729-1B',
      capacity: '32',
      image: '/images/автокраны/галичанин3221.webp',
      price: 'от 22 000 ₽/смена',
      description: 'Грузоподъемность т: 32. Длина стрелы, м: 31',
      category: '32-50',
      specs: {
        boom: 31,
        maxHeight: 40,
        chassis: 'КАМАЗ-65115',
        engine: 'КАМАЗ-740.31-240',
        weight: 32000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'Автокран Галичанин KC-65713-7',
      capacity: '50',
      image: '/images/автокраны/галичанин50т.webp',
      price: 'от 35 000 ₽/смена',
      description: 'Грузоподъемность т: 50. Длина стрелы, м: 34',
      category: '32-50',
      specs: {
        boom: 34,
        maxHeight: 50,
        chassis: 'КАМАЗ',
        engine: 'КАМАЗ',
        weight: 50000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'Автокран Liebherr LTM 1050-3.1',
      capacity: '50',
      image: '/images/автокраны/либхер50тjpg.webp',
      price: 'от 35 000 ₽/смена',
      description: 'Грузоподъемность т: 50. Длина стрелы, м: 40',
      category: '32-50',
      specs: {
        boom: 40,
        maxHeight: 55,
        chassis: 'Liebherr',
        engine: 'Liebherr',
        weight: 50000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 10,
      name: 'Автокран SANY QY50C',
      capacity: '55',
      image: '/images/автокраны/сани qy50.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Грузоподъемность т: 55. Длина стрелы, м: 42.5',
      category: '55-100',
      specs: {
        boom: 42.5,
        maxHeight: 58,
        chassis: 'KAMAZ',
        engine: 'Weichai WP10.380E40',
        weight: 36500
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 11,
      name: 'Автокран Liebherr LTM 1070',
      capacity: '70',
      image: '/images/liebherr 1070.webp',
      price: 'от 40 000 ₽/смена',
      description: 'Грузоподъемность т: 70. Длина стрелы, м: 50',
      category: '55-100',
      specs: {
        boom: 50,
        maxHeight: 66,
        chassis: 'Liebherr',
        engine: 'Liebherr D936L A6',
        weight: 48000
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 12,
      name: 'Автокран Liebherr LTM 1100-4.2',
      capacity: '100',
      image: '/images/автокраны/liebherr1100.webp',
      price: 'от 85 000 ₽/смена',
      description: 'Грузоподъемность т: 100. Длина стрелы, м: 60',
      category: '55-100',
      specs: {
        boom: 60,
        maxHeight: 78,
        chassis: 'Liebherr',
        engine: 'Liebherr',
        weight: 100000
      }
    }
  ]

  // Фильтрация по весовой категории
  const filteredCranes = selectedWeightCategory === 'all' 
    ? autoCranes 
    : autoCranes.filter(crane => crane.category === selectedWeightCategory)

  const weightCategories = [
    { id: 'all', name: 'Все автокраны', count: autoCranes.length },
    { id: '14-16', name: '14-16 тонн', count: autoCranes.filter(c => c.category === '14-16').length },
    { id: '25-30', name: '25-30 тонн', count: autoCranes.filter(c => c.category === '25-30').length },
    { id: '32-50', name: '32-50 тонн', count: autoCranes.filter(c => c.category === '32-50').length },
    { id: '55-100', name: '55-100 тонн', count: autoCranes.filter(c => c.category === '55-100').length }
  ]

  const generateWhatsAppMessage = (crane: any) => {
    const message = `Здравствуйте! Хочу заказать ${crane.name} (${crane.capacity}т, ${crane.specs.boom}м)`
    return encodeURIComponent(message)
  }

  const handleOrderCrane = (crane: any) => {
    const message = generateWhatsAppMessage(crane)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Автокраны</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>автокраны</h1>
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

          {/* Сетка автокранов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCranes.map((crane) => (
              <div 
                key={crane.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 460}}
              >
                {/* Изображение */}
                <div className="relative bg-white" style={{height: 240}}>
                  <img 
                    src={crane.image}
                    alt={crane.name}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: 'fill',
                      imageRendering: 'high-quality'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      {crane.capacity} тонн
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {crane.name}
                  </h3>

                  {/* Характеристики */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Грузоподъемность:</span>
                      <span className="text-slate-900 font-medium">{crane.capacity} т</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Длина стрелы:</span>
                      <span className="text-slate-900 font-medium">{crane.specs.boom} м</span>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {crane.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderCrane(crane)}
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
              Почему стоит арендовать автокран у нас?
            </h3>
            
            <div className="mt-6 p-4 bg-white rounded-[16px] border border-slate-200">
              <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                Завоз материала на этаж: сравнение техники
              </h4>
              <p className="font-manrope text-slate-600 mb-3" style={{fontSize: 16}}>
                Сравниваем автовышку, телепогрузчик и автокран с гуськом по цене, скорости и безопасности в 2025 году
              </p>
              <Link
                to="/articles/zavoz-materiala-na-etazh-avtovyshka-telepogruzchik-avtokran-sravnenie-2025"
                className="inline-flex items-center text-[#3535B9] hover:text-[#2929A3] font-manrope font-medium text-[16px] transition-colors"
              >
                Читать статью →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Собственный парк техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Все автокраны находятся в отличном техническом состоянии и регулярно проходят ТО
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

export default AutoCranesPage
