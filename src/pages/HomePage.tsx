import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import buttonArrow from '../icons/Button arrow.svg'
import navArrow from '../icons/svg стрелка.svg'
import lightning from '../icons/молния.svg'
import shield from '../icons/щит.svg'
import wrench from '../icons/отвертка.svg'
import medal from '../icons/медалька.svg'
import chart from '../icons/график.svg'
import people from '../icons/люди.svg'
import stefanLogo from '../icons/stefan.svg'
import Reviews from '../components/Reviews/Reviews'

const HomePage: React.FC = () => {
  const [techType, setTechType] = useState('')
  const [location, setLocation] = useState('')
  const [workType, setWorkType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  
  // Анимированный текст
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const words = ['с оператором', 'своя техника', 'в москве и мо', 'точно вовремя']

  const generateWhatsAppMessage = () => {
    const message = `Здравствуйте, хочу заказать технику. Техника: ${techType || 'не указана'}. Местоположение: ${location || 'не указано'}. Фронт работ: ${workType || 'не указан'}.`
    return encodeURIComponent(message)
  }

  const handleSubmit = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/79857671500?text=${message}`, '_blank')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Переход на страницу каталога с поисковым запросом
      window.location.href = `/catalog?search=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqData = [
    {
      question: "Сколько стоит аренда спецтехники в Москве?",
      answer: "Стоимость зависит от типа техники, её мощности, срока аренды, расстояния доставки и необходимости оператора. Мы дадим точную цену после уточнения всех параметров."
    },
    {
      question: "Минимальный срок аренды — сколько времени?",
      answer: "Мы сдаём спецтехнику минимум на одну рабочую смену (обычно 8 часов), также возможна почасовая аренда и аренда на длительный срок."
    },
    {
      question: "Предоставляете ли вы технику с оператором (машинистом)?",
      answer: "Да — большинство наших машин сдаются с квалифицированным оператором. Если вам нужна техника без оператора, уточните, возможно ли это для конкретной модели."
    },
    {
      question: "Как осуществляется доставка техники на объект и сколько времени это займёт?",
      answer: "Мы доставляем технику собственным транспортом — тралами или эвакуаторами, в зависимости от габаритов. В пределах Москвы доставка обычно занимает от 1 до 2 часов после заказа и согласования."
    },
    {
      question: "Что происходит, если техника ломается во время аренды?",
      answer: "В случае неисправности мы заменяем технику на аналогичную или производим ремонт на объекте, если это возможно, за наш счёт."
    },
    {
      question: "Как происходит оплата, и какие способы вы принимаете?",
      answer: "Принимаем как безналичный расчёт (для компаний), так и наличный. Возможна предоплата. Счёт и договор предоставляются заранее."
    },
    {
      question: "Действуете ли вы за пределами МКАД / Московская область?",
      answer: "Да — мы доставляем технику также в области, но ее стоимость и условия аренды лучше согласовать индивидуально. Пожалуйста, свяжитесь с нами для получения более точного расчета."
    }
  ]

  // Анимация смены слов
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 300) // Пауза между исчезновением и появлением
      
    }, 2500) // Смена каждые 2.5 секунды

    return () => clearInterval(interval)
  }, [words.length])
  return (
    <div className="container mx-auto px-4 sm:px-6" style={{scrollMarginTop: '120px'}}>
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 items-start gap-4 lg:gap-6 mt-8 lg:mt-12">
        <div className="py-6 lg:py-10 px-6" style={{paddingLeft: '24px'}}>
          <h1 id="top" className="font-baron font-extrabold leading-tight normal-case text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{textTransform: 'none'}}>
            спецтехника<br/>
            <span className="whitespace-nowrap">
              в аренду: <span 
                className="text-white/70 inline-block transition-all duration-300 ease-in-out" 
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                  minWidth: '280px',
                  textAlign: 'left'
                }}
              >
                {words[currentWordIndex]}
              </span>
            </span>
          </h1>
          <p className="mt-4 lg:mt-6 text-white/85 max-w-xl font-medium text-base lg:text-lg">Собственный парк, оперативная подача, прозрачные цены.<br/>От мини до тяжёлой техники — всё в наличии под вашу задачу.</p>
          
          {/* Поисковая строка */}
          <div className="mt-4 lg:mt-6">
            <form onSubmit={handleSearch}>
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center justify-center pointer-events-none">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full h-[50px] pl-12 pr-4 rounded-full bg-white/25 border border-white/40 text-white placeholder-white/70 text-[16px] font-manrope focus:bg-white/35 focus:border-white/60 focus:outline-none transition-all"
                  placeholder="Поиск техники в каталоге..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        
        {/* Form Card */}
        <div className="lg:justify-self-end">
          <div className="rounded-[24px] bg-white text-slate-900 w-full max-w-md mx-auto lg:mx-0 lg:w-[392px] h-auto lg:h-[440px] mt-6 lg:mt-6 mr-0 lg:mr-6">
            <div className="h-full flex flex-col px-6 py-6 lg:py-6">
              <div className="flex flex-col items-center">
                <h3 className="font-baron font-bold text-center text-xl lg:text-3xl mb-6" style={{lineHeight: 1}}>подобрать технику</h3>
                <div className="w-full flex flex-col items-center mb-6">
                  <div className="mb-4 lg:mb-6 w-full max-w-[344px]">
                    <label className="block text-[#2D3748] font-manrope font-medium text-sm lg:text-base mb-2" style={{lineHeight: 1}}>Тип техники</label>
                    <input 
                      className="w-full h-[48px] rounded-[24px] bg-slate-100 border border-slate-200 px-4 text-sm lg:text-base font-manrope font-normal focus:border-[#ADB8FF] focus:outline-none" 
                      placeholder="Желаемые характеристики техники"
                      value={techType}
                      onChange={(e) => setTechType(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 lg:mb-6 w-full max-w-[344px]">
                    <label className="block text-[#2D3748] font-manrope font-medium text-sm lg:text-base mb-2" style={{lineHeight: 1}}>Местоположение</label>
                    <input 
                      className="w-full h-[48px] rounded-[24px] bg-slate-100 border border-slate-200 px-4 text-sm lg:text-base font-manrope font-normal focus:border-[#ADB8FF] focus:outline-none" 
                      placeholder="Адрес работ"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="w-full max-w-[344px]">
                    <label className="block text-[#2D3748] font-manrope font-medium text-sm lg:text-base mb-2" style={{lineHeight: 1}}>Фронт работ</label>
                    <input 
                      className="w-full h-[48px] rounded-[24px] bg-slate-100 border border-slate-200 px-4 text-sm lg:text-base font-manrope font-normal focus:border-[#ADB8FF] focus:outline-none" 
                      placeholder="Краткое описание задачи"
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value)}
                    />
                  </div>
                </div>
                <button 
                  className="w-full max-w-[344px] h-[50px] rounded-[24px] bg-black hover:bg-[#0C1C8F] text-white font-manrope font-medium text-sm lg:text-base transition-colors" 
                  onClick={handleSubmit}
                  type="button"
                >
                  Написать менеджеру
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Большая белая подложка для каталога, отзывов, о компании */}
     <section className="pt-8 lg:pt-20">
       <div className="bg-white rounded-[24px]" style={{padding: 0}}>
         
         {/* Каталог техники */}
         <div id="catalog" className="px-6 lg:px-6 py-6 lg:py-12" style={{paddingTop: '32px', scrollMarginTop: '220px'}}>
           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-6">
             <h2 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl mb-2 lg:mb-0" style={{lineHeight: 1}}>каталог техники</h2>
             <p className="font-manrope font-medium text-base lg:text-xl text-[#525252]" style={{lineHeight: 1}}>Любая техника под Ваш запрос</p>
           </div>
           
           {/* Каталог техники - адаптивная сетка */}
             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { name: 'Экскаваторы-погрузчики', type: 'Универсальная техника', image: '/images/экск погруз.webp' },
                { name: 'Автокраны', type: 'Подъемные работы', image: '/images/автокр.jpg' },
                { name: 'Манипуляторы', type: 'Погрузка/разгрузка', image: '/images/diploma.jpeg' },
                { name: 'Самосвалы', type: 'Перевозка грузов', image: '/images/gruzovik.jpg' },
                { name: 'Экскаваторы гусеничные', type: 'Земляные работы', image: '/images/экск гус.jpg' },
                { name: 'Мини экскаваторы', type: 'Стесненные условия', image: '/images/миниэк.webp' },
                { name: 'Фронтальные погрузчики', type: 'Сыпучие материалы', image: '/images/фронтпогр.webp' },
                { name: 'Автовышки', type: 'Высотные работы', image: '/images/автовышк.webp' },
                { name: 'Мини погрузчики', type: 'Мелкие работы', image: '/images/минипогрузl.jpg' },
                { name: 'Экскаваторы колёсные', type: 'Дорожные работы', image: '/images/экск колесный.webp' },
                { name: 'Тралы', type: 'Перевозка техники', image: '/images/трал.jpg' },
                { name: 'Бульдозеры', type: 'Планировка грунта', image: '/images/бульдлозер.jpg' },
                { name: 'Катки', type: 'Уплотнение', image: '/images/катки.jpg' },
                { name: 'Бортовые автомобили', type: 'Доставка материалов', image: '/images/бортмаш.webp' },
                { name: 'Длинномеры', type: 'Длинные грузы', image: '/images/длинномер.webp' },
                { name: 'Грейдеры', type: 'Планировка дорог', image: '/images/грейдеры.webp' }
              ].map((item, index) => {
                const cardContent = (
                  <>
                    {/* Фоновое изображение */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${item.image}')`
                      }}
                    />
                    
                    {/* Темный оверлей */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                    
                    {/* Контент */}
                    <div className="relative p-3 sm:p-4 lg:p-5 h-full flex flex-col justify-between text-white">
                      <div>
                        <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium mb-2 text-xs sm:text-sm lg:text-base">
                          {item.type}
                        </span>
                      </div>

                      <div className="mt-auto">
                        <h3 className="font-baron font-medium leading-tight mb-1 lowercase text-sm sm:text-base lg:text-lg" style={{transform: 'translateY(4px)'}}>
                          {item.name}
                        </h3>
                        <div className="flex items-end justify-between">
                          <span className="text-white/80 font-manrope font-medium text-xs sm:text-sm lg:text-base">
                            {(() => {
                              const prices: {[key: string]: string} = {
                                'Экскаваторы гусеничные': 'от 25 000 ₽/смена',
                                'Самосвалы': 'от 20 000 ₽/смена',
                                'Манипуляторы': 'от 20 000 ₽/смена',
                                'Экскаваторы-погрузчики': 'от 25 000 ₽/смена',
                                'Мини экскаваторы': 'от 20 000 ₽/смена',
                                'Фронтальные погрузчики': 'от 20 000 ₽/смена',
                                'Автовышки': 'от 20 000 ₽/смена',
                                'Автокраны': 'от 16 000 ₽/смена',
                                'Мини погрузчики': 'от 20 000 ₽/смена',
                                'Тралы': 'от 24 000 ₽/смена',
                                'Бульдозеры': 'от 20 000 ₽/смена',
                                'Грейдеры': 'от 40 000 ₽/смена'
                              };
                              return prices[item.name] || 'от 15 000 ₽/смена';
                            })()}
                          </span>
                          <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-white sm:w-3 sm:h-3 lg:w-3 lg:h-3">
                              <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );

                const getLinkPath = (name: string) => {
                  const pathMap: {[key: string]: string} = {
                    'Автокраны': '/autocranes',
                    'Экскаваторы-погрузчики': '/excavator-loaders',
                    'Манипуляторы': '/manipulators',
                    'Самосвалы': '/trucks',
                    'Экскаваторы гусеничные': '/excavator-tracked',
                    'Мини экскаваторы': '/mini-excavators',
                    'Фронтальные погрузчики': '/front-loaders',
                    'Автовышки': '/auto-towers',
                    'Мини погрузчики': '/mini-loaders',
                    'Экскаваторы колёсные': '/excavator-wheeled',
                    'Тралы': '/trailers',
                    'Бульдозеры': '/bulldozers',
                    'Катки': '/rollers',
                    'Бортовые автомобили': '/board-trucks',
                    'Длинномеры': '/long-trucks',
                    'Грейдеры': '/graders'
                  };
                  return pathMap[name];
                };

                const linkPath = getLinkPath(item.name);
                
                return linkPath ? (
                  <Link 
                    key={index}
                    to={linkPath}
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 block h-32 sm:h-40 lg:h-48"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div 
                    key={index}
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 h-32 sm:h-40 lg:h-48"
                  >
                    {cardContent}
                  </div>
                );
              })}
           </div>
         </div>

                 {/* Блок отзывов */}
       <div id="about" className="mt-8 lg:mt-8" style={{scrollMarginTop: '250px'}}>
         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-6 px-6 lg:px-6">
           <h2 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl mb-2 lg:mb-0" style={{lineHeight: 1, margin: 0}}>почему выбирают нас</h2>
           <p className="font-manrope font-medium text-base lg:text-xl text-[#525252]" style={{lineHeight: 1, margin: 0}}>Отзывы наших клиентов</p>
         </div>
           
           {/* Компонент отзывов */}
           <div className="px-6 lg:px-6" style={{marginTop: '32px'}}>
             <Reviews />
           </div>
         </div>

          {/* Блок о компании */}
          <div className="mt-8 lg:mt-12 px-6 lg:px-6">
           <div className="flex items-center justify-between">
             <h2 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl" style={{lineHeight: 1, margin: 0}}>о компании</h2>
           </div>
           
           {/* Auto Layout контейнер с отступом 48px от заголовка */}
           <div className="mt-8 lg:mt-12 pb-8 lg:pb-8">
             {/* Сетка преимуществ с auto layout */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
               {/* Команда профи */}
               <div className="relative rounded-2xl p-4 lg:p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden h-40 sm:h-48 lg:h-48">
                 {/* Фоновое изображение с отражением по вертикали */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center"
                   style={{
                     backgroundImage: "url('/images/карточка 4.jpg')",
                     transform: "scaleY(-1)"
                   }}
                 />
                 
                 {/* Контент */}
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-white mb-2 lg:mb-3">
                     <img src={people} alt="Люди" width={20} height={20} className="lg:w-6 lg:h-6" />
                   </div>
                   <h3 className="font-manrope font-semibold text-white text-lg lg:text-2xl mb-1 lg:mb-2">Команда профи</h3>
                   <p className="font-manrope font-medium text-white/90 text-sm lg:text-xl">Водители РФ с многолетним опытом</p>
                 </div>
               </div>

               {/* Опыт более 20 лет */}
               <div className="relative rounded-2xl p-4 lg:p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden h-40 sm:h-48 lg:h-48">
                 <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/карточка 2.jpg')"}} />
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-white mb-2 lg:mb-3">
                     <img src={medal} alt="Медаль" width={20} height={20} className="lg:w-6 lg:h-6" />
                   </div>
                   <h3 className="font-manrope font-semibold text-white text-lg lg:text-2xl mb-1 lg:mb-2">Опыт более 20 лет</h3>
                   <p className="font-manrope font-medium text-white/90 text-sm lg:text-xl">Наша компания на рынке с 2005 года</p>
                 </div>
               </div>

               {/* Поддержка 24/7 */}
               <div className="relative rounded-2xl p-4 lg:p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden h-40 sm:h-48 lg:h-48">
                 <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/карточка 4.jpg')", transform: "rotate(180deg)"}} />
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-white mb-2 lg:mb-3">
                     <img src={shield} alt="Щит" width={16} height={20} className="lg:w-5 lg:h-6" />
                   </div>
                   <h3 className="font-manrope font-semibold text-white text-lg lg:text-2xl mb-1 lg:mb-2">Поддержка 24/7</h3>
                   <p className="font-manrope font-medium text-white/90 text-sm lg:text-xl">Мы всегда с Вами на связи</p>
                 </div>
               </div>

               {/* Быстрая подача */}
               <div className="relative rounded-2xl p-4 lg:p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden h-40 sm:h-48 lg:h-48">
                 <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/карточка 4.jpg')"}} />
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-white mb-2 lg:mb-3">
                     <img src={lightning} alt="Молния" width={20} height={20} className="lg:w-6 lg:h-6" />
                   </div>
                   <h3 className="font-manrope font-semibold text-white text-lg lg:text-2xl mb-1 lg:mb-2">Быстрая подача</h3>
                   <p className="font-manrope font-medium text-white/90 text-sm lg:text-xl">По Москве и Московской области</p>
                 </div>
               </div>

               {/* Техобслуживание */}
               <div className="relative rounded-2xl p-4 lg:p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden h-40 sm:h-48 lg:h-48">
                 <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/карточка 2.jpg')", transform: "scaleY(-1)"}} />
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-white mb-2 lg:mb-3">
                     <img src={wrench} alt="Отвертка" width={18} height={18} className="lg:w-6 lg:h-6" />
                   </div>
                   <h3 className="font-manrope font-semibold text-white text-lg lg:text-2xl mb-1 lg:mb-2">Техобслуживание</h3>
                   <p className="font-manrope font-medium text-white/90 text-sm lg:text-xl">Регулярная диагностика оборудования</p>
                 </div>
               </div>

               {/* Гибкие тарифы */}
               <div className="relative rounded-2xl p-4 lg:p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden h-40 sm:h-48 lg:h-48">
                 <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/карточка 4.jpg')", transform: "scaleX(-1)"}} />
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-white mb-2 lg:mb-3">
                     <img src={chart} alt="График" width={20} height={12} className="lg:w-6 lg:h-4" />
                   </div>
                   <h3 className="font-manrope font-semibold text-white text-lg lg:text-2xl mb-1 lg:mb-2">Гибкие тарифы</h3>
                   <p className="font-manrope font-medium text-white/90 text-sm lg:text-xl">Скидка постоянным клиентам</p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         {/* Блок FAQ */}
         <div className="mt-8 lg:mt-12 px-6 lg:px-6" style={{paddingBottom: '32px'}}>
           <div className="flex items-center justify-between mb-6 lg:mb-8">
             <h2 className="font-baron font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl" style={{lineHeight: 1, margin: 0}}>часто задаваемые вопросы</h2>
           </div>
           
           <div className="space-y-4">
             {faqData.map((faq, index) => (
               <div 
                 key={index}
                 className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                 style={{border: '1px solid #ADB8FF'}}
               >
                 <button
                   onClick={() => toggleFAQ(index)}
                   className="w-full text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                   style={{
                     paddingTop: '24px',
                     paddingBottom: openFAQ === index ? '0px' : '24px',
                     paddingLeft: '24px', 
                     paddingRight: '24px'
                   }}
                 >
                   <h3 className="font-manrope font-semibold text-lg lg:text-xl pr-4" style={{fontSize: '20px', lineHeight: 1.3, color: '#3535B9'}}>
                     {faq.question}
                   </h3>
                   <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{color: '#3535B9'}}>
                       <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   </div>
                 </button>
                 
                 <div className={`transition-all duration-300 overflow-hidden ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <div style={{paddingTop: '24px', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '24px'}}>
                     <p className="font-manrope font-normal text-slate-700" style={{fontSize: '18px', lineHeight: 1}}>
                       {faq.answer}
                     </p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>

       </div>
     </section>

     <section className="mt-12 px-6">
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
         <h2 className="font-baron font-bold text-white text-3xl sm:text-4xl lg:text-5xl" style={{lineHeight: 1, margin: 0}}>недавние статьи</h2>
         <Link to="/articles" className="text-white/80 hover:text-white underline font-manrope font-medium text-xl">Все статьи</Link>
       </div>
     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
       <Link to="/articles/top-5-vostrebovannyh-vidov-spectehniki-moskva-2025" className="bg-white/25 border border-white/40 rounded-2xl p-5 block hover:bg-white/35 hover:border-white/60 transition-all">
         <div className="font-semibold text-lg">Топ-5 самых востребованных видов спецтехники в Москве и МО в 2025 году</div>
         <div className="text-white/75 text-sm mt-2">Рейтинг самых популярных видов техники в Москве и МО</div>
       </Link>
       <Link to="/articles/arenda-samosvala-moskva-2025-vybor-tehniki-gruntov" className="bg-white/25 border border-white/40 rounded-2xl p-5 block hover:bg-white/35 hover:border-white/60 transition-all">
         <div className="font-semibold text-lg">Аренда самосвала в Москве и МО 2025: выбор техники для различных грунтов и задач</div>
         <div className="text-white/75 text-sm mt-2">Подбор техники для различных грунтов и типов работ</div>
       </Link>
       <Link to="/articles/arenda-mini-ekskavatora-moskva-2025-razresheniya-stoimost" className="bg-white/25 border border-white/40 rounded-2xl p-5 block hover:bg-white/35 hover:border-white/60 transition-all">
         <div className="font-semibold text-lg">Аренда мини-экскаватора в Москве и МО: разрешения и реальная стоимость в 2025</div>
         <div className="text-white/75 text-sm mt-2">Разрешения, ограничения и реальная стоимость аренды</div>
       </Link>
     </div>
    </section>

     {/* Футер */}
     <footer id="contacts" className="py-8 lg:py-16" style={{scrollMarginTop: '220px'}}>
       <div className="container mx-auto px-4 sm:px-6">
         <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-8">
           {/* Логотип и описание */}
           <div className="flex-1 mb-8 lg:mb-0">
             <img src={stefanLogo} alt="СТЕФАН" className="h-10 lg:h-12 mb-6 lg:mb-14" />
            <p className="text-white/90 font-manrope text-base lg:text-lg leading-relaxed">
              Надежная аренда спецтехники в Москве и Московской области.<br/>
              Полный спектр техники для любых задач.
            </p>
           </div>
           
           {/* Контакты */}
           <div className="lg:mr-6" style={{transform: 'translateY(-20px) translateX(24px)'}}>
             <h3 className="font-baron font-bold text-white text-3xl lg:text-5xl mb-8 lg:mb-16 text-right" style={{lineHeight: 1, transform: 'translateY(-12px)'}}>наши контакты</h3>
             <div className="flex justify-end" style={{transform: 'translateY(-12px)'}}>
               <a 
                 href="tel:+79857671500" 
                 className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
               >
                 <div className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center">
                   <svg className="text-white w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                 </div>
                 <span className="text-white font-manrope text-base lg:text-xl">+7 (985) 767-15-00</span>
               </a>
             </div>
           </div>
         </div>
         
         {/* Разделительная линия */}
         <div className="border-t border-white/20 mb-6"></div>
         
         {/* Нижняя часть футера */}
         <div className="flex flex-col md:flex-row justify-between items-center">
           <p className="text-white/80 font-manrope mb-4 md:mb-0 text-sm lg:text-base">
             © 2025 ООО "СТЕФАН". Все права защищены.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
             <p className="text-white/80 font-manrope text-sm lg:text-base">
               Все модели техники представлены исключительно для ознакомления
             </p>
           </div>
         </div>
       </div>
     </footer>
   </div>
 )
}

export default HomePage
