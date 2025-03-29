import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap } from 'react-icons/fa'

export default function About() {
  const personalInfo = [
    { icon: <FaUser className="w-5 h-5" />, label: "이름", value: "이광수" },
    { icon: <FaBirthdayCake className="w-5 h-5" />, label: "생년월일", value: "[생년월일]" },
    { icon: <FaMapMarkerAlt className="w-5 h-5" />, label: "위치", value: "경남 창원" },
    { icon: <FaPhone className="w-5 h-5" />, label: "연락처", value: "[전화번호]" },
    { icon: <FaEnvelope className="w-5 h-5" />, label: "이메일", value: "arolinx@gmail.com" },
    { icon: <FaGraduationCap className="w-5 h-5" />, label: "학력", value: "[학교] ([전공])" }
  ]

  return (
    <section className="pt-24 pb-12 bg-[#FFFFFF]" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-[#000000]">
          <span className="text-[#CCCCCC]">#</span>
          ABOUT ME
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personalInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-[#F8F8F8] hover:bg-[#F0F0F0] transition-colors">
              <div className="text-[#666666]">
                {info.icon}
              </div>
              <div>
                <p className="text-sm text-[#999999]">{info.label}</p>
                <p className="font-medium text-[#333333]">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 