import { SEO } from '../components/ui/SEO';
import { ContactSection } from '../components/contact/ContactSection';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Start a conversation about building digital products, AI-powered experiences, and modern business solutions."
        path="/contact"
      />
      <ContactSection />
    </>
  );
}
