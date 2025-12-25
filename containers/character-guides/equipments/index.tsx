import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import {
  weapons as weaponsData,
  armors as armorsData,
  accessories as accessoriesData,
} from "@/data/gear";
import { GearItem } from "@/components/GearItem";
import type { GearData } from "@/data/gear";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  gears: {
    weapons: string[];
    armors: string[];
    accessories: string[];
  };
  recommendedSources?: string[];
};

export const EquipmentSection = ({
  gears,
  recommendedSources = [],
}: Props) => {
  const [selectedSource, setSelectedSource] = useState("all");

  const gearMaps = useMemo(() => {
    const mapByName = <T extends { name: string }>(items: T[]) =>
      Object.fromEntries(items.map((i) => [i.name, i]));

    return {
      weapons: mapByName(weaponsData),
      armors: mapByName(armorsData),
      accessories: mapByName(accessoriesData),
    };
  }, []);

  const dropdownSources = useMemo(() => {
    if (recommendedSources.length) return recommendedSources;

    const sources = new Set<string>();

    [...gears.weapons, ...gears.armors, ...gears.accessories].forEach((name) => {
      const item =
        gearMaps.weapons[name] ??
        gearMaps.armors[name] ??
        gearMaps.accessories[name];

      if (Array.isArray(item?.source)) {
        item.source.forEach((s) => sources.add(s));
      }
    });

    return [...sources].sort();
  }, [gears, recommendedSources, gearMaps]);

  const matchesSource = (item?: GearData) => {
    if (selectedSource === "all") return true;
    if (!Array.isArray(item?.source)) return false;
    return item.source.includes("Other") || item.source.includes(selectedSource);
  };

  const filterGear = <T extends GearData>(
    names: string[],
    map: Record<string, T>
  ) =>
    names
      .map((n) => map[n])
      .filter((i): i is T => !!i && matchesSource(i));

  const filteredWeapons = useMemo(
    () => filterGear(gears.weapons, gearMaps.weapons),
    [gears.weapons, gearMaps, selectedSource]
  );

  const filteredArmors = useMemo(
    () => filterGear(gears.armors, gearMaps.armors),
    [gears.armors, gearMaps, selectedSource]
  );

  const filteredAccessories = useMemo(
    () => filterGear(gears.accessories, gearMaps.accessories),
    [gears.accessories, gearMaps, selectedSource]
  );

  const renderGearColumn = (
    title: string,
    items: GearData[],
    dialogTitle: string
  ) => (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-purple-300 text-center">{title}</h3>

      {items.length === 0 ? (
        <p className="text-center text-gray-400 py-8">
          No {title.toLowerCase()} match selected sources.
        </p>
      ) : (
        <>
          <GearItem {...items[0]} />

          {items.length > 1 && (
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex justify-center">
                  <button className="flex items-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all py-1 mt-2">
                    Show More <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0 overflow-hidden">
                <DialogHeader className="sticky top-0 bg-gray-900 border-b border-gray-800 px-6 py-4">
                  <DialogTitle className="text-xl sm:text-2xl text-center font-bold text-purple-300">
                    {dialogTitle}
                  </DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto px-6 pb-6 pt-4 scrollbar-none">
                  <div className="space-y-4">
                    {items.slice(1).map((gear) => (
                      <GearItem key={gear.name} {...gear} />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </>
      )}
    </div>
  );

  return (
    <section
      id="equipments"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-purple-400 text-center">
        2.1 Equipments
      </h2>

      <p className="text-muted-foreground mb-8 text-sm sm:text-base text-center max-w-3xl mx-auto">
        Only one unique item can be equipped per character.
        <br />
        <strong>
          Select a Chaos Manifestation to view its loot pool.
        </strong>
      </p>

      {/* Dropdown */}
      <div className="mb-12 flex flex-col items-center">
        <span className="text-purple-300 text-xl font-medium mb-2">
          Chaos Manifestation
        </span>

        <div className="relative w-56">
          <select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
            className="appearance-none w-full rounded-xl border border-border bg-card py-3 px-4 pr-10 text-center hover:border-purple-400"
          >
            <option value="all">Show All</option>
            {dropdownSources.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {renderGearColumn(
          "Weapon",
          filteredWeapons,
          "Alternative Weapon"
        )}
        {renderGearColumn(
          "Armor",
          filteredArmors,
          "Alternative Armor"
        )}
        {renderGearColumn(
          "Accessory",
          filteredAccessories,
          "Alternative Accessory"
        )}
      </div>
    </section>
  );
};
