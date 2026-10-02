import { SEO } from '../components/ui/SEO';
import { SelectedProducts } from '../components/projects/SelectedProducts';
import { ProductThinking } from '../components/process/ProductThinking';
import { ContactSection } from '../components/contact/ContactSection';

export default function WorkPage() {
  return (
    <>
      <SEO
        title="Selected Products & Case Studies"
        description="Real products, SaaS platforms, AI assistants, and digital systems built from idea to implementation."
        path="/work"
      />
      <SelectedProducts />
      <ProductThinking />
      <ContactSection />
    </>
  );
}
