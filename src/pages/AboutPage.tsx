import { SEO } from '../components/ui/SEO';
import { AboutSection } from '../components/about/AboutSection';
import { TechnologySection } from '../components/technology/TechnologySection';
import { HowIBuild } from '../components/process/HowIBuild';
import { ContactSection } from '../components/contact/ContactSection';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="AI Product Builder combining software development, product design, applied AI, and real-world hospitality experience."
        path="/about"
      />
      <AboutSection />
      <TechnologySection />
      <HowIBuild />
      <ContactSection />
    </>
  );
}
