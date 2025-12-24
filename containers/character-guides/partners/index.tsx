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
import { useState } from "react";
type Props = {
  partnersGuide: PartnersGuide[];
};
export const PartnersSection = (props: Props) => {
  const { partnersGuide } = props;
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  return (
    <section
      id="partners"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-24"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-purple-400 text-center">
        4. Partners
      </h2>
      <p className="text-muted-foreground mb-6 text-xs sm:text-sm md:text-base text-center px-4 whitespace-pre-line">
        Click on any partner below to view detailed information about their information.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {partnersGuide.map((partner) => {
          const partnerData = PartnersData.find((p) => p.id === partner.id);
          return (
            <div key={partner.id} className="flex flex-col items-center gap-3">
              {/* Tier Badge */}
              <TierTag tier={partner.tier} />

              <Dialog
                open={selectedPartner === partner.id}
                onOpenChange={(open) =>
                  setSelectedPartner(open ? partner.id : null)
                }
              >
                <DialogTrigger asChild>
                  <div className="relative aspect-[9/16] w-full max-w-[180px] rounded-lg overflow-hidden border-2 border-border hover:border-purple-400 bg-card transition-all duration-300 hover:scale-103 hover:shadow-lg hover:shadow-purple-400/20 cursor-pointer">
                    <img
                      src={partnerData?.image || "/placeholder.svg"}
                      alt={partner.id}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-8">
                      <p className="text-sm sm:text-base font-semibold text-white text-center drop-shadow-lg">
                        {partnerData?.name}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-xl sm:max-w-2xl w-[95vw] max-h-[85vh] overflow-y-auto bg-gray-900/95 border border-gray-800 p-4 sm:p-6 rounded-xl">
                  <DialogHeader className="text-center pb-4">
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                      {partnerData?.name}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-5">
                    <div className="flex justify-center">
                      <img
                        src={partnerData?.image || "/placeholder.svg"}
                        alt={partnerData?.name}
                        className="w-40 sm:w-48 h-auto rounded-lg border-4 border-purple-500/50 shadow-2xl"
                      />
                    </div>
                    <TierTag tier={partner.tier} />

                    <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700/60">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line text-center">
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
