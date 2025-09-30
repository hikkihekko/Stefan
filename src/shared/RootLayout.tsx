import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import logo from '../icons/stefan.svg'

const NavBar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeAnchor, setActiveAnchor] = useState<string>('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Отслеживание активного якоря при скролле
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveAnchor('')
      return
    }

    const handleScroll = () => {
      const anchors = ['top', 'catalog', 'about', 'contacts']
      const scrollPosition = window.scrollY + 220 // учитываем offset навбара

      for (const anchor of anchors) {
        const element = document.getElementById(anchor)
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveAnchor(anchor)
            break
          }
        }
      }
    }

    // Проверяем сразу при загрузке
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // Закрываем мобильное меню
    if (location.pathname === '/') {
      // На главной странице - скроллим к якорю #top с отступом 220px
      const element = document.getElementById('top')
      if (element) {
        const elementPosition = element.offsetTop
        const offsetPosition = elementPosition - 220
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // На другой странице - переходим на главную к якорю
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById('top')
        if (element) {
          const elementPosition = element.offsetTop
          const offsetPosition = elementPosition - 220
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }

  const handleAnchorClick = (anchorId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // Закрываем мобильное меню
    if (location.pathname === '/') {
      // На главной странице - скроллим к якорю
      const element = document.getElementById(anchorId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // На другой странице - переходим на главную к якорю
      navigate(`/#${anchorId}`)
      setTimeout(() => {
        const element = document.getElementById(anchorId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <div className="fixed top-6 z-50" style={{left: '50%', transform: 'translateX(-50%)', width: '100%'}}>
      <div className="container mx-auto px-6">
        <nav
          className="glass flex items-center justify-between relative"
          style={{ width: '100%', height: 98, borderRadius: 24, padding: '24px 24px' }}
        >
          <img 
            src={logo} 
            alt="Стефан" 
            className="h-8 w-auto select-none cursor-pointer hover:opacity-80 transition-opacity" 
            draggable={false}
            onClick={handleHomeClick}
          />

          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="rounded-full bg-white text-slate-900 h-[50px] w-[550px] flex items-center justify-center px-4">
              <ul className="flex items-center justify-center gap-8 font-manrope text-[18px] leading-[12px] whitespace-nowrap">
                <li>
                  <a 
                    href="#" 
                    onClick={handleHomeClick}
                    className={`${(location.pathname === '/' && activeAnchor === 'top') || (location.pathname === '/' && activeAnchor === '') ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80 cursor-pointer`}
                  >
                    Главная
                  </a>
                </li>
                <li>
                  <a 
                    href="#catalog" 
                    onClick={handleAnchorClick('catalog')}
                    className={`${activeAnchor === 'catalog' ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80 cursor-pointer`}
                  >
                    Каталог
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={handleAnchorClick('about')}
                    className={`${activeAnchor === 'about' ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80 cursor-pointer`}
                  >
                    О компании
                  </a>
                </li>
                <li>
                  <NavLink to="/articles" className={({ isActive }) => `${isActive ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80` } > Статьи </NavLink>
                </li>
                <li>
                  <a 
                    href="#contacts" 
                    onClick={handleAnchorClick('contacts')}
                    className={`${activeAnchor === 'contacts' ? 'text-black font-medium' : 'text-[#3535B9] font-normal'} hover:opacity-80 cursor-pointer`}
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden xl:flex items-center gap-6">
            <a href="tel:+79857671500" className="text-white font-manrope font-medium hover:opacity-80 transition-opacity" style={{fontSize: 18}}>Позвоните нам! +7 (985) 767-15-00</a>
            <a href="https://wa.me/79857671500" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center bg-white rounded-full" style={{width:50,height:50}}>
              <img src={new URL('../icons/svg chat bubble.svg', import.meta.url).toString()} alt="Чат" width={18} height={18} />
            </a>
          </div>

          {/* Laptop Contact Info */}
          <div className="hidden md:flex xl:hidden items-center gap-4">
            <a href="https://wa.me/79857671500" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white rounded-full" style={{width:45,height:45}}>
              <img src={new URL('../icons/svg chat bubble.svg', import.meta.url).toString()} alt="Чат" width={16} height={16} />
            </a>
          </div>

          {/* Mobile Burger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center w-8 h-8 space-y-1"
              aria-label="Открыть меню"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl p-6">
            <ul className="flex flex-col space-y-4 font-manrope text-[18px]">
              <li>
                <NavLink 
                  to="/" 
                  className={({isActive}) => `${isActive ? 'text-white font-medium' : 'text-white/80 font-normal'} hover:text-white transition-colors`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <a 
                  href="#catalog" 
                  className="text-white/80 font-normal hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Каталог
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white/80 font-normal hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О компании
                </a>
              </li>
              <li>
                <NavLink 
                  to="/articles" 
                  className={({ isActive }) => `text-white/80 font-normal hover:text-white transition-colors ${isActive ? 'text-white font-medium' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Статьи
                </NavLink>
              </li>
              <li>
                <a 
                  href="#contacts" 
                  className="text-white/80 font-normal hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Контакты
                </a>
              </li>
              
              {/* Разделитель с номером телефона */}
              <li className="pt-4">
                <div className="flex items-center justify-center">
                  <div className="flex-1 h-px bg-white/20 mx-4"></div>
                </div>
                <div className="flex items-center justify-center mt-4 space-x-4">
                  <a 
                    href="tel:+79857671500" 
                    className="text-white font-manrope font-medium hover:text-white/80 transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    +7 (985) 767-15-00
                  </a>
                  <a 
                    href="https://wa.me/79857671500" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center bg-white rounded-full text-slate-900 font-medium hover:bg-white/90 transition-colors"
                    style={{width:50,height:50}}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <img src={new URL('../icons/svg chat bubble.svg', import.meta.url).toString()} alt="Чат" width={18} height={18} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-full font-manrope text-white">
      <NavBar />
      <main style={{paddingTop: '146px'}}>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout


