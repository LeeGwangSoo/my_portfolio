import { FaCode, FaLaptopCode, FaDatabase, FaTools } from 'react-icons/fa'

export default function Skills() {
  const skills = [
    {
      category: "Embedded",
      icon: <FaCode className="w-5 h-5" />,
      items: [
        "C/C++",
        "Python",
        "Linux",
        "RTOS",
        "ARM",
        "Arduino"
      ]
    },
    {
      category: "AI",
      icon: <FaLaptopCode className="w-5 h-5" />,
      items: [
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "Scikit-learn",
        "YOLO",
        "MLOps"
      ]
    },
    {
      category: "Tools",
      icon: <FaTools className="w-5 h-5" />,
      items: [
        "Git",
        "Docker",
        "Jira",
        "VS Code",
        "Jupyter",
        "AWS"
      ]
    },
    {
      category: "Communication",
      icon: <FaDatabase className="w-5 h-5" />,
      items: [
        "Korean",
        "English",
        "Documentation",
        "Presentation",
        "Teamwork",
        "Leadership"
      ]
    }
  ]

  return (
    <section className="py-20 bg-[#f9c51d]" id="skills">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-[#000000]">
          <span className="text-[#CCCCCC]">#</span>
          SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-none">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-[#666666]">{skillGroup.icon}</div>
                <h3 className="text-xl font-bold text-[#333333]">{skillGroup.category}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#666666] rounded-full"></span>
                    <span className="text-[15px] text-[#666666]">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 