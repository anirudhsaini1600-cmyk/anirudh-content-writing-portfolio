export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Core Writing Skills",
      skills: [
        { name: "Content Writing", color: "bg-primary hover:bg-blue-800" },
        { name: "SEO Writing", color: "bg-secondary hover:bg-green-700" },
        { name: "Creative Writing", color: "bg-purple-500 hover:bg-purple-600" },
        { name: "Technical Writing", color: "bg-orange-500 hover:bg-orange-600" }
      ]
    },
    {
      title: "Digital Marketing",
      skills: [
        { name: "SEO Strategy", color: "bg-blue-500 hover:bg-blue-600" },
        { name: "Social Media", color: "bg-pink-500 hover:bg-pink-600" },
        { name: "Email Marketing", color: "bg-green-500 hover:bg-green-600" },
        { name: "Analytics", color: "bg-red-500 hover:bg-red-600" }
      ]
    }
  ];

  const languages = [
    { name: "English (Fluent)", color: "bg-gray-600" },
    { name: "Spanish (Beginner)", color: "bg-gray-500" }
  ];

  const certifications = [
    "Google Digital Marketing",
    "Meta Social Media Marketing",
    "Business English (Coursera)"
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4" data-testid="skills-title">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600" data-testid="skills-subtitle">
            A comprehensive skill set built through years of hands-on experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Skills */}
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-2xl shadow-lg" data-testid={`skill-category-${categoryIndex}`}>
              <h3 className="text-xl font-bold text-accent mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`${skill.color} text-white px-4 py-2 rounded-full inline-block mr-2 mb-2 transition-colors cursor-pointer`}
                    data-testid={`skill-${categoryIndex}-${skillIndex}`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Languages & Certifications */}
          <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="languages-certifications">
            <h3 className="text-xl font-bold text-accent mb-6">Languages & Certs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-neutral-700">Languages</h4>
                {languages.map((language, index) => (
                  <div 
                    key={index}
                    className={`${language.color} text-white px-4 py-2 rounded-full inline-block mr-2 mb-2`}
                    data-testid={`language-${index}`}
                  >
                    {language.name}
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-neutral-700 mb-2">Certifications</h4>
                <div className="text-sm text-neutral-600 space-y-1">
                  {certifications.map((cert, index) => (
                    <div key={index} data-testid={`certification-${index}`}>• {cert}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
