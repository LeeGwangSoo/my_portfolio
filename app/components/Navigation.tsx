'use client'

export default function Navigation() {
  const menuItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // 네비게이션 바의 높이
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F8F8F8]/90 backdrop-blur-sm z-50 border-b border-[#EEEEEE]">
      <div className="w-full max-w-6xl mx-auto py-6 px-4">
        <ul className="flex justify-end gap-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-[#666666] hover:text-[#000000] transition-colors text-lg"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 