import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ManipulatorsPage: React.FC = () => {
  const [selectedCapacityCategory, setSelectedCapacityCategory] = useState('all')

  // Данные манипуляторов с фото и описаниями
  const manipulators = [
    {
      id: 2,
      name: 'манипулятор kanglim на базе daewoo',
      capacity: '3',
      image: '/images/манипуляторы/daewoo 3tonn.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Грузоподъемность стрелы: 3т, Грузоподъемность борта: 5т',
      category: '3-5',
      specs: {
        craneCapacity: 3,
        bedCapacity: 5,
        reach: 12,
        bedLength: 6.3
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'манипулятор kanglim ks 1056 на базе hyundai',
      capacity: '5',
      image: '/images/манипуляторы/kanglim1056 hyondai.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Грузоподъемность стрелы: 5т, Грузоподъемность борта: 7т',
      category: '3-5',
      specs: {
        craneCapacity: 5,
        bedCapacity: 7,
        reach: 15.5,
        bedLength: 6.8
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'манипулятор вездеход unic ur-v500 камаз-43118',
      capacity: '5',
      image: '/images/манипуляторы/камаз и500 43118.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Грузоподъемность стрелы: 5т, Грузоподъемность борта: 10т',
      category: '3-5',
      specs: {
        craneCapacity: 5,
        bedCapacity: 10,
        reach: 8,
        bedLength: 6.5
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'манипулятор вездеход kanglim ks 2056 камаз-43118',
      capacity: '7',
      image: '/images/манипуляторы/kanglim ks2056 kamaz.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Грузоподъемность стрелы: 7т, Грузоподъемность борта: 10т',
      category: '7-12',
      specs: {
        craneCapacity: 7,
        bedCapacity: 10,
        reach: 20,
        bedLength: 7
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'манипулятор soosan scs 746l на базе daewoo',
      capacity: '7',
      image: '/images/манипуляторы/дэву сусан.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Грузоподъемность стрелы: 7т, Грузоподъемность борта: 10т',
      category: '7-12',
      specs: {
        craneCapacity: 7,
        bedCapacity: 10,
        reach: 19,
        bedLength: 7.9
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'манипулятор soosan scs866ls на базе камаз',
      capacity: '7',
      image: '/images/манипуляторы/oosan 866 kamax.webp',
      price: 'от 18 000 ₽/смена',
      description: 'Грузоподъемность стрелы: 7т, Грузоподъемность борта: 15т',
      category: '7-12',
      specs: {
        craneCapacity: 7,
        bedCapacity: 15,
        reach: 19.6,
        bedLength: 6
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'манипулятор palfinger pk 42502',
      capacity: '12',
      image: '/images/манипуляторы/palfinger pk42502.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Грузоподъемность стрелы: 12т, Грузоподъемность борта: 20т',
      category: '7-12',
      specs: {
        craneCapacity: 12,
        bedCapacity: 20,
        reach: 22,
        bedLength: 13.6
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по весовой категории
  const filteredManipulators = selectedCapacityCategory === 'all' 
    ? manipulators 
    : manipulators.filter(manipulator => manipulator.category === selectedCapacityCategory)

  const capacityCategories = [
    { id: 'all', name: 'Все манипуляторы', count: manipulators.length },
    { id: '3-5', name: 'Стрела 3-5 тонн', count: manipulators.filter(m => m.category === '3-5').length },
    { id: '7-12', name: 'Стрела 7-12 тонн', count: manipulators.filter(m => m.category === '7-12').length }
  ]

  const generateWhatsAppMessage = (manipulator: any) => {
    const message = `Здравствуйте! Хочу заказать ${manipulator.name} (грузоподъемность стрелы ${manipulator.specs.craneCapacity}т, вылет ${manipulator.specs.reach}м)`
    return encodeURIComponent(message)
  }

  const handleOrderManipulator = (manipulator: any) => {
    const message = generateWhatsAppMessage(manipulator)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Манипуляторы</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex items-center justify-between" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>манипуляторы</h1>
            <p className="font-manrope font-medium" style={{fontSize: 20, color: '#525252', lineHeight: 1}}>
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

          {/* Сетка манипуляторов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredManipulators.map((manipulator) => (
              <div 
                key={manipulator.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 460}}
              >
                {/* Изображение */}
                <div className="relative" style={{height: 240}}>
                  <img 
                    src={manipulator.image}
                    alt={manipulator.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                      imageRendering: '-webkit-optimize-contrast'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      Стрела {manipulator.specs.craneCapacity} т
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {manipulator.name}
                  </h3>

                  {/* Характеристики */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-[14px] font-manrope">
                      <span className="text-slate-500">Грузоподъемность стрелы:</span>
                      <span className="text-slate-900 font-medium">{manipulator.specs.craneCapacity} т</span>
                    </div>
                    <div className="flex justify-between text-[14px] font-manrope">
                      <span className="text-slate-500">Грузоподъемность борта:</span>
                      <span className="text-slate-900 font-medium">{manipulator.specs.bedCapacity} т</span>
                    </div>
                    <div className="flex justify-between text-[14px] font-manrope">
                      <span className="text-slate-500">Вылет стрелы:</span>
                      <span className="text-slate-900 font-medium">{manipulator.specs.reach} м</span>
                    </div>
                    <div className="flex justify-between text-[14px] font-manrope">
                      <span className="text-slate-500">Длина борта:</span>
                      <span className="text-slate-900 font-medium">{manipulator.specs.bedLength} м</span>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {manipulator.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderManipulator(manipulator)}
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
              Почему стоит арендовать манипулятор у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Индивидуальный подбор техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Поможем выбрать оптимальный манипулятор под ваши задачи с учетом всех особенностей объекта
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Быстрая подача техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Оперативная доставка манипуляторов на объект в течение 2-3 часов
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ManipulatorsPage
