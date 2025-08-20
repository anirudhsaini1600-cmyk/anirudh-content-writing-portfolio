import { useState } from "react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'blogs',
      title: 'Co-Development Software',
      description: 'Comprehensive guide on co-development software strategies for digital transformation and business growth.',
      image: '/images/Co-development-Software_-A-Strategic-Guide-to-Innovation-and-Collaboration-1 (1)_1755699839679.jpg',
      badge: 'Blog Writing',
      badgeColor: 'bg-primary',
      link: 'https://buzzclan.com/digital-transformation/co-development-software/'
    },
    {
      id: 2,
      category: 'blogs',
      title: 'Data Analytics vs Data Science: Which One Powers Your Business Growth?',
      description: 'In-depth analysis comparing data analytics and data science to help businesses make informed decisions.',
      image: '/images/Data-Analytics-vs-Data-Science_-Which-One-Powers-Your-Business-Growth__1755699999270.jpg',
      badge: 'Technical Writing',
      badgeColor: 'bg-secondary',
      link: 'https://buzzclan.com/data-engineering/data-analytics-vs-data-science/'
    },
    {
      id: 3,
      category: 'blogs',
      title: 'Transform Your Enterprise with Adaptive Software Development',
      description: 'Strategic guide on implementing adaptive software development methodologies for enterprise transformation.',
      image: '/images/Transform-Your-Enterprise-with-Adaptive-Software-Development-1-1_1755699839678.jpg',
      badge: 'Blog Writing',
      badgeColor: 'bg-primary',
      link: 'https://buzzclan.com/digital-transformation/adaptive-software-development/'
    },
    {
      id: 4,
      category: 'blogs',
      title: 'Building an Effective Penetration Testing Program: Strategy Guide',
      description: 'Comprehensive strategy guide for building robust penetration testing programs for quality assurance.',
      image: '/images/Building-an-Effective-Penetration-Testing-Program-1_1755700047170.jpg',
      badge: 'Technical Writing',
      badgeColor: 'bg-secondary',
      link: 'https://buzzclan.com/quality-assurance/penetration-testing/'
    },
    {
      id: 5,
      category: 'blogs',
      title: 'A Complete Guide to Cloud Management: Strategies, Tools, & Best Practices',
      description: 'Complete guide covering cloud management strategies, essential tools, and industry best practices.',
      image: '/images/Cloud-Management-1_1755700327291.jpg',
      badge: 'Cloud Writing',
      badgeColor: 'bg-blue-500',
      link: 'https://buzzclan.com/cloud/cloud-management/'
    },
    {
      id: 6,
      category: 'guest-posts',
      title: 'Impact of AI and Cloud Computing on the Future of Finance',
      description: 'Published analysis on how AI and cloud computing are revolutionizing the financial industry.',
      image: '/images/Featured-Image-Impact-of-AI-and-Cloud-Computing-on-the-Future-of-Finance-666x418_1755700762359.jpg',
      badge: 'Guest Post',
      badgeColor: 'bg-red-500',
      link: 'https://www.noupe.com/magazine/business-online/impact-of-ai-and-cloud-computing-on-the-future-of-finance.html'
    },
    {
      id: 7,
      category: 'guest-posts',
      title: 'How Wix Contributes to the Business Growth in 2024',
      description: 'In-depth article on leveraging Wix platform for business growth and digital presence.',
      image: '/images/How-Wix-Contributes-to-the-Business-Growth-in-2024-696x392_1755700762360.jpg',
      badge: 'Guest Post',
      badgeColor: 'bg-red-500',
      link: 'https://learnwoo.com/how-wix-contributes-to-the-business-growth/'
    },
    {
      id: 8,
      category: 'guest-posts',
      title: 'Future of Digital Transformation in Banking',
      description: 'Forward-looking analysis of digital transformation trends and technologies in the banking sector.',
      image: '/images/image_1755700705465.png',
      badge: 'Guest Post',
      badgeColor: 'bg-red-500',
      link: 'https://thedatascientist.com/future-of-digital-transformation-in-banking/'
    },
    {
      id: 9,
      category: 'landing-pages',
      title: 'Ask Us Anything: Decoding What AI-Ready Means For Organizations',
      description: 'Interactive landing page content exploring AI readiness for modern organizations.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      badge: 'Landing Page',
      badgeColor: 'bg-orange-500',
      link: 'https://buzzclan.com/ask-us-anything/'
    },
    {
      id: 10,
      category: 'landing-pages',
      title: 'HIMSS Event Landing Page',
      description: 'Event-focused landing page content designed for healthcare information management conference.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      badge: 'Landing Page',
      badgeColor: 'bg-orange-500',
      link: 'https://buzzclan.com/event/himss/'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'guest-posts', label: 'Guest Posts' },
    { id: 'landing-pages', label: 'Landing Pages' }
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
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary font-semibold hover:text-blue-800 transition-colors"
                >
                  Read Project <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
