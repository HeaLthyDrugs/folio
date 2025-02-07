import { ContactForm } from "./_components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-muted-foreground mb-8">
        Get in touch with me for collaborations and opportunities.
      </p>
      <ContactForm />
    </div>
  );
} 