import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa'

export default function Contact() {
  const links = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      url: "https://github.com/yourusername",
      description: "소스 코드 저장소"
    },
    {
      icon: <FaBlog className="w-6 h-6" />,
      title: "Blog",
      url: "https://your-blog.com",
      description: "개발 블로그"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      description: "프로필 및 이력"
    }
  ]

  return (
    <section className="py-20 bg-[#F8F8F8]" id="contact">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-[#000000]">
          <span className="text-[#CCCCCC]">#</span>
          CONTACT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFFFFF] p-6 hover:bg-[#F0F0F0] transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#666666]">{link.icon}</div>
                <h3 className="font-semibold text-[#333333]">{link.title}</h3>
              </div>
              <p className="text-[#666666] text-sm">{link.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#666666]">
            <span className="font-medium text-[#333333]">Email:</span>{" "}
            <a href="mailto:your.email@example.com" className="hover:text-[#000000] transition-colors">
              your.email@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
} 