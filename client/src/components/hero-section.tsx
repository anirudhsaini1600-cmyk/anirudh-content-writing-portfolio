export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-white pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4" data-testid="hero-title">
              <span className="text-accent">HI, I'm</span> 
              <span className="gradient-text">Anirudh Saini</span>
            </h1>
            <p className="text-xl text-neutral-500 mb-6" data-testid="hero-tagline">Content Writer | Digital Marketer</p>
            <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0" data-testid="hero-value-prop">
              I deliver AI-smart, SEO-strong content that attracts readers, builds trust, and converts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 font-semibold"
                data-testid="hero-cta-start"
              >
                Start Together <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
                data-testid="hero-cta-work"
              >
                View My Work
              </button>
            </div>
          </div>
          <div className="flex justify-center animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Anirudh Saini - Professional Content Writer" 
              className="w-80 h-80 rounded-full object-cover shadow-2xl animate-bounce-gentle border-4 border-white"
              data-testid="hero-profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
