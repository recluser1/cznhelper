import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getTierColor } from "@/app/guides/common/helpers";

const PartnerDialog = ({
  open,
  onChange,
  role,
  name,
  image,
  description,
}: {
  open: boolean;
  onChange: (open: boolean) => void;
  role: string;
  name: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Tier Badge */}
      <span
        className={`px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-bold ${getTierColor(
          role
        )}`}
      >
        {role} Tier
      </span>

      <Dialog open={open} onOpenChange={onChange}>
        <DialogTrigger asChild>
          <div className="relative aspect-[9/16] w-full max-w-[180px] rounded-lg overflow-hidden border-2 border-border hover:border-purple-400 bg-card transition-all duration-300 hover:scale-103 hover:shadow-lg hover:shadow-purple-400/20 cursor-pointer">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-8">
              <p className="text-sm sm:text-base font-semibold text-white text-center drop-shadow-lg">
                {name}
              </p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-xl sm:max-w-2xl w-[95vw] max-h-[85vh] overflow-y-auto bg-gray-900/95 border border-gray-800 p-4 sm:p-6 rounded-xl">
          <DialogHeader className="text-center pb-4">
            <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
              {name}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5">
            <div className="flex justify-center">
              <img
                src={image || "/placeholder.svg"}
                alt={name}
                className="w-40 sm:w-48 h-auto rounded-lg border-4 border-purple-500/50 shadow-2xl"
              />
            </div>

            <div className="text-center">
              <span
                className={`inline-block px-4 py-2 rounded-full text-base sm:text-lg font-bold ${getTierColor(
                  role
                )}`}
              >
                {role} Tier
              </span>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700/60">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line text-center">
                {description}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export { PartnerDialog };
