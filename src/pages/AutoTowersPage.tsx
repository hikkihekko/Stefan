import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AutoTowersPage: React.FC = () => {
  const [selectedHeightCategory, setSelectedHeightCategory] = useState('all')

  // Данные автовышек с фото и описаниями
  const autoTowers = [
    {
      id: 1,
      name: 'автовышка isuzu elf с поворотной корзиной',
      height: '15',
      image: '/images/автовышки/isuzu-elf.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Высота подъема: 15м, Грузоподъемность: 220кг',
      category: '15-16',
      specs: {
        height: 15,
        capacity: 220,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 2,
      name: 'автовышка mitsubishi canter комбинированная',
      height: '16',
      image: '/images/автовышки/canter1.webp',
      price: 'от 15 000 ₽/смена',
      description: 'Высота подъема: 16м, Грузоподъемность: 250кг',
      category: '15-16',
      specs: {
        height: 16,
        capacity: 250,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 3,
      name: 'автовышка mitsubishi canter',
      height: '17',
      image: '/images/автовышки/canter2.webp',
      price: 'от 16 000 ₽/смена',
      description: 'Высота подъема: 17м, Грузоподъемность: 250кг',
      category: '17-18',
      specs: {
        height: 17,
        capacity: 250,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 4,
      name: 'автовышка hyundai porter',
      height: '18',
      image: '/images/автовышки/huy--porter.webp',
      price: 'от 17 000 ₽/смена',
      description: 'Высота подъема: 18м, Грузоподъемность: 220кг',
      category: '17-18',
      specs: {
        height: 18,
        capacity: 220,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 5,
      name: 'автовышка вездеход da320 чайка',
      height: '20',
      image: '/images/автовышки/TЗ¦-¦¬¦Ж¦¦¦-¦-¦¦¦¬¦+¦¦TЕ¦-¦+.webp',
      price: 'от 18 000 ₽/смена',
      description: 'Высота подъема: 20м, Грузоподъемность: 300кг',
      category: '20',
      specs: {
        height: 20,
        capacity: 300,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 6,
      name: 'автовышка вездеход газ 3308',
      height: '20',
      image: '/images/автовышки/¦¦¦-¦¬3308.webp',
      price: 'от 18 000 ₽/смена',
      description: 'Высота подъема: 20м, Грузоподъемность: 200кг',
      category: '20',
      specs: {
        height: 20,
        capacity: 200,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 7,
      name: 'автовышка dong feng',
      height: '20',
      image: '/images/автовышки/dongfeng.webp',
      price: 'от 18 000 ₽/смена',
      description: 'Высота подъема: 20м, Грузоподъемность: 250кг',
      category: '20',
      specs: {
        height: 20,
        capacity: 250,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 8,
      name: 'автовышка газ валдай',
      height: '22',
      image: '/images/автовышки/¦¦¦-¦¬¦-¦-¦¬¦+¦-¦¬¦Ж.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Высота подъема: 22м, Грузоподъемность: 250кг',
      category: '22',
      specs: {
        height: 22,
        capacity: 250,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 9,
      name: 'автовышка чайка-сервис 4784кp (hino-300)',
      height: '22',
      image: '/images/автовышки/TЗ¦-¦¬¦Ж¦¦¦-TБ¦¦TА¦-¦¬TБ.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Высота подъема: 22м, Грузоподъемность: 300кг',
      category: '22',
      specs: {
        height: 22,
        capacity: 300,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 10,
      name: 'автовышка isuzu forward',
      height: '26',
      image: '/images/автовышки/isuzuforward.webp',
      price: 'от 19 000 ₽/смена',
      description: 'Высота подъема: 26м, Грузоподъемность: 200кг',
      category: '26-28',
      specs: {
        height: 26,
        capacity: 200,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 11,
      name: 'автовышка hanshin hs-2750',
      height: '27',
      image: '/images/автовышки/hansin-hs-2750.webp',
      price: 'от 20 000 ₽/смена',
      description: 'Высота подъема: 27м, Грузоподъемность: 400кг',
      category: '26-28',
      specs: {
        height: 27,
        capacity: 400,
        basketSize: '3x1,1'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 12,
      name: 'автовышка huyndai hd78',
      height: '28',
      image: '/images/автовышки/hyundai hd78.webp',
      price: 'от 20 200 ₽/смена',
      description: 'Высота подъема: 28м, Грузоподъемность: 250кг',
      category: '26-28',
      specs: {
        height: 28,
        capacity: 250,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 13,
      name: 'автовышка камаз 4326',
      height: '32',
      image: '/images/автовышки/¦¦¦-¦-¦-¦¬4326.webp',
      price: 'от 22 000 ₽/смена',
      description: 'Высота подъема: 32м, Грузоподъемность: 300кг',
      category: '32',
      specs: {
        height: 32,
        capacity: 300,
        basketSize: '1,8x1,2'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 14,
      name: 'автовышка hyundai gold',
      height: '32',
      image: '/images/автовышки/huyndai-gold.webp',
      price: 'от 22 000 ₽/смена',
      description: 'Высота подъема: 32м, Грузоподъемность: 300кг',
      category: '32',
      specs: {
        height: 32,
        capacity: 300,
        basketSize: '3,2x1'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 15,
      name: 'автовышка вездеход socage tj35',
      height: '35',
      image: '/images/автовышки/socagetg35.webp',
      price: 'от 22 000 ₽/смена',
      description: 'Высота подъема: 35м, Грузоподъемность: 400кг',
      category: '35+',
      specs: {
        height: 35,
        capacity: 400,
        basketSize: '2,2x1'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 16,
      name: 'автовышка daewoo novus sky 450sf',
      height: '45',
      image: '/images/автовышки/daewoonovus.webp',
      price: 'от 25 000 ₽/смена',
      description: 'Высота подъема: 45м, Грузоподъемность: 300кг',
      category: '35+',
      specs: {
        height: 45,
        capacity: 300,
        basketSize: '3,2x1'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 17,
      name: 'автовышка koho kh-520',
      height: '50',
      image: '/images/автовышки/ Koho KH 520.webp',
      price: 'от 27 000 ₽/смена',
      description: 'Высота подъема: 50м, Грузоподъемность: 300кг',
      category: '35+',
      specs: {
        height: 50,
        capacity: 300,
        basketSize: '1,4x0,7'
      },
      phone: '+7 (921) 571-20-79'
    },
    {
      id: 18,
      name: 'автовышка horyong sky-600',
      height: '60',
      image: '/images/автовышки/horyong sky-600.webp',
      price: 'от 30 000 ₽/смена',
      description: 'Высота подъема: 60м, Грузоподъемность: 450кг',
      category: '35+',
      specs: {
        height: 60,
        capacity: 450,
        basketSize: '4x2'
      },
      phone: '+7 (921) 571-20-79'
    }
  ]

  // Фильтрация по высоте
  const filteredAutoTowers = selectedHeightCategory === 'all' 
    ? autoTowers 
    : selectedHeightCategory === '15-20'
    ? autoTowers.filter(tower => ['15-16', '17-18', '20'].includes(tower.category))
    : selectedHeightCategory === '22-35'
    ? autoTowers.filter(tower => ['22', '26-28', '32', '35+'].includes(tower.category) && tower.specs.height < 45)
    : selectedHeightCategory === '45-60'
    ? autoTowers.filter(tower => tower.specs.height >= 45)
    : autoTowers.filter(tower => tower.category === selectedHeightCategory)

  const heightCategories = [
    { id: 'all', name: 'Все автовышки', count: autoTowers.length },
    { id: '15-20', name: 'Высота 15-20 метров', count: autoTowers.filter(t => ['15-16', '17-18', '20'].includes(t.category)).length },
    { id: '22-35', name: 'Высота 22-35 метров', count: autoTowers.filter(t => ['22', '26-28', '32', '35+'].includes(t.category)).length },
    { id: '45-60', name: 'Высота 45-60 метров', count: autoTowers.filter(t => t.category === '35+' && t.specs.height >= 45).length }
  ]

  const generateWhatsAppMessage = (tower: any) => {
    const message = `Здравствуйте! Хочу заказать ${tower.name} (высота подъема ${tower.specs.height}м, грузоподъемность ${tower.specs.capacity}кг)`
    return encodeURIComponent(message)
  }

  const handleOrderTower = (tower: any) => {
    const message = generateWhatsAppMessage(tower)
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-6">
      {/* Навигационная цепочка */}
      <div>
        <nav className="flex text-white/70 font-manrope text-[18px]" style={{lineHeight: 1, paddingLeft: '24px'}}>
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Автовышки</span>
        </nav>
      </div>

      {/* Основной контент */}
      <section className="pt-6 pb-12">
        <div className="bg-white rounded-[24px]" style={{padding: 24}}>
          
          {/* Заголовок страницы */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6" style={{marginBottom: 24}}>
            <h1 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-0" style={{lineHeight: 1}}>автовышки</h1>
            <p className="font-manrope font-medium text-base sm:text-lg lg:text-xl text-[#525252]" style={{lineHeight: 1}}>
              Выберите желаемую технику
            </p>
          </div>

          {/* Фильтр по высоте */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2" style={{marginBottom: 12}}>
            {heightCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedHeightCategory(category.id)}
                className={`px-6 py-3 rounded-full font-manrope font-medium text-[16px] whitespace-nowrap transition-all ${
                  selectedHeightCategory === category.id
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

          {/* Сетка автовышек */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAutoTowers.map((tower) => (
              <div 
                key={tower.id}
                className="bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
                style={{height: 500}}
              >
                {/* Изображение */}
                <div className="relative bg-white" style={{height: 240}}>
                  <img 
                    src={tower.image}
                    alt={tower.name}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      objectFit: 'fill',
                      imageRendering: 'high-quality'
                    }}
                    decoding="sync"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-manrope font-medium text-[14px] text-slate-900">
                      Высота {tower.specs.height} м
                    </span>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-baron font-bold text-slate-900 mb-2" style={{fontSize: 20, lineHeight: 1.2, minHeight: 48}}>
                    {tower.name}
                  </h3>

                  {/* Характеристики */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Высота подъема:</span>
                      <span className="text-slate-900 font-medium">{tower.specs.height} м</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Грузоподъемность корзины:</span>
                      <span className="text-slate-900 font-medium">{tower.specs.capacity} кг</span>
                    </div>
                    <div className="flex justify-between text-[16px] font-manrope">
                      <span className="text-slate-500">Размер корзины:</span>
                      <span className="text-slate-900 font-medium">{tower.specs.basketSize} м</span>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-manrope font-bold text-[#3535B9]" style={{fontSize: 18}}>
                      {tower.price}
                    </span>
                  </div>

                  {/* Кнопка заказа - закреплена внизу */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleOrderTower(tower)}
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
              Почему стоит арендовать автовышку у нас?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Индивидуальный подбор техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Поможем выбрать оптимальную автовышку под ваши задачи с учетом всех особенностей объекта
                </p>
              </div>
              <div>
                <h4 className="font-manrope font-semibold text-slate-900 mb-2" style={{fontSize: 18}}>
                  Быстрая подача техники
                </h4>
                <p className="font-manrope text-slate-600" style={{fontSize: 16}}>
                  Оперативная доставка автовышек на объект в течение 2-3 часов
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default AutoTowersPage
