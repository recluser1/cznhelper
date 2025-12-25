import { TierTag } from "@/components/common/TierTag";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PartnersData } from "@/data/partners";
import { PartnersGuide } from "@/types/character-guides";
import { useMemo, useState } from "react";

type Props = {
  partnersGuide: PartnersGuide[];
};

export const PartnersSection = ({ partnersGuide }: Props) => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  const partnersMap = useMemo(
    () => Object.fromEntries(PartnersData.map(p => [p.id, p])),
    []
  );

  return (
    <section
      id="partners"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-24"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-purple-400 text-center">
        4. Partners
      </h2>

      <p className="text-muted-foreground mb-6 text-xs sm:text-sm md:text-base text-center px-4">
        Click on any partner below to view detailed information.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {partnersGuide.map((partner) => {
          const partnerData = partnersMap[partner.id];

          if (!partnerData) return null;

          return (
            <div key={partner.id} className="flex flex-col items-center gap-3">
              <TierTag tier={partner.tier} />

              <Dialog
                open={selectedPartner === partner.id}
                onOpenChange={(open) =>
                  setSelectedPartner(open ? partner.id : null)
                }
              >
                <DialogTrigger asChild>
                  <div className="relative aspect-[9/16] w-full max-w-[180px] rounded-lg overflow-hidden border-2 border-border bg-card cursor-pointer transition-all duration-300 hover:border-purple-400 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
                    <img
                      src={partnerData.image}
                      alt={partnerData.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-8">
                      <p className="text-sm sm:text-base font-semibold text-white text-center">
                        {partnerData.name}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-xl sm:max-w-2xl w-[95vw] max-h-[85vh] overflow-y-auto bg-gray-900/95 border border-gray-800 p-4 sm:p-6 rounded-xl">
                  <DialogHeader className="text-center pb-4">
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                      {partnerData.name}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-5">
                    <div className="flex justify-center">
                      <img
                        src={partnerData.image}
                        alt={partnerData.name}
                        className="w-40 sm:w-48 rounded-lg border-4 border-purple-500/50 shadow-2xl"
                      />
                    </div>

                    <TierTag tier={partner.tier} />

                    <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700/60">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center whitespace-pre-line">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    </section>
  );
};
