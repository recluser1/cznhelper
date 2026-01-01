// app/calculator/layout.tsx
import ScrollToTop from "@/components/ScrollToTop";
import { Banner } from "@/components/Banner";

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <main className="flex-1 relative">
        {" "}
        {/* Add relative here if needed */}
        <Banner title="Run Tracker" />
        {/* This container now sits ON TOP of the banner */}
        <div className="container mx-auto px-4 py-8 relative z-10 -mt-12 md:-mt-72">
          {/* Optional: add background to prevent transparency issues */}
          <div className="pt-8 bg-transparent">{children}</div>
        </div>
      </main>
    </div>
  );
}
