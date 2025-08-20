import { useState } from "react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'blogs',
      title: 'AI-Powered Content Strategy: A Complete Guide',
      description: 'Comprehensive guide on leveraging AI for content marketing that increased client engagement by 45%.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      badge: 'Blog Writing',
      badgeColor: 'bg-primary'
    },
    {
      id: 2,
      category: 'blogs',
      title: 'Cloud Migration Best Practices',
      description: 'In-depth technical article that ranked #1 for "cloud migration strategy" and generated 200+ qualified leads.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      badge: 'Technical Writing',
      badgeColor: 'bg-secondary'
    },
    {
      id: 3,
      category: 'guest-posts',
      title: 'Cyber Defense Magazine Article',
      description: 'Published piece on cybersecurity trends that drove 50+ high-quality backlinks and industry recognition.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      badge: 'Guest Post',
      badgeColor: 'bg-red-500'
    },
    {
      id: 4,
      category: 'newsletters',
      title: 'Tech Trends Weekly Newsletter',
      description: 'Weekly newsletter series that achieved 35% open rate and 8% click-through rate for B2B SaaS client.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      badge: 'Newsletter',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 5,
      category: 'newsletters',
      title: 'High-Converting Landing Page',
      description: 'Conversion-optimized landing page copy that increased sign-ups by 25% for fintech startup.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      badge: 'Landing Page',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 6,
      category: 'blogs',
      title: 'Complete SEO Guide 2024',
      description: 'Comprehensive SEO guide that ranks on page 1 for multiple high-volume keywords and drives consistent organic traffic.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      badge: 'SEO Article',
      badgeColor: 'bg-green-500'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'guest-posts', label: 'Guest Posts' },
    { id: 'newsletters', label: 'Newsletters' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4" data-testid="portfolio-title">Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600" data-testid="portfolio-subtitle">
            High-impact content samples that showcase results-driven writing
          </p>
        </div>
        
        {/* Portfolio Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-primary hover:text-white'
              }`}
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-neutral-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`portfolio-item-${item.id}`}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className={`${item.badgeColor} text-white text-xs px-3 py-1 rounded-full`}>
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-accent mt-4 mb-3">{item.title}</h3>
                <p className="text-neutral-600 mb-4">{item.description}</p>
                <button className="inline-flex items-center text-primary font-semibold hover:text-blue-800 transition-colors">
                  Read Project <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
