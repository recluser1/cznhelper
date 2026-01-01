"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  X,
  Undo,
  RotateCcw,
  Plus,
  HelpCircle,
  ChevronsUpDown,
  Check,
} from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type CardEntry = { name: string; image?: string };

const CHARACTER_CARDS: Record<
  string,
  { portrait?: string; starter: CardEntry[]; unique: CardEntry[] }
> = {
  rei: {
    portrait: "images/characters/reiportrait.webp",
    starter: [
      { name: "Dark Blade", image: "/images/character/rei/starter1.png" },
      { name: "Dark Blade", image: "/images/character/rei/starter2.png" },
      {
        name: "Material Regeneration",
        image: "/images/character/rei/starter3.png",
      },
      {
        name: "Strike of Darkness",
        image: "/images/character/rei/starter4.png",
      },
    ],
    unique: [
      {
        name: "Resonating Darkness",
        image: "/images/character/rei/unique1.png",
      },
      { name: "Snack Time", image: "/images/character/rei/unique2.png" },
      { name: "Dark Condensation", image: "/images/character/rei/unique3.png" },
      { name: "Predator’s Blade", image: "/images/character/rei/unique4.png" },
    ],
  },
  owen: {
    portrait: "images/characters/owenportrait.webp",
    starter: [
      { name: "Downward Cut", image: "/images/character/owen/starter1.png" },
      { name: "Downward Cut", image: "/images/character/owen/starter2.png" },
      { name: "Weapon Block", image: "/images/character/owen/starter3.png" },
      { name: "Wind Charge", image: "/images/character/owen/starter4.png" },
    ],
    unique: [
      { name: "Wind Slash", image: "/images/character/owen/unique1.png" },
      { name: "Break Armor", image: "/images/character/owen/unique2.png" },
      { name: "Wind Riding", image: "/images/character/owen/unique3.png" },
      { name: "Gale Strike", image: "/images/character/owen/unique4.png" },
    ],
  },
  cassius: {
    portrait: "images/characters/cassiusportrait.webp",
    starter: [
      { name: "Cards", image: "/images/character/cassius/starter1.png" },
      { name: "Wild Card", image: "/images/character/cassius/starter2.png" },
      { name: "Mana Field", image: "/images/character/cassius/starter3.png" },
      {
        name: "Pop Eyed Popper",
        image: "/images/character/cassius/starter4.png",
      },
    ],
    unique: [
      { name: "Devil Dice", image: "/images/character/cassius/unique1.png" },
      { name: "Shuffle", image: "/images/character/cassius/unique2.png" },
      { name: "Dice Trick", image: "/images/character/cassius/unique3.png" },
      { name: "Joker", image: "/images/character/cassius/unique4.png" },
    ],
  },
  beryl: {
    portrait: "/images/characters/berylportrait.webp",
    starter: [
      { name: "Launcher", image: "/images/character/beryl/starter1.png" },
      {
        name: "Charged Launcher",
        image: "/images/character/beryl/starter2.png",
      },
      { name: "Barrier", image: "/images/character/beryl/starter3.png" },
      { name: "Opening Found", image: "/images/character/beryl/starter4.png" },
    ],
    unique: [
      { name: "Charged Shot", image: "/images/character/beryl/unique1.png" },
      { name: "Guilty Pleasure", image: "/images/character/beryl/unique2.png" },
      {
        name: "Unlimited Firepower",
        image: "/images/character/beryl/unique3.png",
      },
      {
        name: "Heavy Weapon Specialist",
        image: "/images/character/beryl/unique4.png",
      },
    ],
  },
  mika: {
    portrait: "images/characters/mikaportrait.webp",
    starter: [
      { name: "Water Arrow", image: "/images/character/mika/starter1.png" },
      { name: "Water Barrier", image: "/images/character/mika/starter2.png" },
      { name: "Water Barrier", image: "/images/character/mika/starter3.png" },
      { name: "Source of Water", image: "/images/character/mika/starter4.png" },
    ],
    unique: [
      {
        name: "Blessing of Waves",
        image: "/images/character/mika/unique1.png",
      },
      {
        name: "Tactical Analysis",
        image: "/images/character/mika/unique2.png",
      },
      { name: "Whirpool", image: "/images/character/mika/unique3.png" },
      { name: "Deluge", image: "/images/character/mika/unique4.png" },
    ],
  },
  maribell: {
    portrait: "images/characters/maribellportrait.webp",
    starter: [
      {
        name: "Shelter Kick",
        image: "/images/character/maribell/starter1.png",
      },
      {
        name: "Shelter Defense",
        image: "/images/character/maribell/starter2.png",
      },
      {
        name: "Shelter Hold",
        image: "/images/character/maribell/starter3.png",
      },
      {
        name: "Resolute Blitz",
        image: "/images/character/maribell/starter4.png",
      },
    ],
    unique: [
      {
        name: "Maribell Shelter MK.II",
        image: "/images/character/maribell/unique1.png",
      },
      { name: "Wolve’s Dome", image: "/images/character/maribell/unique2.png" },
      { name: "Oh... I See.", image: "/images/character/maribell/unique3.png" },
      {
        name: "Shelter Strike",
        image: "/images/character/maribell/unique4.png",
      },
    ],
  },
  lucas: {
    portrait: "images/characters/lucasportrait.webp",
    starter: [
      { name: "Machine Gun", image: "/images/character/lucas/starter1.png" },
      { name: "Machine Gun", image: "/images/character/lucas/starter2.png" },
      {
        name: "Shielding Incendiary Bomb",
        image: "/images/character/lucas/starter3.png",
      },
      {
        name: "Extended Magazine",
        image: "/images/character/lucas/starter4.png",
      },
    ],
    unique: [
      { name: "S.S.S", image: "/images/character/lucas/unique1.png" },
      { name: "Flame Thrower", image: "/images/character/lucas/unique2.png" },
      { name: "Flashbang", image: "/images/character/lucas/unique3.png" },
      { name: "R.P.G-7", image: "/images/character/lucas/unique4.png" },
    ],
  },
  amir: {
    portrait: "/images/characters/amirportrait.webp",
    starter: [
      { name: "Rapier", image: "/images/character/amir/starter1.png" },
      { name: "Rapier", image: "/images/character/amir/starter2.png" },
      { name: "Steel Barrier", image: "/images/character/amir/starter3.png" },
      { name: "Hovering Metal", image: "/images/character/amir/starter4.png" },
    ],
    unique: [
      { name: "Metal Pierce", image: "/images/character/amir/unique1.png" },
      { name: "Metal Extraction", image: "/images/character/amir/unique2.png" },
      {
        name: "Full Metal Hurricane",
        image: "/images/character/amir/unique3.png",
      },
      { name: "Iron Skin", image: "/images/character/amir/unique4.png" },
    ],
  },
  tressa: {
    portrait: "/images/characters/tressaportrait.webp",
    starter: [
      { name: "Dagger Throw", image: "/images/character/tressa/starter1.png" },
      { name: "Dagger Throw", image: "/images/character/tressa/starter2.png" },
      {
        name: "Touch of Darkness",
        image: "/images/character/tressa/starter3.png",
      },
      {
        name: "Unseathe Dagger",
        image: "/images/character/tressa/starter4.png",
      },
    ],
    unique: [
      { name: "Curse", image: "/images/character/tressa/unique1.png" },
      { name: "Shadow Reload", image: "/images/character/tressa/unique2.png" },
      { name: "Vital Attack", image: "/images/character/tressa/unique3.png" },
      { name: "Cursed Gouge", image: "/images/character/tressa/unique4.png" },
    ],
  },
  selena: {
    portrait: "/images/characters/selenaportrait.webp",
    starter: [
      {
        name: "Engagament Fire",
        image: "/images/character/selena/starter1.png",
      },
      {
        name: "Engagament Fire",
        image: "/images/character/selena/starter2.png",
      },
      {
        name: "Emergency Shielding",
        image: "/images/character/selena/starter3.png",
      },
      {
        name: "High-Power Scope",
        image: "/images/character/selena/starter4.png",
      },
    ],
    unique: [
      { name: "Target Spotted", image: "/images/character/selena/unique1.png" },
      { name: "Drone Bombing", image: "/images/character/selena/unique2.png" },
      {
        name: "Tactical Maneuver",
        image: "/images/character/selena/unique3.png",
      },
      {
        name: "Sniper’s Domain",
        image: "/images/character/selena/unique4.png",
      },
    ],
  },
  nia: {
    portrait: "/images/characters/niaportrait.webp",
    starter: [
      { name: "Stroke", image: "/images/character/nia/starter1.png" },
      { name: "AMP Therapy", image: "/images/character/nia/starter2.png" },
      { name: "AMP Therapy", image: "/images/character/nia/starter3.png" },
      { name: "G Chord", image: "/images/character/nia/starter4.png" },
    ],
    unique: [
      { name: "Mute Accent", image: "/images/character/nia/unique1.png" },
      { name: "Soul Rip", image: "/images/character/nia/unique2.png" },
      { name: "Adagio", image: "/images/character/nia/unique3.png" },
      { name: "Nia’s Curiosity", image: "/images/character/nia/unique4.png" },
    ],
  },
  kayron: {
    portrait: "/images/characters/kayronportrait.webp",
    starter: [
      { name: "Elimination", image: "/images/character/kayron/starter1.png" },
      { name: "Elimination", image: "/images/character/kayron/starter2.png" },
      { name: "Sphere", image: "/images/character/kayron/starter3.png" },
      {
        name: "Echo of Futility",
        image: "/images/character/kayron/starter4.png",
      },
    ],
    unique: [
      {
        name: "Brand of Annihilation",
        image: "/images/character/kayron/unique1.png",
      },
      { name: "Black Hole", image: "/images/character/kayron/unique2.png" },
      { name: "Oath of Vanity", image: "/images/character/kayron/unique3.png" },
      {
        name: "Echoes of True Abyss",
        image: "/images/character/kayron/unique4.png",
      },
    ],
  },
  haru: {
    portrait: "/images/characters/haruportrait.webp",
    starter: [
      { name: "Anchor", image: "/images/character/haru/starter1.png" },
      { name: "Power Anchor", image: "/images/character/haru/starter2.png" },
      { name: "Anchor Drop", image: "/images/character/haru/starter3.png" },
      { name: "Anchor Shot", image: "/images/character/haru/starter4.png" },
    ],
    unique: [
      { name: "Anchor Pointer", image: "/images/character/haru/unique1.png" },
      { name: "Power Charge", image: "/images/character/haru/unique2.png" },
      { name: "Charged Energy", image: "/images/character/haru/unique3.png" },
      { name: "Lift Anchor", image: "/images/character/haru/unique4.png" },
    ],
  },
  yuki: {
    portrait: "/images/characters/yukiportrait.webp",
    starter: [
      { name: "Longsword Slash", image: "/images/character/yuki/starter1.png" },
      { name: "Rapid Slash", image: "/images/character/yuki/starter2.png" },
      { name: "Flowing Parry", image: "/images/character/yuki/starter3.png" },
      {
        name: "Prepare to Subdue",
        image: "/images/character/yuki/starter4.png",
      },
    ],
    unique: [
      { name: "Flash Slash", image: "/images/character/yuki/unique1.png" },
      { name: "Trickery Strike", image: "/images/character/yuki/unique2.png" },
      { name: "Freezing Blade", image: "/images/character/yuki/unique3.png" },
      { name: "Iceberg Cleave", image: "/images/character/yuki/unique4.png" },
    ],
  },
  hugo: {
    portrait: "/images/characters/hugoportrait.webp",
    starter: [
      { name: "Throw Dagger", image: "/images/character/hugo/starter1.png" },
      { name: "Throw Dagger", image: "/images/character/hugo/starter2.png" },
      { name: "Defense System", image: "/images/character/hugo/starter3.png" },
      {
        name: "Hunting Instincts",
        image: "/images/character/hugo/starter4.png",
      },
    ],
    unique: [
      { name: "Fan of Daggers", image: "/images/character/hugo/unique1.png" },
      { name: "Quick Fix", image: "/images/character/hugo/unique2.png" },
      { name: "Dingo Howling", image: "/images/character/hugo/unique3.png" },
      { name: "Fixer’s Approach", image: "/images/character/hugo/unique4.png" },
    ],
  },
  renoa: {
    portrait: "/images/characters/renoaportrait.webp",
    starter: [
      {
        name: "Annihilation Shot",
        image: "/images/character/renoa/starter1.png",
      },
      {
        name: "Annihilation Shot",
        image: "/images/character/renoa/starter2.png",
      },
      { name: "Black Veil", image: "/images/character/renoa/starter3.png" },
      { name: "Echo of Sorrow", image: "/images/character/renoa/starter4.png" },
    ],
    unique: [
      {
        name: "Instant Judgement",
        image: "/images/character/renoa/unique1.png",
      },
      {
        name: "Ballad of Pitch Black",
        image: "/images/character/renoa/unique2.png",
      },
      {
        name: "Flower of Devoured Fate",
        image: "/images/character/renoa/unique3.png",
      },
      {
        name: "Last-Ditch Assault",
        image: "/images/character/renoa/unique4.png",
      },
    ],
  },
  veronica: {
    portrait: "/images/characters/veronicaportrait.webp",
    starter: [
      { name: "Rapid Fire", image: "/images/character/veronica/starter1.png" },
      { name: "Rapid Fire", image: "/images/character/veronica/starter2.png" },
      {
        name: "Illusion of Golden Daffodils",
        image: "/images/character/veronica/starter3.png",
      },
      {
        name: "Firing Preparation",
        image: "/images/character/veronica/starter4.png",
      },
    ],
    unique: [
      { name: "Repose", image: "/images/character/veronica/unique1.png" },
      {
        name: "Pendant of Resolution",
        image: "/images/character/veronica/unique2.png",
      },
      { name: "Sir Kowalski", image: "/images/character/veronica/unique3.png" },
      {
        name: "Bombardment Prep",
        image: "/images/character/veronica/unique4.png",
      },
    ],
  },
  "mei-lin": {
    portrait: "/images/characters/meilinportrait.webp",
    starter: [
      { name: "Strike", image: "/images/character/mei-lin/starter1.png" },
      { name: "Strike", image: "/images/character/mei-lin/starter2.png" },
      {
        name: "Flame Dragon Guardian",
        image: "/images/character/mei-lin/starter3.png",
      },
      {
        name: "Flame Dragon Jewel",
        image: "/images/character/mei-lin/starter4.png",
      },
    ],
    unique: [
      {
        name: "Rising Dragon Spire",
        image: "/images/character/mei-lin/unique1.png",
      },
      {
        name: "Unity of Attack and Defense",
        image: "/images/character/mei-lin/unique2.png",
      },
      {
        name: "Spirit of the Aroma",
        image: "/images/character/mei-lin/unique3.png",
      },
      {
        name: "Flame Dragon’s Sovereighty",
        image: "/images/character/mei-lin/unique4.png",
      },
    ],
  },
  orlea: {
    portrait: "/images/characters/orleaportrait.webp",
    starter: [
      {
        name: "Attack, My Minions",
        image: "/images/character/orlea/starter1.png",
      },
      {
        name: "Attack, My Minions",
        image: "/images/character/orlea/starter2.png",
      },
      {
        name: "Heaven’s Healing",
        image: "/images/character/orlea/starter3.png",
      },
      { name: "Sacred Censer", image: "/images/character/orlea/starter4.png" },
    ],
    unique: [
      {
        name: "Growth Acceleration",
        image: "/images/character/orlea/unique1.png",
      },
      { name: "Annoying", image: "/images/character/orlea/unique2.png" },
      {
        name: "Growing Creature",
        image: "/images/character/orlea/unique3.png",
      },
      { name: "Will of Light", image: "/images/character/orlea/unique4.png" },
    ],
  },
  rin: {
    portrait: "/images/characters/rinportrait.webp",
    starter: [
      {
        name: "Dark Mist Sword: First Form",
        image: "/images/character/rin/starter1.png",
      },
      {
        name: "Dark Mist Sword: Third Form",
        image: "/images/character/rin/starter2.png",
      },
      { name: "Protection", image: "/images/character/rin/starter3.png" },
      { name: "Drawing Slash", image: "/images/character/rin/starter4.png" },
    ],
    unique: [
      {
        name: "Dark Mist Secret Art: Destruction",
        image: "/images/character/rin/unique1.png",
      },
      {
        name: "Dark Mist Secret Art: Annihilation",
        image: "/images/character/rin/unique2.png",
      },
      {
        name: "Dark Mist Inner Art",
        image: "/images/character/rin/unique3.png",
      },
      {
        name: "Dark Mist Secret Art: Black Dance",
        image: "/images/character/rin/unique4.png",
      },
    ],
  },
  magna: {
    portrait: "/images/characters/magnaportrait.webp",
    starter: [
      { name: "Frozen Fist", image: "/images/character/magna/starter1.png" },
      { name: "Frost Shield", image: "/images/character/magna/starter3.png" },
      { name: "Frost Shield", image: "/images/character/magna/starter3.png" },
      { name: "Ice Fragment", image: "/images/character/magna/starter4.png" },
    ],
    unique: [
      {
        name: "Glacial Iron Fist",
        image: "/images/character/magna/unique1.png",
      },
      { name: "Ice Wall", image: "/images/character/magna/unique2.png" },
      { name: "Frost Charge", image: "/images/character/magna/unique3.png" },
      {
        name: "Storm of Bitter Cold",
        image: "/images/character/magna/unique4.png",
      },
    ],
  },
  khalipe: {
    portrait: "/images/characters/khalipeportrait.webp",
    starter: [
      { name: "Lashing", image: "/images/character/khalipe/starter1.png" },
      { name: "Upward Slash", image: "/images/character/khalipe/starter2.png" },
      { name: "Tyr’s Vow", image: "/images/character/khalipe/starter3.png" },
      {
        name: "Vulture Ejection",
        image: "/images/character/khalipe/starter4.png",
      },
    ],
    unique: [
      {
        name: "Greatsword Aquila",
        image: "/images/character/khalipe/unique1.png",
      },
      { name: "Overpower", image: "/images/character/khalipe/unique2.png" },
      { name: "Rally", image: "/images/character/khalipe/unique3.png" },
      {
        name: "Absolute Protection",
        image: "/images/character/khalipe/unique4.png",
      },
    ],
  },
  sereniel: {
    portrait: "/images/characters/serenielportrait.webp",
    starter: [
      { name: "Pulse Fire", image: "/images/character/sereniel/starter1.webp" },
      { name: "Pulse Fire", image: "/images/character/sereniel/starter2.webp" },
      {
        name: "Magnetic Field",
        image: "/images/character/sereniel/starter3.webp",
      },
      {
        name: "Homing Laser",
        image: "/images/character/sereniel/starter4.webp",
      },
    ],
    unique: [
      {
        name: "Plasma Missile",
        image: "/images/character/sereniel/unique1.webp",
      },
      {
        name: "Shining Core",
        image: "/images/character/sereniel/unique2.webp",
      },
      {
        name: "Cobalt Light",
        image: "/images/character/sereniel/unique3.webp",
      },
      {
        name: "Pale Shooting Star",
        image: "/images/character/sereniel/unique4.webp",
      },
    ],
  },
  chizuru: {
    portrait: "/images/characters/chizuruportrait.webp",
    starter: [
      { name: "Moonslash", image: "/images/character/chizuru/starter1.png" },
      { name: "Moonslash", image: "/images/character/chizuru/starter2.png" },
      {
        name: "Spiritflame’s Ward",
        image: "/images/character/chizuru/starter3.png",
      },
      {
        name: "Karmic Flames",
        image: "/images/character/chizuru/starter4.png",
      },
    ],
    unique: [
      { name: "Tsukuyomi", image: "/images/character/chizuru/unique1.png" },
      { name: "Bound At Dusk", image: "/images/character/chizuru/unique2.png" },
      { name: "Oni Hunt", image: "/images/character/chizuru/unique3.png" },
      {
        name: "Shadow of the Moon",
        image: "/images/character/chizuru/unique4.png",
      },
    ],
  },
  luke: {
    portrait: "/images/characters/lukeportrait.webp",
    starter: [
      { name: "Single Shot", image: "/images/character/luke/starter1.png" },
      { name: "Single Shot", image: "/images/character/luke/starter2.png" },
      {
        name: "Shadow Concealment",
        image: "/images/character/luke/starter3.png",
      },
      { name: "Rapid Fire", image: "/images/character/luke/starter4.png" },
    ],
    unique: [
      { name: "Stealth Reload", image: "/images/character/luke/unique1.png" },
      {
        name: "Seize the Opportunity",
        image: "/images/character/luke/unique2.png",
      },
      {
        name: "Dance of the Demon",
        image: "/images/character/luke/unique3.png",
      },
      { name: "Finisher Round", image: "/images/character/luke/unique4.png" },
    ],
  },
};

const DEFAULT_CARD_IMAGES = {
  neutral: "/images/card/neutral.png",
  monster: "/images/card/monster.png",
  forbidden: "/images/card/forbidden.png",
  starter: "/images/card/starter.png",
  placeholder: "/images/card/placeholder.png",
  remove: "/images/card/remove.png",
} as const;

const TIER_LIMITS: Record<number, number> = {
  1: 30,
  2: 40,
  3: 50,
  4: 60,
  5: 70,
  6: 80,
  7: 90,
  8: 100,
  9: 110,
  10: 120,
  11: 130,
  12: 140,
  13: 150,
  14: 160,
  15: 170,
};

// prettier-ignore
const FACTION_BORDER_MAP: Record<string, string[]> = {
  "/images/card/order-border.png": [
    "amir",
    "luke", 
    "hugo", 
    "yuki"
    ],
  "/images/card/void-border.png": [
    "tressa",
    "rin",
    "renoa",
    "rei",
    "kayron",
    "chizuru",
  ],
  "/images/card/instinct-border.png": [
    "nia",
    "khalipe",
    "orlea",
    "cassius",
    "sereniel",
  ],
  "/images/card/passion-border.png": [
    "selena",
    "lucas",
    "mei-lin",
    "maribell",
    "veronica",
    "owen",
  ],
  "/images/card/justice-border.png": [
    "magna", 
    "mika", 
    "beryl", 
    "haru"
  ],
};

type CardType = "neutral" | "monster" | "forbidden" | "starter";

interface DeckCard {
  id: string;
  name: string;
  image?: string;
  cardType: CardType;
  isStartingCard: boolean;
  hasNormalEpiphany: boolean;
  hasDivineEpiphany: boolean;
  isRemoved: boolean;
  wasConverted: boolean;
  isMutantSample?: boolean;
  isDuplicated?: boolean;
  isAdded?: boolean;
  duplicationCost?: number;
  removalCost?: number;
}

interface Action {
  type:
    | "epiphany"
    | "divine"
    | "duplicate"
    | "convert"
    | "remove"
    | "add"
    | "mutant";
  cardId: string;
  previousDeck?: DeckCard[];
  previousPoints?: number;
  previousRemovalCount?: number;
  previousDuplicationCount?: number;
  previousConversionCount?: number;
}

const formatCharacterName = (key: string): string =>
  key
    .split(/[-_ ]+/)
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : ""))
    .join(" ");

export function RunTracker() {
  const [character, setCharacter] = useState<string>("none");
  const [tier, setTier] = useState(1);
  const [nightmareMode, setNightmareMode] = useState(false);
  const [deck, setDeck] = useState<DeckCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showAddCard, setShowAddCard] = useState(false);
  const [open, setOpen] = useState(false);

  const [removalCount, setRemovalCount] = useState(0);
  const [duplicationCount, setDuplicationCount] = useState(0);
  const [conversionCount, setConversionCount] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [actionHistory, setActionHistory] = useState<Action[]>([]);

  const limit = TIER_LIMITS[tier] + (nightmareMode ? 10 : 0);
  const percentage = (totalPoints / limit) * 100;

  // Load from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem("czn-run-tracker");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCharacter(parsed.character ?? "none");
        setTier(parsed.tier ?? 1);
        setNightmareMode(parsed.isNightmare ?? false);
        setDeck(parsed.deck ?? []);
        setActionHistory(parsed.actionHistory ?? []);
        setRemovalCount(parsed.removalCount ?? 0);
        setDuplicationCount(parsed.duplicationCount ?? 0);
        setConversionCount(parsed.conversionCount ?? 0);
        setTotalPoints(parsed.totalPoints ?? 0);
      } catch (e) {
        console.error("Failed to load saved state", e);
      }
    } else {
      initializePlaceholderDeck();
    }
  }, []);

  // Save to sessionStorage
  useEffect(() => {
    if (character !== "none" || deck.length > 0) {
      sessionStorage.setItem(
        "czn-run-tracker",
        JSON.stringify({
          character,
          tier,
          isNightmare: nightmareMode,
          deck,
          actionHistory,
          removalCount,
          duplicationCount,
          conversionCount,
          totalPoints,
        })
      );
    }
  }, [
    character,
    tier,
    nightmareMode,
    deck,
    actionHistory,
    removalCount,
    duplicationCount,
    conversionCount,
    totalPoints,
  ]);

  const initializePlaceholderDeck = () => {
    setDeck(
      Array.from({ length: 8 }, (_, i) => ({
        id: String(i + 1),
        name: "",
        cardType: "starter" as CardType,
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      }))
    );
  };

  const handleCharacterChange = (value: string) => {
    setCharacter(value);
    if (value === "none") {
      initializePlaceholderDeck();
      return;
    }

    const data = CHARACTER_CARDS[value];
    if (!data) return;

    const newDeck: DeckCard[] = [
      ...data.starter.map((c, i) => ({
        id: String(i + 1),
        name: c.name,
        image: c.image,
        cardType: "starter",
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      })),
      ...data.unique.map((c, i) => ({
        id: String(i + 5),
        name: c.name,
        image: c.image,
        cardType: "starter",
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      })),
    ];

    setDeck(newDeck);
  };

  const recordAction = (action: Action) => {
    setActionHistory((prev) => [...prev, action]);
  };

  const getCardPointValue = (card: DeckCard): number => {
    if (card.isRemoved) return 0;
    let points = 0;
    if (card.cardType === "neutral") points += 20;
    if (card.cardType === "monster") points += 80;
    if (card.cardType === "forbidden") points += 20;

    if (card.hasDivineEpiphany) {
      points += card.cardType === "neutral" ? 30 : 20;
    } else if (card.hasNormalEpiphany && card.cardType !== "starter") {
      points += 10;
    }
    return points;
  };

  const toggleEpiphany = (cardId: string, type: "normal" | "divine") => {
    const card = deck.find((c) => c.id === cardId);
    if (!card || card.isRemoved || card.cardType === "forbidden") return;

    const isDivine = type === "divine";
    const current = isDivine ? card.hasDivineEpiphany : card.hasNormalEpiphany;
    const opposite = isDivine ? card.hasNormalEpiphany : card.hasDivineEpiphany;

    if (current && opposite) return;

    recordAction({
      type: isDivine ? "divine" : "epiphany",
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints,
    });

    setDeck((prev) =>
      prev.map((c) =>
        c.id === cardId
          ? {
              ...c,
              [isDivine ? "hasDivineEpiphany" : "hasNormalEpiphany"]: !current,
            }
          : c
      )
    );

    const delta = isDivine
      ? card.cardType === "neutral"
        ? 30
        : 20
      : card.cardType !== "starter"
      ? 10
      : 0;

    setTotalPoints((p) => p + (current ? -delta : delta));
    setSelectedCard(null);
  };

  const duplicateCard = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId);
    if (!card || card.isRemoved) return;

    const cost = [0, 10, 30, 50, 70][duplicationCount] ?? 70;
    const totalCost = cost + getCardPointValue(card);

    const newCard: DeckCard = {
      ...card,
      id: Date.now().toString(),
      isDuplicated: true,
      duplicationCost: totalCost,
      isRemoved: false,
    };

    recordAction({
      type: "duplicate",
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints,
      previousDuplicationCount: duplicationCount,
    });

    setDeck((prev) => [...prev, newCard]);
    setDuplicationCount((c) => c + 1);
    setTotalPoints((p) => p + totalCost);
    setSelectedCard(null);
  };

  const convertCard = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId);
    if (
      !card ||
      card.isRemoved ||
      card.wasConverted ||
      card.cardType === "forbidden"
    )
      return;

    let cost = 10;
    if (card.cardType === "starter") cost += 20;
    if (card.hasDivineEpiphany) cost += card.cardType === "neutral" ? 30 : 20;
    else if (card.hasNormalEpiphany && card.cardType !== "starter") cost += 10;

    recordAction({
      type: "convert",
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints,
      previousConversionCount: conversionCount,
    });

    setDeck((prev) =>
      prev.map((c) =>
        c.id === cardId
          ? {
              ...c,
              cardType: "neutral",
              wasConverted: true,
              isStartingCard: false,
              name: "Neutral Card",
              image: DEFAULT_CARD_IMAGES.neutral,
            }
          : c
      )
    );

    setConversionCount((c) => c + 1);
    setTotalPoints((p) => p + cost);
    setSelectedCard(null);
  };

  const removeCard = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId);
    if (!card || card.isRemoved || card.cardType === "forbidden") return;

    const newCount = removalCount + 1;
    const scaleCost = [0, 10, 30, 50, 70][newCount - 1] ?? 70;
    const starterTax =
      (card.isStartingCard && !card.wasConverted) || card.hasNormalEpiphany
        ? 20
        : 0;
    const cardPoints = getCardPointValue(card);

    const removalCost =
      card.cardType === "neutral" || card.cardType === "monster"
        ? scaleCost + starterTax - cardPoints
        : scaleCost + starterTax - cardPoints;

    recordAction({
      type: "remove",
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints,
      previousRemovalCount: removalCount,
    });

    setDeck((prev) =>
      prev.map((c) =>
        c.id === cardId ? { ...c, isRemoved: true, removalCost } : c
      )
    );
    setRemovalCount(newCount);
    setTotalPoints((p) => p + removalCost);
    setSelectedCard(null);
  };

  const convertToMutantSample = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId);
    if (!card || card.isRemoved || card.cardType === "forbidden") return;

    recordAction({
      type: "mutant",
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints,
    });

    setDeck((prev) =>
      prev.map((c) =>
        c.id === cardId
          ? {
              ...c,
              isRemoved: true,
              isMutantSample: true,
              image: DEFAULT_CARD_IMAGES.remove,
            }
          : c
      )
    );
    setSelectedCard(null);
  };

  const addNewCard = (type: CardType) => {
    const names = {
      neutral: "Neutral Card",
      monster: "Monster Card",
      forbidden: "Forbidden Card",
      starter: "Starter Card",
    };
    const newCard: DeckCard = {
      id: Date.now().toString(),
      name: names[type],
      image: DEFAULT_CARD_IMAGES[type],
      cardType: type,
      isStartingCard: false,
      hasNormalEpiphany: false,
      hasDivineEpiphany: false,
      isRemoved: false,
      wasConverted: false,
      isAdded: true,
    };

    recordAction({
      type: "add",
      cardId: newCard.id,
      previousDeck: [...deck],
      previousPoints: totalPoints,
    });

    setDeck((prev) => [...prev, newCard]);
    setTotalPoints((p) => p + getCardPointValue(newCard));
    setShowAddCard(false);
  };

  const resetDeck = () => {
    handleCharacterChange(character);
    setRemovalCount(0);
    setDuplicationCount(0);
    setConversionCount(0);
    setTotalPoints(0);
    setActionHistory([]);
  };

  const undoLastAction = () => {
    if (actionHistory.length === 0) return;
    const last = actionHistory[actionHistory.length - 1];

    if (last.previousDeck) setDeck(last.previousDeck);
    if (last.previousPoints !== undefined) setTotalPoints(last.previousPoints);
    if (last.previousRemovalCount !== undefined)
      setRemovalCount(last.previousRemovalCount);
    if (last.previousDuplicationCount !== undefined)
      setDuplicationCount(last.previousDuplicationCount);
    if (last.previousConversionCount !== undefined)
      setConversionCount(last.previousConversionCount);

    setActionHistory((prev) => prev.slice(0, -1));
    setSelectedCard(null);
  };

  const deleteCard = (cardId: string) => {
    setDeck((prev) => prev.filter((c) => c.id !== cardId));
  };

  // Click outside to deselect
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!selectedCard) return;
      const el = document.getElementById(`card-${selectedCard}`);
      if (el && !el.contains(e.target as Node)) {
        setSelectedCard(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [selectedCard]);

  const renderCard = (card: DeckCard, isBase: boolean) => {
    const isSelected = selectedCard === card.id;
    const factionBorder = Object.entries(FACTION_BORDER_MAP).find(([, chars]) =>
      chars.includes(character)
    )?.[0];

    return (
      <div
        key={card.id}
        id={`card-${card.id}`}
        className={`group relative aspect-[2/3] cursor-pointer rounded-md overflow-hidden transition-all hover:scale-105 ${
          isSelected ? "ring-1 ring-purple-400" : ""
        } ${
          card.isRemoved ? "opacity-50" : ""
        } bg-black/40 backdrop-blur-sm border border-white/10`}
        onClick={() => {
          if (card.isMutantSample) return;
          card.isRemoved
            ? undoLastAction()
            : setSelectedCard(isSelected ? null : card.id);
        }}
      >
        {card.isRemoved && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteCard(card.id);
            }}
            className="absolute top-1 right-1 z-20 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4 text-white" />
          </button>
        )}

        {card.image ? (
          <img
            src={card.image}
            alt={card.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: card.isDuplicated
                ? "scaleX(-1) scale(1.05)"
                : "scale(1.05)",
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/40 text-xs">
            No Image
          </div>
        )}

        {/* Faction / Type Borders */}
        {isBase && factionBorder && (
          <img
            src={factionBorder}
            alt="Faction border"
            className="z-10 scale-105 absolute left-0 top-0 bottom-0 w-auto h-full object-cover object-left pointer-events-none opacity-90"
          />
        )}
        {card.cardType === "neutral" && !card.isStartingCard && (
          <img
            src="/images/card/neutral-border.png"
            className="z-10 scale-105 absolute left-0 top-0 bottom-0 w-auto h-full object-cover object-left pointer-events-none opacity-90"
          />
        )}
        {card.cardType === "monster" && (
          <img
            src="/images/card/monster-border.png"
            className="z-10 scale-105 absolute left-0 top-0 bottom-0 w-auto h-full object-cover object-left pointer-events-none opacity-90"
          />
        )}
        {card.isDuplicated && (
          <img
            src="/images/card/deco_card_copy.png"
            className="z-10 scale-105 absolute right-0 top-0 bottom-0 w-auto h-full object-cover object-left pointer-events-none opacity-90"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70 p-2 flex flex-col justify-between text-xs text-white">
          <div>
            {!card.isRemoved && (
              <span className="font-sm pl-1">{card.name}</span>
            )}
            <div className="flex gap-1 mt-1 pl-2">
              {card.hasDivineEpiphany && (
                <img
                  src="/images/card/icon_card_battle_expand_circen.png"
                  alt="Divine"
                  className="h-12 w-8"
                />
              )}
              {card.hasNormalEpiphany && (
                <img
                  src="/images/card/icon_card_battle_expand_default.png"
                  alt="Epiphany"
                  className="h-12 w-12"
                />
              )}
            </div>
          </div>
          <div className="text-right font-bold drop-shadow-md">
            {card.duplicationCost ?? getCardPointValue(card)}
          </div>
        </div>

        {isSelected && !card.isRemoved && !card.isMutantSample && (
          <div className="absolute inset-0 flex flex-col justify-center gap-1 p-2 z-30 bg-black/60 backdrop-blur-sm rounded-md">
            {/* Card Actions Modal */}
            <Dialog
              open={!!selectedCard}
              onOpenChange={(open) => !open && setSelectedCard(null)}
            >
              <DialogContent className="sm:max-w-xs">
                <DialogHeader>
                  <DialogTitle className="text-xl text-center">
                    {selectedCard &&
                      deck.find((c) => c.id === selectedCard)?.name}
                  </DialogTitle>
                </DialogHeader>

                {selectedCard &&
                  (() => {
                    const card = deck.find((c) => c.id === selectedCard)!;
                    if (card.isRemoved || card.isMutantSample) return null;

                    const cardPosition = parseInt(card.id);
                    const isProtectedBaseCard =
                      !isNaN(cardPosition) &&
                      (cardPosition <= 3 || cardPosition === 8);

                    const isForbidden = card.cardType === "forbidden";
                    if (isForbidden) {
                      return (
                        <div className="grid gap-3 py-4">
                          <Button
                            variant="outline"
                            onClick={() => duplicateCard(card.id)}
                          >
                            Duplicate Card
                          </Button>
                        </div>
                      );
                    }

                    return (
                      <div className="grid gap-3 py-4">
                        {!isProtectedBaseCard && (
                          <>
                            <Button
                              variant={
                                card.hasNormalEpiphany ? "destructive" : "ghost"
                              }
                              disabled={card.hasDivineEpiphany}
                              onClick={() => toggleEpiphany(card.id, "normal")}
                            >
                              {card.hasNormalEpiphany
                                ? "Remove Epiphany"
                                : "Add Epiphany"}
                            </Button>

                            <Button
                              variant={
                                card.hasDivineEpiphany ? "destructive" : "ghost"
                              }
                              disabled={card.hasNormalEpiphany}
                              onClick={() => toggleEpiphany(card.id, "divine")}
                            >
                              {card.hasDivineEpiphany
                                ? "Remove Divine Epiphany"
                                : "Add Divine Epiphany"}
                            </Button>
                          </>
                        )}

                        <Button
                          variant="outline"
                          onClick={() => duplicateCard(card.id)}
                        >
                          Duplicate Card
                        </Button>

                        <Button
                          variant="outline"
                          disabled={card.wasConverted}
                          onClick={() => convertCard(card.id)}
                        >
                          Convert to Neutral
                        </Button>

                        <Button
                          variant="outline"
                          onClick={() => convertToMutantSample(card.id)}
                        >
                          To Mutant Sample
                        </Button>

                        <Button
                          variant="destructive"
                          onClick={() => {
                            removeCard(card.id);
                            setSelectedCard(null);
                          }}
                        >
                          Remove Card
                        </Button>
                      </div>
                    );
                  })()}
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    );
  };

  const baseCards = deck.filter((c) => {
    const id = parseInt(c.id);
    return (
      !isNaN(id) && id >= 1 && id <= 8 && !c.wasConverted && !c.isDuplicated
    );
  });

  const addedCards = deck.filter(
    (c) => c.isDuplicated || c.wasConverted || c.isAdded || c.isMutantSample
  );

  return (
    <TooltipProvider>
      <div className="space-y-6 max-w-7xl mx-auto px-6">
        <div className="text-center py-8 -mt-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-2xl leading-tight text-left">
            Save Data Helper
          </h2>
        </div>

        {/* Run Configuration */}
        <Card className="border-border/60 bg-card/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Run Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1 space-y-3 w-full">
                <Label className="text-base font-medium">
                  Faint Memory Tier
                </Label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((t) => (
                    <Button
                      key={t}
                      variant={tier === t ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTier(t)}
                      className={
                        tier === t
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600"
                          : ""
                      }
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="nightmare"
                  checked={nightmareMode}
                  onCheckedChange={(v) => setNightmareMode(!!v)}
                />
                <Label htmlFor="nightmare" className="cursor-pointer">
                  Nightmare Mode
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-5 w-5" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>+10 points to Faint Memory Limit</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Character</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between h-20 px-3"
                  >
                    <div className="flex items-center gap-3">
                      {character === "none" ? (
                        <>
                          <div className="w-16 h-16 rounded-xl border-2 border-dashed border-muted-foreground/50 flex items-center justify-center bg-secondary">
                            <X className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <span className="text-muted-foreground">
                            Select a character
                          </span>
                        </>
                      ) : character && CHARACTER_CARDS[character]?.portrait ? (
                        <>
                          <div className="w-16 h-16 rounded-xl overflow-hidden border-1 border-gray-500/50 shadow-md">
                            <img
                              src={CHARACTER_CARDS[character].portrait}
                              alt={formatCharacterName(character)}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="font-medium">
                            {formatCharacterName(character)}
                          </span>
                        </>
                      ) : (
                        // Fallback if portrait missing
                        <>
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                            {formatCharacterName(character)[0]}
                          </div>
                          <span>{formatCharacterName(character)}</span>
                        </>
                      )}
                    </div>
                    <ChevronsUpDown className="h-4 w-4 opacity-80 shrink-0" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  className="w-full p-0"
                  align="start"
                  sideOffset={5}
                >
                  <Command className="max-h-76 overflow-y-auto">
                    <CommandInput placeholder="Search character..." />
                    <CommandList>
                      <CommandEmpty>No character found.</CommandEmpty>
                      <CommandGroup>
                        {/* None Option */}
                        <CommandItem
                          value="none"
                          onSelect={() => {
                            handleCharacterChange("none");
                            setOpen(false);
                          }}
                        >
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-xl border-2 border-dashed border-muted-foreground/50 flex items-center justify-center bg-secondary">
                              <X className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <span className="font-medium">None</span>
                          </div>
                          {character === "none" && (
                            <Check className="ml-auto h-5 w-5" />
                          )}
                        </CommandItem>

                        {/* Character List with Portraits */}
                        {Object.keys(CHARACTER_CARDS)
                          .sort()
                          .map((key) => {
                            const portrait = CHARACTER_CARDS[key].portrait;

                            return (
                              <CommandItem
                                key={key}
                                value={key}
                                onSelect={() => {
                                  handleCharacterChange(key);
                                  setOpen(false);
                                }}
                              >
                                <div className="flex items-center gap-4 w-full">
                                  {portrait ? (
                                    <div className="w-10 h-10 rounded-xl overflow-hidden border-1 border-gray-500/30 shadow">
                                      <img
                                        src={portrait}
                                        alt={formatCharacterName(key)}
                                        className="w-full h-full object-cover object-top scale-100"
                                      />
                                    </div>
                                  ) : (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/80 to-cyan-500/80 flex items-center justify-center text-white font-bold">
                                      {formatCharacterName(key)[0]}
                                    </div>
                                  )}
                                  <span className="font-medium">
                                    {formatCharacterName(key)}
                                  </span>
                                </div>
                                {character === key && (
                                  <Check className="ml-auto h-5 w-5" />
                                )}
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Points Used</span>
                <span
                  className={`font-bold text-lg ${
                    percentage > 100 ? "text-red-400" : ""
                  }`}
                >
                  {totalPoints} / {limit} {nightmareMode && "(+10)"}
                </span>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    percentage > 100
                      ? "bg-red-500"
                      : "bg-gradient-to-r from-purple-500 to-cyan-400"
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
              {percentage > 100 && (
                <p className="text-sm text-red-400">
                  Over cap by {totalPoints - limit} points
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Cards Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/60 bg-card/40 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl">Base Cards</CardTitle>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={undoLastAction}
                    disabled={!actionHistory.length}
                  >
                    <Undo className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={resetDeck}>
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {baseCards.map((card) => renderCard(card, true))}
              </div>
            </CardContent>
          </Card>
          {/* Added Cards */}
          <Card className="border-border/60 bg-card/40 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">
                  Added Cards
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                  {addedCards.length} card{addedCards.length !== 0 ? "s" : ""}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {addedCards.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                    <Plus className="h-10 w-10 text-muted-foreground" />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {addedCards.map((card) => renderCard(card, false))}
                </div>
              )}

              <Dialog open={showAddCard} onOpenChange={setShowAddCard}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-12 text-base font-medium border-dashed border-2 hover:border-purple-400 hover:bg-accent/50 transition-all"
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Add New Card
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center mb-2">
                      Add a New Card
                    </DialogTitle>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-20 flex flex-col gap-2 border-2 hover:border-purple-400 hover:bg-purple-500/10 transition-all"
                      onClick={() => addNewCard("neutral")}
                    >
                      <div>
                        <div className="font-semibold">Neutral Card</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          +20
                        </div>
                      </div>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="h-20 flex flex-col gap-2 border-2 hover:border-red-400 hover:bg-red-500/10 transition-all"
                      onClick={() => addNewCard("monster")}
                    >
                      <div>
                        <div className="font-semibold">Monster Card</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          +80
                        </div>
                      </div>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="h-20 flex flex-col gap-2 border-2 hover:border-yellow-400 hover:bg-yellow-500/10 transition-all"
                      onClick={() => addNewCard("forbidden")}
                    >
                      <div>
                        <div className="font-semibold text-yellow-400">
                          Forbidden Card
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          +20
                        </div>
                      </div>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
