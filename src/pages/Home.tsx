import { SEO } from '../components/ui/SEO';
import { Hero } from '../components/hero/Hero';
import { Introduction } from '../components/hero/Introduction';
import { SelectedProducts } from '../components/projects/SelectedProducts';
import { AIProductLab } from '../components/ai-lab/AIProductLab';
import { HowIBuild } from '../components/process/HowIBuild';
import { ProductThinking } from '../components/process/ProductThinking';
import { TechnologySection } from '../components/technology/TechnologySection';
import { AboutSection } from '../components/about/AboutSection';
import { ContactSection } from '../components/contact/ContactSection';

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        description="I build modern digital products, AI-powered experiences, SaaS platforms, and business solutions."
      />
      <Hero />
      <Introduction />
      <SelectedProducts />
      <AIProductLab />
      <HowIBuild />
      <ProductThinking />
      <TechnologySection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
