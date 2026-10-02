import { SEO } from '../components/ui/SEO';
import { AIProductLab } from '../components/ai-lab/AIProductLab';
import { HowIBuild } from '../components/process/HowIBuild';
import { ContactSection } from '../components/contact/ContactSection';

export default function AILabPage() {
  return (
    <>
      <SEO
        title="AI Product Lab"
        description="Interactive AI product experiments exploring natural language reservations, voice interfaces, analytics, and workflow automation."
        path="/ai-lab"
      />
      <AIProductLab />
      <HowIBuild />
      <ContactSection />
    </>
  );
}
