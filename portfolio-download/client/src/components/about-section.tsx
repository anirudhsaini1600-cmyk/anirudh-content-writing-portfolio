export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4" data-testid="about-title">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Content writing workspace with laptop and notebooks" 
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="about-workspace-image"
            />
          </div>
          <div>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed" data-testid="about-description">
              Technical & Digital Content Writer with 2+ years' experience producing high-impact, ranking content across cloud, cybersecurity, and AI. I combine strategic thinking with creative execution to deliver content that not only engages readers but drives measurable business results.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-50 p-6 rounded-xl" data-testid="achievement-seo-blogs">
                <div className="text-3xl font-bold text-primary mb-2">60+</div>
                <p className="text-neutral-600">SEO blogs → 3x organic traffic → #1 Google Ranking</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl" data-testid="achievement-domain-authority">
                <div className="text-3xl font-bold text-secondary mb-2">40%</div>
                <p className="text-neutral-600">Boosted domain authority</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl" data-testid="achievement-conversions">
                <div className="text-3xl font-bold text-primary mb-2">18%</div>
                <p className="text-neutral-600">Improved conversions</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl" data-testid="achievement-engagement">
                <div className="text-3xl font-bold text-secondary mb-2">65%</div>
                <p className="text-neutral-600">Social engagement increase</p>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 font-semibold"
              data-testid="about-cta-work"
            >
              See My Work <i className="fas fa-arrow-down ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
