export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-edit",
      title: "Blog Writing",
      description: "SEO-rich blogs that rank & attract leads with strategic keyword placement and engaging storytelling.",
      color: "text-primary"
    },
    {
      icon: "fas fa-search-plus",
      title: "SEO Articles",
      description: "Optimized long-form articles that boost authority and establish your brand as an industry leader.",
      color: "text-secondary"
    },
    {
      icon: "fas fa-bullhorn",
      title: "Social Media Copy",
      description: "Engaging posts designed for clicks & shares that build community and drive traffic.",
      color: "text-primary"
    },
    {
      icon: "fas fa-paper-plane",
      title: "Newsletters & Landing Pages",
      description: "Persuasive content that drives conversions and nurtures your audience through every stage.",
      color: "text-secondary"
    },
    {
      icon: "fas fa-magic",
      title: "Creative Copywriting",
      description: "Brand storytelling with impact that connects emotionally and drives action.",
      color: "text-primary"
    },
    {
      icon: "fas fa-rocket",
      title: "Content Strategy",
      description: "Data-driven content planning that aligns with your business goals and audience needs.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4" data-testid="services-title">Services Offered</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto" data-testid="services-subtitle">
            Strategic content solutions that drive traffic, engagement, and conversions for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`service-${index}`}
            >
              <div className={`text-4xl ${service.color} mb-4`}>
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
