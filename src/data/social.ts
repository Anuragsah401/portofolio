export interface SocialProfile {
  name: string;
  label: string;
  href: string;
  handle: string;
}

export const socialData = {
  name: 'Anurag Sah',
  role: 'AI Product Builder · Developer',
  email: 'anuragsah401@gmail.com',
  githubUrl: 'https://github.com/anuragsah401',
  githubHandle: '@anuragsah401',
  linkedinUrl: 'https://www.linkedin.com/in/anuragsah401',
  location: 'Building Digital Products & AI Systems',
  profiles: [
    {
      name: 'GitHub',
      label: 'Source & Architecture',
      href: 'https://github.com/anuragsah401',
      handle: 'github.com/anuragsah401',
    },
    {
      name: 'LinkedIn',
      label: 'Professional Network',
      href: 'https://www.linkedin.com/in/anuragsah401',
      handle: 'linkedin.com/in/anuragsah401',
    },
    {
      name: 'Email',
      label: 'Direct Inquiry',
      href: 'mailto:anuragsah401@gmail.com',
      handle: 'anuragsah401@gmail.com',
    },
  ] as SocialProfile[],
};
