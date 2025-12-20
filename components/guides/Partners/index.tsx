import { useState } from "react";

import { PartnerDialog } from "./components/Partner";

export type Partner = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
};

const Partners = ({ partners }: { partners: Array<Partner> }) => {
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);

  const handleChange = (partnerId: number) => (open: boolean) => {
    setSelectedPartner(open ? partnerId : null);
  }

  return (
    <section
      id="partners"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-24"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-purple-400 text-center">
        5. Partners
      </h2>
      <p className="text-muted-foreground mb-6 text-xs sm:text-sm md:text-base text-center px-4">
        Click on any partner below to view detailed information about their
        synergy with Chizuru
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {partners.map((partner) => 
          <PartnerDialog
            key={partner.id}
            open={partner.id === selectedPartner}
            onChange={handleChange(partner.id)}
            {...partner}
          />
        )}
      </div>
    </section>
  );
};

export { Partners };
