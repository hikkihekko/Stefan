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

const HomePage: React.FC = () => {
  const [techType, setTechType] = useState('')
  const [location, setLocation] = useState('')
  const [workType, setWorkType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  
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
    <div className="container mx-auto px-6">
             <section className="grid md:grid-cols-2 items-start" style={{columnGap: 24, marginTop: 48}}>
        <div className="py-10" style={{paddingLeft: 24}}>
          <h1 className="font-baron font-extrabold leading-tight normal-case" style={{fontSize: 72, textTransform: 'none'}}>
            спецтехника<br/>
            <span style={{whiteSpace: 'nowrap'}}>
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
          <p className="mt-6 text-white/85 max-w-xl font-medium" style={{fontSize: 18}}>Собственный парк техники, проверенные операторы, выгодные условия. Просто супер, самая лучшая компания, ручаемся за результат.</p>
          
          {/* Поисковая строка */}
          <div className="mt-6">
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
                <div className="justify-self-end">
         <div className="rounded-[24px] bg-white text-slate-900" style={{width:392, height:440, marginTop: 24, marginRight: 24}}>
           <div className="h-full flex flex-col px-6" style={{paddingTop: 24, paddingBottom: 24}}>
             <div className="flex flex-col items-center">
               <h3 className="font-baron font-bold text-center" style={{fontSize: 28, margin: 0, marginBottom: 24, lineHeight: 1}}>подобрать технику</h3>
               <div className="w-full flex flex-col items-center" style={{marginBottom: 24}}>
                 <div className="mb-6 w-[344px]">
                   <label className="block text-[#2D3748] font-manrope font-medium text-[16px] mb-2" style={{lineHeight: 1}}>Тип техники</label>
                   <input 
                     className="w-full h-[48px] rounded-[24px] bg-slate-100 border border-slate-200 px-4 text-[16px] font-manrope font-normal focus:border-[#ADB8FF] focus:outline-none" 
                     placeholder="Желаемые характеристики техники"
                     value={techType}
                     onChange={(e) => setTechType(e.target.value)}
                   />
                 </div>
                 <div className="mb-6 w-[344px]">
                   <label className="block text-[#2D3748] font-manrope font-medium text-[16px] mb-2" style={{lineHeight: 1}}>Местоположение</label>
                   <input 
                     className="w-full h-[48px] rounded-[24px] bg-slate-100 border border-slate-200 px-4 text-[16px] font-manrope font-normal focus:border-[#ADB8FF] focus:outline-none" 
                     placeholder="Адрес работ"
                     value={location}
                     onChange={(e) => setLocation(e.target.value)}
                   />
                 </div>
                 <div className="w-[344px]">
                   <label className="block text-[#2D3748] font-manrope font-medium text-[16px] mb-2" style={{lineHeight: 1}}>Фронт работ</label>
                   <input 
                     className="w-full h-[48px] rounded-[24px] bg-slate-100 border border-slate-200 px-4 text-[16px] font-manrope font-normal focus:border-[#ADB8FF] focus:outline-none" 
                     placeholder="Краткое описание задачи"
                     value={workType}
                     onChange={(e) => setWorkType(e.target.value)}
                   />
                 </div>
               </div>
               <button 
                 className="w-[344px] h-[50px] rounded-[24px] bg-black hover:bg-[#0C1C8F] text-white font-manrope font-medium text-[16px] transition-colors" 
                 style={{margin: 0}}
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
     <section className="py-20">
       <div className="bg-white rounded-[24px]" style={{padding: 0}}>
         
         {/* Каталог техники */}
         <div style={{paddingTop: 24, paddingLeft: 24, paddingRight: 24, paddingBottom: 48}}>
           <div className="flex items-center justify-between" style={{marginBottom: 24}}>
             <h2 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1}}>каталог техники</h2>
             <p className="font-manrope font-medium" style={{fontSize: 20, color: '#525252', lineHeight: 1}}>Любая техника под Ваш запрос</p>
           </div>
           
           {/* Каталог техники - сетка */}
             <div className="grid grid-cols-4 gap-6">
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
                    <div className="relative p-5 h-full flex flex-col justify-between text-white">
                      <div>
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium mb-2" style={{fontSize: 16}}>
                          {item.type}
                        </span>
                      </div>

                      <div className="mt-auto">
                        <h3 className="font-baron font-medium leading-tight mb-1 lowercase" style={{fontSize: 20, transform: 'translateY(4px)'}}>
                          {item.name}
                        </h3>
                        <div className="flex items-end justify-between">
                          <span className="text-white/80 font-manrope font-medium" style={{fontSize: 18}}>
                            {(() => {
                              const prices: {[key: string]: string} = {
                                'Экскаваторы гусеничные': 'от 19 000 ₽/смена',
                                'Самосвалы': 'от 15 000 ₽/смена',
                                'Манипуляторы': 'от 15 000 ₽/смена',
                                'Экскаваторы-погрузчики': 'от 19 000 ₽/смена',
                                'Мини экскаваторы': 'от 16 000 ₽/смена',
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
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
                              <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );

                return item.name === 'Автокраны' ? (
                  <Link 
                    key={index}
                    to="/autocranes"
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 block"
                    style={{height: 200}}
                  >
                    {cardContent}
                  </Link>
                ) : item.name === 'Экскаваторы-погрузчики' ? (
                  <Link 
                    key={index}
                    to="/excavator-loaders"
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 block"
                    style={{height: 200}}
                  >
                    {cardContent}
                  </Link>
                ) : item.name === 'Манипуляторы' ? (
                  <Link 
                    key={index}
                    to="/manipulators"
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 block"
                    style={{height: 200}}
                  >
                    {cardContent}
                  </Link>
                ) : item.name === 'Самосвалы' ? (
                  <Link 
                    key={index}
                    to="/trucks"
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 block"
                    style={{height: 200}}
                  >
                    {cardContent}
                  </Link>
                ) : item.name === 'Экскаваторы гусеничные' ? (
                  <Link 
                    key={index}
                    to="/excavator-tracked"
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 block"
                    style={{height: 200}}
                  >
                    {cardContent}
                  </Link>
                ) : item.name === 'Мини экскаваторы' ? (
                  <Link 
                    key={index}
                    to="/mini-excavators"
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 block"
                    style={{height: 200}}
                  >
                    {cardContent}
                  </Link>
                ) : item.name === 'Фронтальные погрузчики' ? (
                  <Link 
                    key={index}
                    to="/front-loaders"
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 block"
                    style={{height: 200}}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div 
                    key={index}
                    className="relative rounded-[24px] overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
                    style={{height: 200}}
                  >
                    {cardContent}
                  </div>
                );
              })}
           </div>
         </div>

                 {/* Блок отзывов */}
       <div style={{marginTop: 32}}>
         <div className="flex items-center justify-between" style={{marginBottom: 24, paddingLeft: 24}}>
           <h2 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1, margin: 0}}>почему выбирают нас</h2>
           <p className="font-manrope font-medium" style={{fontSize: 20, color: '#525252', lineHeight: 1, margin: 0}}>Тут отзывы Яндекса</p>
         </div>
           
           {/* Место для отзывов - пока пустое */}
           <div className="flex items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200" style={{height: 568}}>
             <p className="text-gray-400 font-manrope text-lg">Отзывы будут добавлены позже</p>
           </div>
         </div>

         {/* Блок о компании */}
         <div style={{marginTop: 48, paddingLeft: 24, paddingRight: 24, marginBottom: 32}}>
           <div className="flex items-center justify-between">
             <h2 className="font-baron font-extrabold text-slate-900" style={{fontSize: 48, lineHeight: 1, margin: 0}}>о компании</h2>
           </div>
           
           {/* Auto Layout контейнер с отступом 48px от заголовка */}
           <div style={{marginTop: 48, paddingBottom: 32}}>
             {/* Сетка преимуществ с auto layout */}
             <div className="grid grid-cols-3 gap-6">
               {/* Команда профи */}
               <div className="relative rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden" style={{height: 200}}>
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
                   <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{width: 50, height: 50, backgroundColor: '#ffffff', marginBottom: 10}}>
                     <img src={people} alt="Люди" width={24} height={25} />
                   </div>
                   <h3 className="font-manrope font-semibold text-white" style={{fontSize: 24, marginBottom: 8}}>Команда профи</h3>
                   <p className="font-manrope font-medium text-white/90" style={{fontSize: 20}}>Водители РФ с многолетним опытом</p>
                 </div>
               </div>

               {/* Опыт более 20 лет */}
               <div className="relative rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden" style={{height: 200}}>
                 {/* Фоновое изображение */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center"
                   style={{
                     backgroundImage: "url('/images/карточка 2.jpg')"
                   }}
                 />
                 
                 {/* Контент */}
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                 <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{width: 50, height: 50, backgroundColor: '#ffffff', marginBottom: 10}}>
                   <img src={medal} alt="Медаль" width={24} height={24} />
                 </div>
                 <h3 className="font-manrope font-semibold text-white" style={{fontSize: 24, marginBottom: 8}}>Опыт более 20 лет</h3>
                   <p className="font-manrope font-medium text-white/90" style={{fontSize: 20}}>Наша компания на рынке с 2005 года</p>
                 </div>
               </div>

               {/* Поддержка 24/7 */}
               <div className="relative rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden" style={{height: 200}}>
                 {/* Фоновое изображение с поворотом на 180 градусов */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center"
                   style={{
                     backgroundImage: "url('/images/карточка 4.jpg')",
                     transform: "rotate(180deg)"
                   }}
                 />
                 
                 {/* Контент */}
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{width: 50, height: 50, backgroundColor: '#ffffff', marginBottom: 10}}>
                     <img src={shield} alt="Щит" width={18} height={23} />
                   </div>
                   <h3 className="font-manrope font-semibold text-white" style={{fontSize: 24, marginBottom: 8}}>Поддержка 24/7</h3>
                   <p className="font-manrope font-medium text-white/90" style={{fontSize: 20}}>Мы всегда с Вами на связи</p>
                 </div>
               </div>

               {/* Быстрая подача */}
               <div className="relative rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden" style={{height: 200}}>
                 {/* Фоновое изображение */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center"
                   style={{
                     backgroundImage: "url('/images/карточка 4.jpg')"
                   }}
                 />
                 
                 {/* Контент */}
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                 <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{width: 50, height: 50, backgroundColor: '#ffffff', marginBottom: 10}}>
                   <img src={lightning} alt="Молния" width={24} height={25} />
                 </div>
                 <h3 className="font-manrope font-semibold text-white" style={{fontSize: 24, marginBottom: 8}}>Быстрая подача</h3>
                   <p className="font-manrope font-medium text-white/90" style={{fontSize: 20}}>По Москве и Московской области</p>
                 </div>
               </div>

               {/* Техобслуживание */}
               <div className="relative rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden" style={{height: 200}}>
                 {/* Фоновое изображение с отражением по вертикали */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center"
                   style={{
                     backgroundImage: "url('/images/карточка 2.jpg')",
                     transform: "scaleY(-1)"
                   }}
                 />
                 
                 {/* Контент */}
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{width: 50, height: 50, backgroundColor: '#ffffff', marginBottom: 10}}>
                     <img src={wrench} alt="Отвертка" width={22} height={21} />
                   </div>
                   <h3 className="font-manrope font-semibold text-white" style={{fontSize: 24, marginBottom: 8}}>Техобслуживание</h3>
                   <p className="font-manrope font-medium text-white/90" style={{fontSize: 20}}>Регулярная диагностика оборудования</p>
                 </div>
               </div>

               {/* Гибкие тарифы */}
               <div className="relative rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center overflow-hidden" style={{height: 200}}>
                 {/* Фоновое изображение с отражением по горизонтали */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center"
                   style={{
                     backgroundImage: "url('/images/карточка 4.jpg')",
                     transform: "scaleX(-1)"
                   }}
                 />
                 
                 {/* Контент */}
                 <div className="relative z-10 flex flex-col items-center justify-center text-center">
                   <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{width: 50, height: 50, backgroundColor: '#ffffff', marginBottom: 10}}>
                     <img src={chart} alt="График" width={24} height={15} />
                   </div>
                   <h3 className="font-manrope font-semibold text-white" style={{fontSize: 24, marginBottom: 8}}>Гибкие тарифы</h3>
                   <p className="font-manrope font-medium text-white/90" style={{fontSize: 20}}>Скидка постоянным клиентам</p>
                 </div>
               </div>
             </div>
           </div>
         </div>

       </div>
     </section>

     <section className="py-20">
       <div className="flex items-center justify-between mb-6">
         <h2 className="font-baron text-3xl">Недавние статьи</h2>
         <Link to="/articles" className="text-white/80 hover:text-white underline">Все статьи</Link>
       </div>
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {['Как выбрать автокран','Правила безопасности','ТО техники'].map((t,i)=> (
           <a key={i} href="/articles" className="glass rounded-2xl p-5 block hover:bg-white/15 transition-colors">
             <div className="font-semibold">{t}</div>
             <div className="text-white/75 text-sm mt-2">Краткое описание статьи...</div>
           </a>
         ))}
       </div>
     </section>

     {/* Футер */}
     <footer className="py-16">
       <div className="container mx-auto px-6">
         <div className="flex justify-between items-start mb-8">
           {/* Логотип и описание */}
           <div className="flex-1">
             <img src={stefanLogo} alt="СТЕФАН" style={{height: 50, marginBottom: 57}} />
             <p className="text-white/90 font-manrope text-lg leading-relaxed">
               Надежная аренда спецтехники в Москве и Московской<br/>
               области. Полный спектр подъемной техники<br/>
               для любых задач.
             </p>
           </div>
           
           {/* Контакты */}
           <div style={{marginRight: 24}}>
             <h3 className="font-baron font-bold text-white" style={{fontSize: 48, marginBottom: 66, lineHeight: 1}}>наши контакты</h3>
             <div className="space-y-4">
               <div className="flex items-center space-x-3">
                 <div className="w-6 h-6 flex items-center justify-center">
                   <svg className="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                 </div>
                 <span className="text-white font-manrope" style={{fontSize: 20}}>+7 (985) 767-15-00</span>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="w-6 h-6 flex items-center justify-center">
                   <svg className="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <span className="text-white font-manrope" style={{fontSize: 20}}>info@stefan-cranes.ru</span>
               </div>
             </div>
           </div>
         </div>
         
         {/* Разделительная линия */}
         <div className="border-t border-white/20 mb-6"></div>
         
         {/* Нижняя часть футера */}
         <div className="flex flex-col md:flex-row justify-between items-center">
           <p className="text-white/80 font-manrope mb-4 md:mb-0" style={{fontSize: 16}}>
             © 2025 ООО "СТЕФАН". Все права защищены.
           </p>
           <div className="flex" style={{gap: 48}}>
             <a href="#" className="text-white/80 hover:text-white font-manrope transition-colors" style={{fontSize: 16}}>
               Пользовательское соглашение
             </a>
             <a href="#" className="text-white/80 hover:text-white font-manrope transition-colors" style={{fontSize: 16}}>
               Политика конфиденциальности
             </a>
           </div>
         </div>
       </div>
     </footer>
   </div>
 )
}

export default HomePage
