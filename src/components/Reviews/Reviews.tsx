import React, { useState, useEffect } from 'react'

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  text: string
  date: string
  avitoUrl: string
}

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Реальные отзывы клиентов
  const reviews: Review[] = [
    {
      id: 1,
      name: "Владимир",
      avatar: "",
      rating: 5,
      text: "Отличная работа, проблем не создали, всё сделали прекрасно! Будем сотрудничать и даже рекомендовать друзьям. Серьёзно, очень хорошие ребята. Есть, с чем сравнить. Кран прибыл даже раньше оговоренного времени, разместился, всё профессионально поднял в не самых простых условиях. Нравится мне работать с профи.",
      date: "26 сентября 2025",
      avitoUrl: "https://www.avito.ru/brands/cac7b7099f863b5718785462c9660624/all"
    },
    {
      id: 2,
      name: "Андрей",
      avatar: "",
      rating: 5,
      text: "Быстро доставили кран на объект, крановщик сработал отлично. Спасибо 🤝",
      date: "8 сентября 2025",
      avitoUrl: "https://www.avito.ru/brands/cac7b7099f863b5718785462c9660624/all"
    },
    {
      id: 3,
      name: "Виктор",
      avatar: "",
      rating: 5,
      text: "Все прошло хорошо, отдельное спасибо водителю, знает своё дело. Будем продолжать работать",
      date: "23 сентября 2025",
      avitoUrl: "https://www.avito.ru/brands/cac7b7099f863b5718785462c9660624/all"
    },
    {
      id: 4,
      name: "Екатерина",
      avatar: "",
      rating: 5,
      text: "Хочу выразить благодарность Степану за быстрый подбор техники, работа была выполнена как нужно 🔥👍",
      date: "24 сентября 2025",
      avitoUrl: "https://www.avito.ru/brands/cac7b7099f863b5718785462c9660624/all"
    },
    {
      id: 5,
      name: "Василий",
      avatar: "",
      rating: 5,
      text: "Исполнено всё быстро и качественно советую",
      date: "25 сентября 2025",
      avitoUrl: "https://www.avito.ru/brands/cac7b7099f863b5718785462c9660624/all"
    },
    {
      id: 6,
      name: "Ольга",
      avatar: "",
      rating: 5,
      text: "Цену посчитали, оперативно технику поставили. Все отлично.",
      date: "27 сентября 2025",
      avitoUrl: "https://www.avito.ru/brands/cac7b7099f863b5718785462c9660624/all"
    },
    {
      id: 7,
      name: "TR",
      avatar: "",
      rating: 5,
      text: "Написал по поводу аренды автокрана в субботу, мне сразу ответили, согласовали дату и время. Техника приехала вовремя, машинист был грамотным 👍",
      date: "22 сентября 2025",
      avitoUrl: "https://www.avito.ru/brands/cac7b7099f863b5718785462c9660624/all"
    },
    {
      id: 8,
      name: "Ирина",
      avatar: "",
      rating: 5,
      text: "Брали экскаватор для траншеи под кабель. Приехали в срок, на КПП оформились без проблем, оператор работал аккуратно — грунт сложили рядом, как договаривались. Стоимость и минималка заранее обозначены, без сюрпризов. Рекомендую. Прошло всё супер!",
      date: "22 сентября 2025",
      avitoUrl: "https://www.avito.ru/brands/cac7b7099f863b5718785462c9660624/all"
    }
  ]

  // Автопрокрутка карусели
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 8000) // Смена каждые 8 секунд

    return () => clearInterval(interval)
  }, [reviews.length])

  const handleReviewClick = (avitoUrl: string) => {
    window.open(avitoUrl, '_blank')
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-6 h-6 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ 
          transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 24}px))`,
          gap: '24px'
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-full flex-shrink-0"
          >
            <div
              className="rounded-2xl p-8 cursor-pointer h-64 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(173, 184, 255, 0.15) 0%, rgba(173, 184, 255, 0.25) 100%)',
                border: '1px solid #ADB8FF'
              }}
              onClick={() => handleReviewClick(review.avitoUrl)}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-manrope font-semibold text-gray-900" style={{fontSize: '20px'}}>
                    {review.name}
                  </h4>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 font-manrope leading-relaxed mb-4" style={{fontSize: '18px'}}>
                  {review.text}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-manrope" style={{fontSize: '18px'}}>
                  {review.date}
                </span>
                <span className="text-blue-600 font-manrope hover:text-blue-800 transition-colors" style={{fontSize: '18px'}}>
                  Читать на Авито →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Индикаторы */}
      <div className="flex justify-center space-x-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Reviews
