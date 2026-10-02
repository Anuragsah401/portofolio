import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Mail, Send } from 'lucide-react';
import { socialData } from '../../data/social';
import { SectionHeader } from '../ui/SectionHeader';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [deliveryMode, setDeliveryMode] = useState<'endpoint' | 'mailto'>('mailto');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitState('submitting');
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    try {
      if (endpoint) {
        setDeliveryMode('endpoint');
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Endpoint returned non-200');
        }
        setSubmitState('success');
        reset();
      } else {
        // Honest client-side mailto preparation when no backend endpoint is configured
        setDeliveryMode('mailto');
        await new Promise((resolve) => setTimeout(resolve, 400));
        const subject = encodeURIComponent(`Product Inquiry from ${data.name}`);
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
        );
        window.location.href = `mailto:${socialData.email}?subject=${subject}&body=${body}`;
        setSubmitState('success');
      }
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headline & Direct Channels */}
          <div className="lg:col-span-6">
            <SectionHeader
              index="08"
              eyebrow="Contact"
              title="Have an idea worth building?"
              subtitle="I'm interested in building useful digital products, AI-powered experiences, and modern business solutions."
            />

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${socialData.email}`}
                className="group inline-flex items-center gap-3 rounded-sm bg-text-primary px-6 py-3.5 text-sm font-semibold text-bg-primary transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                <span>Start a conversation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="pt-6">
                <div className="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted">
                  Direct Channels
                </div>
                <div className="divide-y divide-border-subtle border-y border-border-subtle">
                  {socialData.profiles.map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.href}
                      target={profile.href.startsWith('http') ? '_blank' : undefined}
                      rel={profile.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center justify-between py-3.5 transition-colors hover:text-accent"
                    >
                      <div>
                        <span className="text-sm font-semibold text-text-primary group-hover:text-accent">
                          {profile.name}
                        </span>
                        <span className="ml-3 font-mono text-xs text-text-muted">
                          {profile.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-text-secondary">
                        <span>{profile.handle}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: React Hook Form */}
          <div className="lg:col-span-6">
            <div className="rounded-md border border-border-strong bg-bg-elevated p-6 shadow-surface sm:p-8">
              <div className="mb-6 border-b border-border-subtle pb-4">
                <h3 className="text-lg font-semibold text-text-primary">
                  Send a direct message
                </h3>
                <p className="mt-1 text-xs text-text-secondary">
                  Outline the product idea, problem, or system you want to build.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-text-secondary"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    {...register('name', {
                      required: 'Please enter your name.',
                      minLength: { value: 2, message: 'Name must be at least 2 characters.' },
                    })}
                    className="mt-2 w-full rounded-sm border border-border-strong bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1.5 font-mono text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-text-secondary"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@company.com"
                    {...register('email', {
                      required: 'Please enter your email address.',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address.',
                      },
                    })}
                    className="mt-2 w-full rounded-sm border border-border-strong bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 font-mono text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-text-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about the product, problem, or timeline..."
                    {...register('message', {
                      required: 'Please share a brief message.',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters.',
                      },
                    })}
                    className="mt-2 w-full resize-y rounded-sm border border-border-strong bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 font-mono text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-bg-primary transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {submitState === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Preparing message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Start a conversation</span>
                    </>
                  )}
                </button>

                {/* Status Feedback */}
                {submitState === 'success' && (
                  <div
                    role="status"
                    className="flex items-start gap-2.5 rounded-sm border border-accent-border bg-accent-soft p-3.5 text-xs text-text-primary"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      {deliveryMode === 'endpoint' ? (
                        <span>Your message has been delivered. Thank you for reaching out.</span>
                      ) : (
                        <span>
                          Your email client has been opened with your message pre-filled to{' '}
                          <strong className="font-mono">{socialData.email}</strong>.
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {submitState === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-sm border border-red-500/40 bg-red-500/10 p-3.5 text-xs text-red-300"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      Unable to submit automatically. Please email{' '}
                      <a href={`mailto:${socialData.email}`} className="underline">
                        {socialData.email}
                      </a>{' '}
                      directly.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
