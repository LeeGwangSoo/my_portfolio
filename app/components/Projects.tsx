import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "포트폴리오 웹사이트",
      period: "2024.03",
      description: "Next.js와 Tailwind CSS를 사용한 반응형 포트폴리오 웹사이트",
      details: [
        "모던한 UI/UX 디자인 적용",
        "반응형 레이아웃 구현",
        "성능 최적화 및 SEO 대응"
      ],
      image: "/project1.jpg",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
      links: {
        site: "https://your-portfolio.com",
        github: "https://github.com/yourusername/portfolio"
      }
    },
    {
      title: "실시간 채팅 애플리케이션",
      period: "2024.02",
      description: "WebSocket을 활용한 실시간 채팅 애플리케이션",
      details: [
        "실시간 양방향 통신 구현",
        "사용자 인증 및 권한 관리",
        "채팅방 생성 및 관리 기능"
      ],
      image: "/project2.jpg",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      links: {
        github: "https://github.com/yourusername/chat-app"
      }
    }
  ]

  return (
    <section className="py-20 bg-[#FFFFFF]" id="projects">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-[#000000]">
          <span className="text-[#CCCCCC]">#</span>
          PROJECTS
        </h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-[#F8F8F8] hover:bg-[#F0F0F0] transition-colors p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-xl font-bold text-[#000000]">{project.title}</h3>
                    <span className="text-sm text-[#999999]">{project.period}</span>
                  </div>
                  <p className="text-[#666666] mb-4">{project.description}</p>
                  <ul className="list-disc list-inside mb-4 text-[#666666]">
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#FFFFFF] text-[#666666] text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.site && (
                      <a
                        href={project.links.site}
                        className="text-[#666666] hover:text-[#000000] font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        사이트 방문 →
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="text-[#666666] hover:text-[#000000] font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 