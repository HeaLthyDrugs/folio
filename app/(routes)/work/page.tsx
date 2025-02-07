import { WorkGrid } from "./_components/WorkGrid";

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Work</h1>
      <p className="text-muted-foreground mb-8">
        Here you&apos;ll find my selected works and projects.
      </p>
      <WorkGrid />
    </div>
  );
} 