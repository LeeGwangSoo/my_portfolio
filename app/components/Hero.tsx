'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="h-[65vh] flex flex-col bg-[#F8F8F8] px-4 relative pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ai-background.jpg"
          alt="Embedded AI Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#000000]">
            - [이광수] -
          </h1>
          <h2 className="text-lg md:text-xl text-[#666666] mb-6 text-center">
            Embeded AI 개발자 포트폴리오
          </h2>
          <div className="w-full max-w-2xl text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#000000]">안녕하세요.</h3>
            <p className="text-lg text-[#666666] leading-relaxed">
              본질에 집중하는 Embeded AI<br />
              [이광수]입니다.
            </p>
          </div>
          <button 
            className="px-6 py-2 bg-[#000000] text-white rounded-[30px] hover:bg-[#333333] transition-colors text-sm"
            onClick={() => scrollToSection('about')}
          >
            더 알아보기 ↓
          </button>
        </div>
      </div>
    </section>
  )
} 