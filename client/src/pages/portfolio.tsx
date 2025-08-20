import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  return (
    <div className="bg-white text-neutral-700 font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Anirudh Saini</h3>
            <p className="text-neutral-300 mb-6">Content Writer & Digital Marketer</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/in/anirudhs123" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="footer-linkedin">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="footer-instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="footer-medium">
                <i className="fab fa-medium-m text-xl"></i>
              </a>
            </div>
            <p className="text-neutral-400 text-sm">© 2024 Anirudh Saini. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
