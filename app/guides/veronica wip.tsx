// "use client"
// import Link from "next/link"
// import { ArrowLeft } from "lucide-react"
// import { ChevronDown } from "lucide-react"
// import ExpandableSetCard from "@/components/ui/ExpandableSetCard"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// import { useState } from "react"
// import { GearTooltip } from "@/components/GearTooltip"; // adjust the path if needed

// export default function VeronicaGuidePage() {
//   const [expandedMemorySet, setExpandedMemorySet] = useState<string | null>(null)
//   const [selectedPartner, setSelectedPartner] = useState<number | null>(null)
//   const [selectedCardForEpiphanies, setSelectedCardForEpiphanies] = useState<typeof uniqueCards[0] | null>(null)

//   const sections = [
//     { id: "overview", title: "1. Overview", level: 1 },
//     { id: "card-epiphany", title: "2. Base Cards", level: 1 },
//     { id: "recommended-save-data", title: "3. Recommended Save Data", level: 1 },
//     { id: "equipments", title: "3.1. Equipments", level: 2 },
//     { id: "memory-fragments", title: "4. Memory Fragments", level: 1 },
//     { id: "partners", title: "5. Partners", level: 1 },
//     { id: "teams", title: "6. Teams", level: 1 },
//   ]

//   const uniqueCards = [
//     {
//       id: "firing-preparation",
//       name: "Firing Preparation",
//       image: "/images/character/veronica/starter4.png",
//       baseType: "upgrade",
//       baseDescription: "[ Unique / Initiation ] Create 1 Ballista card(s).\nAt the start of the turn,\ncreate 1 Ballista card(s)",
//       epiphanies: [
//         {
//           id: "Firing Preparation I",
//           tier: "S",
//           cost: 1,
//           type: "upgrade",
//           description: "[ Unique / Initiation ] Create 1 Ballista card(s).\nAt the start of the turn,\ncreate 1 Ballista card(s),\nwith a 50% chance to additionally create 1 more",
//           reasoning: "Probably the highest raw damage potential, but it suffers from heavy RNG making it inconsistent, it lacks AoE but strong on bosses",
//         },
//         {
//           id: "Firing Preparation II",
//           tier: "Situational",
//           cost: 1,
//           type: "upgrade",
//           description: "[ Unique / Initiation ] Create 1 Piercing Ballista.\nAt the start of the turn, \ncreate 1 Piercing Ballista card(s)",
//           reasoning: "Lowest damage among the Ballista epiphanies if enemy has no shield, but strong against shielded foes like Judas because of the piercing damage",
//         },
//         {
//           id: "Firing Preparation III",
//           tier: "A",
//           cost: 1,
//           type: "upgrade",
//           description: "[ Unique / Initiation ] Create 1 Enhanced Ballista.\nAt the start of the turn, \ncreate 1 Enhanced Ballista card(s)",
//           reasoning: "Nothing special, it have lower damage potential than other epiphanies, however the 30% Critical Chance makes damage more consistent",
//         },
//         {
//           id: "Firing Preparation IV",
//           tier: "S+",
//           cost: 1,
//           type: "upgrade",
//           description: "[ Unique / Initiation ] Create 1 Giant Ballista. \nAt the start of the turn, \ncreate 1 Giant Ballista \ncard(s)",
//           reasoning: "Best overall; lower single-target damage but AoE is so strong it doesn't matter, mitigates targeting RNG without E2—always pick if unsure",
//         },
//         {
//           id: "Firing Preparation V",
//           tier: "S",
//           cost: 1,
//           type: "upgrade",
//           description: "[ Unique / Initiation ] Create 1 Shelling Ballista. \nAt the start of the turn, \ncreate 1 Shelling Ballista \ncard(s)",
//           reasoning: "Best for Veronica DPS; it makes Kowalski and Morale additive buffs stronger, her E2 makes it consistent and even stronger",
//         },
//       ],
//       divineEpiphanies: [
//         {
//           name: "Reduce the cost of this card by 1",
//           reasoning: "Excellent for cost efficiency",
//           icon: "/images/card/icon_card_battle_expand_vitor.png",
//         },
//         {
//           name: "1 Morale, 1 Resolve",
//           reasoning: "Permanent 20% additive buff",
//           icon: "/images/card/icon_card_battle_expand_vitor.png",
//         }
      
//       ],
//     },
//     {
//       id: "repose",
//       name: "Repose",
//       image: "/images/character/veronica/unique1.png",
//       baseType: "skill",
//       baseDescription: "120% Shield \nDraw 2 card(s) from other combatant",
//       epiphanies: [
//         {
//           id: "Repose I",
//           tier: "S+",
//           cost: 0,
//           type: "skill",
//           description: "Draw 2 other \n Combatant's card(s)",
//           reasoning: "Arguably the best Repose option, 0 cost free 2 draw and it gets even stronger with a Divine Epiphany that adds +1 draw or +1 AP",
//         },
//         {
//           id: "Repose II",
//           tier: "A",
//           cost: 1,
//           type: "skill",
//           description: "180% Shield \nDraw 2 other \nCombatant's card(s) \nIf that card is a Skill Card, \n1 Reload",
//           reasoning: "A weaker version of Repose III, it still has value since you draw and MIGHT get Reload, but the effect is much lower impact overall, and the other Repose options outperform it",
//         },
//         {
//           id: "Repose III",
//           tier: "S",
//           cost: 1,
//           type: "skill",
//           description:
//             "180% Shield \nDraw 2 other \nCombatant's card(s) \nDecrease Cost of 1 of those cards by 1 for 1 turn",
//           reasoning: "Second best pick, a bit less consistent since it can break some builds. Divine upgrade that makes this 0 cost it might becomes the best option",
//         },
//         {
//           id: "Repose IV",
//           tier: "C",
//           cost: 1,
//           type: "skill",
//           description: "180% Shield \n1 Reload equal to \nnumber of other \nCombatant's skill card(s) \nin hand",
//           reasoning: "Reload is already covered by the pendant of resolution card, so there's no real reason to pick this",
//         },
//         {
//           id: "Repose V",
//           tier: "C",
//           cost: 1,
//           type: "skill",
//           description: "180% Shield \nDiscard all other \nCombatant's card(s) in hand \n1 Reload equal to that number",
//           reasoning: "Worst choice. Hand discard is too punishing and the Reload payoff doesn't justify it",
//         },
//       ],
//       divineEpiphanies: [
//         {
//           name: "+1 Draw",
//           description: "Draw 1 card",
//           reasoning: "Arguably the best Divine Epiphany for Repose I, making it even stronger with additional draw.",
//           icon: "/images/card/icon_card_battle_expand_secred.png",
//         },
//         {
//           name: "+1 AP",
//           description: "Gain 1 AP",
//           reasoning: "Excellent for Repose I, providing additional action points to maximize value from the 0-cost draw.",
//           icon: "/images/card/icon_card_battle_expand_nihilum.png",
//         },
//         {
//           name: "-1 Cost",
//           description: "Decrease Cost by 1",
//           reasoning: "Great for Repose III, making it 0-cost and potentially the best option.",
//           icon: "/images/card/icon_card_battle_expand_vitor.png",
//         },
//       ],
//     },
//     {
//       id: "pendant-of-resolution",
//       name: "Pendant of Resolution",
//       image: "/images/character/veronica/unique2.png",
//       baseType: "upgrade",
//       baseDescription: "When another combatant uses Skill Card, 1 Reload",
//       epiphanies: [
//         {
//           id: "Pendant of Resolution I",
//           tier: "S+",
//           cost: 1,
//           type: "upgrade",
//           description: "When using a Skill Card,\n 1 Reload",
//           reasoning: "Best overall option, it is just a direct upgrade of the base card, nothing special",
//         },
//         {
//           id: "Pendant of Resolution II",
//           tier: "C",
//           cost: 1,
//           type: "upgrade",
//           description: "[ Unique ] When another combatant uses Skill Card, 1 Reload \nIf 3 are used, at the start of the next turn, create 1 Micro Ballista card(s)",
//           reasoning: "Gives some Reload from other Skill Cards, but the Micro Ballista is worthless, not a strong pick compared to other Pendants",
//         },
//         {
//           id: "Pendant of Resolution III",
//           tier: "A",
//           cost: 1,
//           type: "skill",
//           description: "[Exhaust 2] For 1 turn(s), when a \ncard is used, \n1 Reload",
//           reasoning: "Decent option, provides consistent Reload but not particularly strong",
//         },
//         {
//           id: "Pendant of Resolution IV",
//           tier: "A",
//           cost: 1,
//           type: "upgrade",
//           description: "When another combatant uses Skill Card, 1 Reload \n50% Chance to gain additional 1 Reload",
//           reasoning: "Unreliable due to RNG, but otherwise a straightforward base card upgrade that can provide extra Reload",
//         },
//         {
//           id: "Pendant of Resolution V",
//           tier: "Situational",
//           cost: 1,
//           type: "skill",
//           description: "[ Retain / Retrieve 4 ] Reload 2",
//           reasoning: "Best Pendant if paired with a -1 cost Divine Epiphany; otherwise it's a bit expensive. Excellent for Mei Lin, as it provides 8 Passion stacks",
//         },
//       ],
//       divineEpiphanies: [
//         {
//           name: "-1 Cost",
//           description: "Decrease Cost by 1",
//           reasoning: "Best Divine Epiphany for Pendant of Resolution V, making it 0-cost and excellent for Mei Lin builds.",
//           icon: "/images/card/icon_card_battle_expand_vitor.png",
//         }],
//     },
//     {
//       id: "sir-kowalski",
//       name: "Sir Kowalski",
//       image: "/images/character/veronica/unique3.png",
//       baseType: "skill",
//       baseDescription: "Choose 1 Ballista card in hand, +100% Damage amount until activated \nDraw 1",
//       epiphanies: [
//         {
//           id: "Sir Kowalski I",
//           tier: "S",
//           cost: 1,
//           type: "skill",
//           description: "Choose 1 Ballista card in hand, +150% Damage amount until activated. \nDraw 2",
//           reasoning: "Good option, draws 2 and boosts Ballista damage; with -1 cost Divine Epiphany it get more value",
//         },
//         {
//           id: "Sir Kowalski II",
//           tier: "B",
//           cost: 1,
//           type: "skill",
//           description: "Draw 1 \nIncrease Damage Amount of Ballista by 30% for 1 turn",
//           reasoning: "Decent but not great, grants 1 draw but the 30% multiplicative Ballista boost is less valuable since Veronica already has a lot of multiplicative damage",
//         },
//         {
//           id: "Sir Kowalski III",
//           tier: "S+",
//           cost: 1,
//           type: "skill",
//           description: "Draw 2 \nWhen drawing a Skill card, create 1 Ballista",
//           reasoning: "Basically a Repose, drawing Skill cards creates Ballista, and a -1 cost Divine Epiphany makes it even stronger",
//         },
//         {
//           id: "Sir Kowalski IV",
//           tier: "Situational",
//           cost: 1,
//           type: "skill",
//           description: "+250% Damage Amount of 1 random Ballista card in hand, \nExhaust after activation",
//           reasoning: "Best option for Veronica DPS, provides the highest damage boost, triggers mid-turn and counts as a normal targetting attack, activating Passion Weakness if the enemy has it",
//         },
//         {
//           id: "Sir Kowalski V",
//           tier: "C",
//           cost: 1,
//           type: "skill",
//           description: "Select and Exhaust 1 Ballista in hand \nCreate 2 Ballista, decrease Damage Amount of those cards by 25% until activated",
//           reasoning: "Honestly questionable, it exhausts a Ballista but doesn't trigger it like the IV option, making it more useless",
//         },
//       ],
//       divineEpiphanies: [
//         {
//           name: "-1 Cost",
//           description: "Decrease Cost by 1",
//           reasoning: "Excellent for Sir Kowalski I and III, making them 0-cost and significantly increasing their value.",
//           icon: "/images/card/icon_card_battle_expand_vitor.png",
//         },
//         {
//           name: "+1 Draw",
//           description: "Draw 1 card",
//           reasoning: "Great for maintaining card draw and cycling through your deck more efficiently.",
//           icon: "/images/card/icon_card_battle_expand_secred.png",
//         },
//       ],
//     },
//   ]

//   const commonCards: Record<string, any> = {
//     "Bombardment Prep": {
//       id: "bombardment-prep",
//       name: "Bombardment Prep",
//       image: "/images/character/veronica/unique4.png",
//       cost: 1,
//       type: "upgrade",
//       description: "[ Unique] \nIncrease max stack of \nReload by 1 \n1 Reload ",
//     },
//   };

//   function getEpiphanyFromRef(ref: string, cardsArray = uniqueCards) {
//     const match = ref.match(/(.*)\s+(I|II|III|IV|V)$/i);
//     let baseRef: string;
//     let roman: string | undefined;
    
//     if (match) {
//       baseRef = match[1].trim().toLowerCase();
//       roman = match[2].toUpperCase();
//     } else {
//       baseRef = ref.trim().toLowerCase();
//     }
  
//     const baseCard = cardsArray.find(
//       c => c.id === baseRef || c.name.toLowerCase() === baseRef.replace(/\s+/g, ' ')
//     );
  
//     const romanToIndex: Record<string, number> = { I: 0, II: 1, III: 2, IV: 3, V: 4 };
    
//     if (baseCard) {
//       let epiphany;
//       if (roman && romanToIndex[roman] !== undefined) {
//         epiphany = baseCard.epiphanies[romanToIndex[roman]];
//       }
//       epiphany = epiphany || baseCard.epiphanies[0]; // safe fallback
    
//       return {
//         id: `epiphany-${ref.replace(/\s+/g, '-')}`,
//         name: baseCard.name,
//         image: baseCard.image,
//         cost: epiphany.cost,
//         type: epiphany.type || baseCard.baseType,
//         description: epiphany.description,
//       };
//     }
  
//     const commonKey = Object.keys(commonCards).find(
//       key => key.toLowerCase() === ref.toLowerCase()
//     );
//     if (commonKey) {
//       const card = commonCards[commonKey];
//       return {
//         id: card.id,
//         name: card.name,
//         image: card.image,
//         cost: card.cost,
//         type: card.type,
//         description: card.description,
//       };
//     }
//   }

//   // Define the type for a single deck entry
//   type DeckEntry = {
//     ref: string;
//     count?: number;
//     cardsArray?: typeof uniqueCards;
//   };

//   // Define the type for recommendedDecks
//   type RecommendedDecks = {
//     [key: string]: DeckEntry[];
//   };

//   // Type your recommendedDecks object
//   const recommendedDecks: RecommendedDecks = {
//     "draw-engine": [
//       { ref: "Firing Preparation IV", count: 1 },
//       { ref: "Repose I", count: 4 },
//       { ref: "Pendant of Resolution I", count: 1 },
//       { ref: "Sir Kowalski III", count: 1 },
//       { ref: "Bombardment Prep", count: 1 },
//     ],
//     "mei-lin": [
//       { ref: "Firing Preparation IV", count: 1 },
//       { ref: "Repose I", count: 2 },
//       { ref: "Pendant of Resolution V", count: 3 },
//       { ref: "Sir Kowalski III", count: 1 },
//       { ref: "Bombardment Prep", count: 1 },
//     ],
//   };

//   function generateDeckRows(deckKey: keyof typeof recommendedDecks): { topRow: any[]; bottomRow: any[] } {
//     const spec = recommendedDecks[deckKey] || [];
//     const deck: any[] = [];           // This will hold only the real cards
//     let globalIndex = 0;

//     // Add all real cards (with unique IDs)
//     spec.forEach((entry) => {
//       const { ref, count = 1, cardsArray = uniqueCards } = entry;
//       const baseCard = getEpiphanyFromRef(ref, cardsArray);

//       if (!baseCard) {
//         console.warn(`Card not found: ${ref}`);
//         return;
//       }

//       for (let i = 0; i < count; i++) {
//         deck.push({
//           ...baseCard,
//           id: `${baseCard.id}-${globalIndex++}`,
//         });
//       }
//     });

//     // Build top row → exactly 4 cards + 1 empty on the right
//     const topRow: any[] = [];
//     for (let i = 0; i < 4; i++) {
//       topRow.push(deck[i] || createPlaceholder(`top-${i}`));
//     }
//     topRow.push(createPlaceholder("top-right-empty")); // Always empty

//     // Build bottom row → next 4 cards + 1 empty on the right
//     const bottomRow: any[] = [];
//     for (let i = 0; i < 4; i++) {
//       const card = deck[4 + i];
//       bottomRow.push(card || createPlaceholder(`bottom-${i}`));
//     }
//     bottomRow.push(createPlaceholder("bottom-right-empty")); // Always empty

//     return { topRow, bottomRow };
//   }

//   // Helper function to avoid repeating placeholder object
//   function createPlaceholder(idSuffix: string) {
//     return {
//       id: `placeholder-${idSuffix}`,
//       name: "Placeholder",
//       image: "/placeholder.svg",
//       cost: 0,
//       type: "skill",
//       description: "",
//     };
//   }

//   // Helper function to get rarity color based on card name
//   function getRarityColor(cardName: string): string {
//     if (cardName?.includes("Oni Hunt")) {
//       return "#FFD700"; // Legend - Gold
//     } else if (cardName?.includes("Shadow of the Moon")) {
//       return "#E9A1FC"; // Unique - red
//     } else {
//       return "#6FB0FC"; // Rare - Blue
//     }
//   }

//   // Helper function to get rarity background image based on card name
//   function getRarityBackgroundImage(cardName: string): string {
//     if (cardName?.includes("Oni Hunt")) {
//       return "/images/card/card_title_rarity_legend.png";
//     } else if (cardName?.includes("Shadow of the Moon")) {
//       return "/images/card/card_title_rarity_unique.png";
//     } else {
//       return "/images/card/card_title_rarity_rare.png";
//     }
//   }

//   function CardDisplay({ card }: { card: any }) {
//     const isPlaceholder = card.name === "Placeholder";

//     // Don't render placeholder boxes
//     if (isPlaceholder) {
//       return null;
//     }

//     return (
//       <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-red-400/50 transition-all duration-200">
//         {/* Passion Border */}
//         <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
//           <img src="/images/card/passion-border.png" alt="" className="h-full w-full object-cover" />
//         </div>

//         <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
//           {isPlaceholder ? (
//             <div className="w-full h-full flex flex-col items-center justify-center">
//               <span className="text-sm text-muted-foreground font-semibold">Placeholder</span>
//               <span className="text-xs text-muted-foreground/70">[Empty Slot]</span>
//             </div>
//           ) : (
//             <>
//             <img
//               src={card.image || "/placeholder.svg"}
//               alt={card.name}
//               className="w-full h-full object-cover scale-108"
//             />
//             <div className="absolute inset-0 flex flex-col">
//               {/* Top Section: Cost + Name + Type */}
//               <div className="p-2 pt-1.5 pl-3">
//                 <div className="flex items-start gap-1.5 relative">
//                   {/* Rarity Image */}
//                   <div className="absolute left-0 top-0 z-20 flex items-center" style={{ transform: 'translateX(-18px)' }}>
//                     <img
//                       src={
//                         card.name?.includes("Sir Kowalski")
//                           ? "/images/card/card_rarity_legend.png"
//                           : card.name?.includes("Bombardment Prep")
//                             ? "/images/card/card_rarity_unique.png"
//                             : "/images/card/card_rarity_rare.png"
//                       }
//                       alt=""
//                       className="h-12 sm:h-14 object-contain"
//                     />
//                   </div>
//                   {/* Cost */}
//                   <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
//                     <span
//                       className="font-bold text-4xl scale-100"
//                       style={{
//                         color: "#FFFFFF",
//                         WebkitTextStroke: "1.3px #2D4CAE",
//                         textShadow: `
//                         0 0 2px #5B91FB,
//                         0 0 4px #5B91FB,
//                         0 0 6px #5B91FB,
//                         0 0 8px #5B91FB,
//                         0 0 12px #5B91FB,
//                         0 0 16px #5B91FB,
//                         -1px -1px 0 #5B91FB,
//                          1px -1px 0 #5B91FB,
//                         -1px  1px 0 #5B91FB,
//                          1px  1px 0 #5B91FB,
//                         -2px -2px 4px rgba(91, 145, 251, 0.8),
//                          2px -2px 4px rgba(91, 145, 251, 0.8),
//                         -2px  2px 4px rgba(91, 145, 251, 0.8),
//                          2px  2px 4px rgba(91, 145, 251, 0.8)
//                       `,
//                       }}
//                     >
//                       {card.cost}
//                     </span>
//                     <div
//                       className="w-full h-0.5 mt-0.5 scale-x-75"
//                       style={{
//                         backgroundColor: "#B6C4F9",
//                         boxShadow: `
//                           0 0 2px #5B91FB,
//                           0 0 4px #5B91FB,
//                           0 0 6px #5B91FB,
//                           0 0 8px rgba(91, 145, 251, 0.6),
//                           inset 0 1px 0 rgba(255, 255, 255, 0.3)
//                         `,
//                       }}
//                     />
//                   </div>
//                   {/* Name and Type */}
//                   <div className="flex-1 pt-0.5 min-w-0">
//                     <div className="relative inline-block">
//                       {/* Background Image - can be positioned separately */}
//                       <div
//                         className="absolute"
//                         style={{
//                           backgroundImage: `url(${getRarityBackgroundImage(card.name)})`,
//                           backgroundRepeat: "no-repeat",
//                           backgroundPosition: "left center",
//                           backgroundSize: "100%",
//                           top: 10,
//                           left: -50,
//                           right: 0,
//                           bottom: 0,
//                           height: "50%",
//                           width: "700%",
//                         }}
//                       />
//                       {/* Text */}
//                       <h5
//                         className="relative font-bold leading-tight drop-shadow-lg"
//                         style={{
//                           color: getRarityColor(card.name),
//                           fontSize: "clamp(0.70rem, 2.5vw, 1.25rem)",
//                           padding: "5px 0px",
//                           textShadow: `
//                         -1px -1px 0 #000,
//                          1px -1px 0 #000,
//                         -1px  1px 0 #000,
//                          1px  1px 0 #000
//                       `,
//                           transform: "scaleX(1)",
//                           transformOrigin: "left",
//                           maxWidth: "100%",
//                           whiteSpace: "wrap",
//                           overflow: "visible",
//                           textOverflow: "ellipsis",
//                         }}
//                       >
//                         {card.name}
//                       </h5>
//                     </div>
//                       <div className="flex items-center gap-1 -mt-1.5">
//                         <img
//                           src={
//                             card.type === "attack"
//                               ? "/images/icon-category-card-attack.webp"
//                               : card.type === "skill"
//                               ? "/images/icon-category-card-skill.webp"
//                               : "/images/icon-category-card-upgrade.webp"
//                           }
//                           alt={card.type}
//                           className="w-4 h-4 sm:w-5 sm:h-5"
//                         />
//                         <span
//                           className="text-white/100 text-[14px] font-large capitalize drop-shadow "
//                           style={{
//                             padding: "0px 0px",
//                             fontSize: "clamp(0.65rem, 2vw, 0.875rem)",
//                             textShadow: `
//                         -1px -1px 0 #000,
//                          1px -1px 0 #000,
//                         -1px  1px 0 #000,
//                          1px  1px 0 #000
//                       `,
//                           }}
//                         >
//                           {card.type}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Description Section */}
//                 {card.description && (
//                   <div className="mt-auto p-2.5 pl-3 py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
//                     {/* Card Frame Spark */}
//                     <img
//                       src="/images/card/card_frame_spark.png"
//                       alt=""
//                       className="w-1/2 mb-0 drop-shadow-2xl"
//                     />
//                     {(() => {
//                       const { bracketedText, remainingText } = parseDescription(card.description)
//                       return (
//                         <>
//                           {bracketedText && (
//                             <p
//                               className="text-center font-medium text-sm leading-snug m-0"
//                               style={{ color: "#e3b46c" }}
//                             >
//                               {bracketedText}
//                             </p>
//                           )}
//                           <p
//                             className="text-white text-center text-sm leading-snug m-0 whitespace-pre-line"
//                             dangerouslySetInnerHTML={{
//                               __html: remainingText
//                                 .replace(
//                                   /(\d+%?)/g,
//                                   '<span style="color: #7ce2fb">$1</span>',
//                                 )
//                                 .replace(
//                                   /Shadow of the\s*Moon\+/gi,
//                                   '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
//                                 ).replace(
//                                   /Moonslash/gi,
//                                   '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
//                                 ),
//                             }}
//                           />
//                         </>
//                       )
//                     })()}
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     );
//   }

//   const parseDescription = (desc: string) => {
//     const bracketMatch = desc.match(/\[([^\]]+)\]/)
//     if (bracketMatch) {
//       const bracketedText = bracketMatch[0]
//       const remainingText = desc.replace(bracketMatch[0], "").trim()
//       return { bracketedText, remainingText }
//     }
//     return { bracketedText: null, remainingText: desc }
//   }

//   const getTierColor = (tier: string) => {
//     switch (tier) {
//       case "S+":
//         return `
//           bg-black/80
//           text-pink-400
//           font-black text-xs tracking-widest
//           border border-pink-500/60
//           shadow-lg shadow-pink-500/30
//           ring-1 ring-pink-500/40
//           ring-offset-1 ring-offset-pink-900/20
//           relative overflow-hidden
//         `
  
//       case "S":
//         return `
//           bg-black/80
//           text-orange-400
//           font-bold text-xs tracking-wider
//           border border-orange-500/60
//           shadow-lg shadow-orange-500/25
//           ring-1 ring-orange-500/30
//           ring-offset-1 ring-offset-orange-900/20
//         `
  
//       case "A":
//         return `
//           bg-black/70
//           text-red-300
//           font-bold text-xs tracking-wide
//           border border-red-500/50
//           shadow-md shadow-red-500/20
//           ring-1 ring-red-500/20
//         `
  
//       case "B":
//         return `
//           bg-black/60
//           text-cyan-300
//           font-semibold text-xs
//           border border-cyan-600/40
//           shadow shadow-cyan-500/10
//         `
  
//       case "C":
//         return `
//           bg-black/50
//           text-emerald-400
//           font-medium text-xs
//           border border-emerald-700/30
//         `
  
//       case "Situational":
//       case "Niche":
//         return `
//           bg-gray-900/80
//           text-gray-400
//           font-medium text-xs
//           border border-gray-700/50
//         `
  
//       default:
//         return "bg-gray-900/70 text-gray-600 border border-gray-800/50 text-xs"
//     }
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b border-border bg-card backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-red-400 via-red-400 to-cyan-400 bg-clip-text text-transparent">
//                 Veronica Guide
//               </h1>
//             </div>
//             <Link
//               href="/guides"
//               className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:border-red-400/40 transition-all duration-200"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               <span className="text-sm font-medium">Back to Characters</span>
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         <div className="flex gap-6">
//           {/* Sticky Table of Contents */}
//           <aside className="hidden lg:block w-64 shrink-0">
//             <nav className="sticky top-4 rounded-lg border border-border bg-card p-4">
//               <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
//               <ul className="space-y-1.5">
//                 {sections.map((section) => (
//                   <li key={section.id}>
//                     <a
//                       href={`#${section.id}`}
//                       className={`text-sm text-muted-foreground hover:text-red-400 transition-colors block py-1 ${
//                         section.level === 2 ? "pl-4" : ""
//                       }`}
//                     >
//                       {section.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </aside>

//           {/* Main Content */}
//           <div className="flex-1 space-y-8">
//             {/* 1. Overview */}
//             <section id="overview" className="hidden lg:block rounded-lg border border-border bg-card p-8 scroll-mt-6">
//             <h2 className="text-2xl font-bold mb-6 text-red-400">1. Overview</h2>
//               <div className="space-y-4">
//                 <div className="flex flex-wrap gap-3 mb-4">
//                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/50">
//                     <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-5 h-5" />
//                     <span className="text-red-400 text-sm font-medium">Passion</span>
//                   </div>
                  
//                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black-500/20 border border-black-500/40">
//                     <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-5 h-5" />
//                     <span className="text-black-400 text-sm font-medium">Ranger</span>
//                   </div>
//                 </div>

//                 <div className="rounded-sm bg-background/50 border border-border">
//                 <div className="relative w-full h-[400px] bg-gradient-to-br from-red-500/20 to-black/30 flex items-center justify-center warp">
//                 <img
//                   src={`/images/characters/veronica.webp`}
//                   alt={`veronica full artwork`}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//                 </div>
//               </div>
//             </section>

//             {/* 2. Base Cards */}
//             <section id="card-epiphany" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
//             <h2 className="text-2xl font-bold mb-6 text-red-400">2. Base Cards</h2>
//               <p className="text-muted-foreground mb-6">
//               S+ (Best), S (Excellent), A (Strong), B (Average), C (Low Impact), Situational (Niche-use only).
//               <br />
//               Click a base card to view its epiphanies.
//               </p>

//               {/* Base Cards Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {uniqueCards.map((cardData) => {
//                   // Use first epiphany's cost and type, or fallback to baseType
//                   const baseCost = cardData.epiphanies[0]?.cost ?? 0
//                   const baseType = cardData.epiphanies[0]?.type ?? cardData.baseType
                  
//                   return (
//                     <Dialog 
//                       key={cardData.id} 
//                       open={selectedCardForEpiphanies?.id === cardData.id} 
//                       onOpenChange={(open) => {
//                         if (open) {
//                           setSelectedCardForEpiphanies(cardData)
//                         } else {
//                           setSelectedCardForEpiphanies(null)
//                         }
//                       }}
//                     >
//                       <DialogTrigger asChild>
//                         <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-red-400/50 transition-all duration-200 cursor-pointer">
//                           {/* Void Border */}
//                           <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
//                             <img
//                               src="/images/card/passion-border.png"
//                               alt=""
//                               className="h-full w-full object-cover"
//                             />
//                           </div>

//                           {/* Card Image */}
//                           <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
//                             <img
//                               src={cardData.image || "/placeholder.svg"}
//                               alt={cardData.name}
//                               className="w-full h-full object-cover scale-108"
//                             />

//                             {/* Card Info Overlay */}
//                             <div className="absolute inset-0 flex flex-col">
//                               {/* Top Section */}
//                               <div className="p-2 pt-1.5 pl-3">
//                                 <div className="flex items-start gap-1.5 relative">
//                                   {/* Rarity Image */}
//                                   <div className="absolute left-0 top-0 z-20 flex items-center" style={{ transform: 'translateX(-18px)' }}>
//                                     <img
//                                       src={
//                                         cardData.name === "Oni Hunt"
//                                           ? "/images/card/card_rarity_legend.png"
//                                           : cardData.name === "Shadow of the Moon"
//                                             ? "/images/card/card_rarity_unique.png"
//                                             : "/images/card/card_rarity_rare.png"
//                                       }
//                                       alt=""
//                                       className="h-12 sm:h-14 object-contain"
//                                     />
//                                   </div>
//                                   {/* Cost */}
//                                   <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
//                                     <span
//                                       className="font-bold text-4xl scale-100"
//                                       style={{
//                                         color: "#FFFFFF",
//                                         WebkitTextStroke: "1.3px #2D4CAE",
//                                         textShadow: `
//                                         0 0 2px #5B91FB,
//                                         0 0 4px #5B91FB,
//                                         0 0 6px #5B91FB,
//                                         0 0 8px #5B91FB,
//                                         0 0 12px #5B91FB,
//                                         0 0 16px #5B91FB,
//                                         -1px -1px 0 #5B91FB,
//                                          1px -1px 0 #5B91FB,
//                                         -1px  1px 0 #5B91FB,
//                                          1px  1px 0 #5B91FB,
//                                         -2px -2px 4px rgba(91, 145, 251, 0.8),
//                                          2px -2px 4px rgba(91, 145, 251, 0.8),
//                                         -2px  2px 4px rgba(91, 145, 251, 0.8),
//                                          2px  2px 4px rgba(91, 145, 251, 0.8)
//                                       `,
//                                       }}
//                                     >
//                                       {baseCost}
//                                     </span>
//                                     <div
//                                       className="w-full h-0.5 mt-0.5 scale-x-75"
//                                       style={{
//                                         backgroundColor: "#B6C4F9",
//                                         boxShadow: `
//                                           0 0 2px #5B91FB,
//                                           0 0 4px #5B91FB,
//                                           0 0 6px #5B91FB,
//                                           0 0 8px rgba(91, 145, 251, 0.6),
//                                           inset 0 1px 0 rgba(255, 255, 255, 0.3)
//                                         `,
//                                       }}
//                                     />
//                                   </div>

//                                   {/* Name and Type */}
//                                   <div className="flex-1 pt-0.5">
//                                     <div className="relative w-full">
//                                       {/* Background Image - can be positioned separately */}
//                                       <div
//                                         className="absolute"
//                                         style={{
//                                           backgroundImage: `url(${getRarityBackgroundImage(cardData.name)})`,
//                                           backgroundRepeat: "no-repeat",
//                                           backgroundPosition: "left center",
//                                           backgroundSize: "100%",
//                                           left: -50,
//                                           right: 0, 
//                                           top: 10,
//                                           bottom: 0,
//                                           height: "50%",
                                          
//                                         }}
//                                       />
//                                       {/* Text */}
//                                       <h5
//                                         className="relative font-bold text-[20px] leading-tight drop-shadow-lg"
//                                         style={{
//                                           color: getRarityColor(cardData.name),
//                                           padding: "3px 4px",
//                                           textShadow: `
//                                         -1px -1px 0 #000,
//                                          1px -1px 0 #000,
//                                         -1px  1px 0 #000,
//                                          1px  1px 0 #000
//                                       `,
//                                           transform: "scaleX(1)",
//                                           transformOrigin: "left",
//                                           maxWidth: "180%",
//                                           whiteSpace: "nowrap",
//                                           overflow: "hidden",
//                                         }}
//                                       >
//                                         {cardData.name}
//                                       </h5>
//                                     </div>
//                                     <div className="flex items-center gap-1 -mt-2.5">
//                                       <img
//                                         src={
//                                           baseType === "attack"
//                                             ? "/images/icon-category-card-attack.webp"
//                                             : baseType === "skill"
//                                               ? "/images/icon-category-card-skill.webp"
//                                               : "/images/icon-category-card-upgrade.webp"
//                                         }
//                                         alt={baseType}
//                                         className="w-5 h-5"
//                                       />
//                                       <span
//                                         className="text-white/100 text-[14px] font-large capitalize drop-shadow "
//                                         style={{
//                                           textShadow: `
//                                         -1px -1px 0 #000,
//                                          1px -1px 0 #000,
//                                         -1px  1px 0 #000,
//                                          1px  1px 0 #000
//                                       `,
//                                         }}
//                                       >
//                                         {baseType}
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>

//                               {/* Description Section */}
//                               {cardData.baseDescription && (
//                                 <div className="mt-auto p-2.5 pl-3 py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
//                                   {/* Card Frame Spark Disabled */}
//                                   <img
//                                     src="/images/card/card_frame_spark_dis.png"
//                                     alt=""
//                                     className="w-1/2 mb-0 drop-shadow-2xl"
//                                   />
//                                   {(() => {
//                                     const { bracketedText, remainingText } = parseDescription(cardData.baseDescription)
//                                     return (
//                                       <>
//                                         {bracketedText && (
//                                           <p
//                                             className="text-center font-medium text-sm leading-snug m-0"
//                                             style={{ color: "#e3b46c" }}
//                                           >
//                                             {bracketedText}
//                                           </p>
//                                         )}
//                                         <p
//                                           className="text-white text-center text-sm leading-snug m-0 whitespace-pre-line"
//                                           dangerouslySetInnerHTML={{
//                                             __html: remainingText
//                                               .replace(
//                                                 /(\d+%?)/g,
//                                                 '<span style="color: #7ce2fb">$1</span>',
//                                               )
//                                               .replace(
//                                                 /Shadow of the\s*Moon\+/gi,
//                                                 '<span style="color: #C8FF2E; text-decoration: underline; text-underline-offset: 2px">$&</span>',
//                                               ).replace(
//                                                 /Moonslash/gi,
//                                                 '<span style="color: #C8FF2E; text-decoration: underline; text-underline-offset: 2px">$&</span>',
//                                               ),
//                                           }}
//                                         />
//                                       </>
//                                     )
//                                   })()}
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </DialogTrigger>

//                       <DialogContent className="!w-[95vw] !max-w-6xl max-h-[90vh] overflow-y-auto scrollbar-none p-3 sm:p-4 md:p-6 m-2 sm:m-4">
//                         <DialogHeader>
//                           <DialogTitle className="text-xl sm:text-2xl text-red-400">
//                             {cardData.name} - Epiphanies
//                           </DialogTitle>
//                         </DialogHeader>
                        
//                         {/* Epiphanies Grid */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-4 sm:mt-6">
//                           {cardData.epiphanies.map((epiphany, index) => (
//                             <div key={index} className="flex flex-col gap-2 sm:gap-3">
//                               {/* Card Display */}
//                               <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-red-400/50 transition-all duration-200 w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] mx-auto">
//                                 {/* Void Border */}
//                                 <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
//                                   <img
//                                     src="/images/card/passion-border.png"
//                                     alt=""
//                                     className="h-full w-full object-cover"
//                                   />
//                                 </div>

//                                 {/* Card Image */}
//                                 <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
//                                   <img
//                                     src={cardData.image || "/placeholder.svg"}
//                                     alt={cardData.name}
//                                     className="w-full h-full object-cover scale-108"
//                                   />

//                                   {/* Card Info Overlay */}
//                                   <div className="absolute inset-0 flex flex-col justify-end">
//                                     {/* Top Section */}
//                                     <div className="p-2 pt-1.5 pl-3">
//                                       <div className="flex items-start gap-1.5 relative">
//                                         {/* Rarity Image */}
//                                         <div className="absolute left-0 top-0 z-20 flex items-center" style={{ transform: 'translateX(-18px)' }}>
//                                           <img
//                                             src={
//                                               cardData.name === "Oni Hunt"
//                                                 ? "/images/card/card_rarity_legend.png"
//                                                 : cardData.name === "Shadow of the Moon"
//                                                   ? "/images/card/card_rarity_unique.png"
//                                                   : "/images/card/card_rarity_rare.png"
//                                             }
//                                             alt=""
//                                             className="h-12 sm:h-14 object-contain"
//                                           />
//                                         </div>
//                                         {/* Cost */}
//                                         <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
//                                           <span
//                                             className="font-bold text-4xl scale-100"
//                                             style={{
//                                               color: "#FFFFFF",
//                                               WebkitTextStroke: "1.3px #2D4CAE",
//                                               textShadow: `
//                                               0 0 2px #5B91FB,
//                                               0 0 4px #5B91FB,
//                                               0 0 6px #5B91FB,
//                                               0 0 8px #5B91FB,
//                                               0 0 12px #5B91FB,
//                                               0 0 16px #5B91FB,
//                                               -1px -1px 0 #5B91FB,
//                                                1px -1px 0 #5B91FB,
//                                               -1px  1px 0 #5B91FB,
//                                                1px  1px 0 #5B91FB,
//                                               -2px -2px 4px rgba(91, 145, 251, 0.8),
//                                                2px -2px 4px rgba(91, 145, 251, 0.8),
//                                               -2px  2px 4px rgba(91, 145, 251, 0.8),
//                                                2px  2px 4px rgba(91, 145, 251, 0.8)
//                                             `,
//                                             }}
//                                           >
//                                             {epiphany.cost}
//                                           </span>
//                                           <div
//                                             className="w-full h-0.5 mt-0.5 scale-x-75"
//                                             style={{
//                                               backgroundColor: "#B6C4F9",
//                                               boxShadow: `
//                                                 0 0 2px #5B91FB,
//                                                 0 0 4px #5B91FB,
//                                                 0 0 6px #5B91FB,
//                                                 0 0 8px rgba(91, 145, 251, 0.6),
//                                                 inset 0 1px 0 rgba(255, 255, 255, 0.3)
//                                               `,
//                                             }}
//                                           />
//                                         </div>

//                                         {/* Name and Type */}
//                                         <div className="flex-1 pt-0.5">
//                                           <div className="relative inline-block">
//                                             {/* Background Image - can be positioned separately */}
//                                             <div
//                                               className="absolute"
//                                               style={{
//                                                 backgroundImage: `url(${getRarityBackgroundImage(cardData.name)})`,
//                                                 backgroundRepeat: "no-repeat",
//                                                 backgroundPosition: "left center",
//                                                 backgroundSize: "contain",
//                                                 top: 10,
//                                                 left: -50,

//                                                 bottom: 0,
//                                                 height: "50%",
//                                                 width: "700%",
//                                               }}
//                                             />
//                                             {/* Text */}
//                                             <h5
//                                               className="relative font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-tight drop-shadow-lg"
//                                               style={{
//                                                 color: getRarityColor(cardData.name),
//                                                 padding: "2px 4px",
//                                                 textShadow: `
//                                               -1px -1px 0 #000,
//                                                1px -1px 0 #000,
//                                               -1px  1px 0 #000,
//                                                1px  1px 0 #000
//                                             `,
//                                                 transform: "scaleX(0.7)",
//                                                 transformOrigin: "left",
//                                                 maxWidth: "180%",
//                                                 whiteSpace: "nowrap",
//                                                 overflow: "hidden",
//                                               }}
//                                             >
//                                               {cardData.name}
//                                             </h5>
//                                           </div>
//                                           <div className="flex items-center gap-1 -mt-2.5">
//                                             <img
//                                               src={
//                                                 epiphany.type === "attack"
//                                                   ? "/images/icon-category-card-attack.webp"
//                                                   : epiphany.type === "skill"
//                                                     ? "/images/icon-category-card-skill.webp"
//                                                     : "/images/icon-category-card-upgrade.webp"
//                                               }
//                                               alt={epiphany.type}
//                                               className="w-4 h-4 sm:w-5 sm:h-5"
//                                             />
//                                             <span
//                                               className="text-white/100 text-[12px] sm:text-[13px] md:text-[14px] font-large capitalize drop-shadow "
//                                               style={{
//                                                 textShadow: `
//                                               -1px -1px 0 #000,
//                                                1px -1px 0 #000,
//                                               -1px  1px 0 #000,
//                                                1px  1px 0 #000
//                                             `,
//                                               }}
//                                             >
//                                               {epiphany.type}
//                                             </span>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>

//                                     <div className="mt-auto p-2 sm:p-2.5 pl-2 sm:pl-3 py-3 sm:py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
//                                       {/* Card Frame Spark */}
//                                       <img
//                                         src="/images/card/card_frame_spark.png"
//                                         alt=""
//                                         className="w-1/2 mb-0 drop-shadow-2xl"
//                                       />
//                                       {(() => {
//                                         const { bracketedText, remainingText } = parseDescription(epiphany.description)
//                                         return (
//                                           <>
//                                             {bracketedText && (
//                                               <p
//                                                 className="text-center font-medium text-xs sm:text-sm leading-snug m-0"
//                                                 style={{ color: "#e3b46c" }}
//                                               >
//                                                 {bracketedText}
//                                               </p>
//                                             )}
//                                             <p
//                                                     className="text-white text-center text-xs sm:text-sm leading-snug m-0 whitespace-pre-line"
//                                                     dangerouslySetInnerHTML={{
//                                                         __html: remainingText
//                                                             .replace(
//                                                                 /(\d+%?)/g,
//                                                                 '<span style="color: #7ce2fb">$1</span>',
//                                                             )
//                                                             .replace(
//                                                                 /Shadow of the\s*Moon\+/gi,
//                                                                 '<span style="color: #C8FF2E; text-decoration: underline; text-underline-offset: 2px">$&</span>',
//                                                             ).replace(
//                                                                 /Moonslash/gi,
//                                                                 '<span style="color: #C8FF2E; text-decoration: underline; text-underline-offset: 2px">$&</span>',
//                                                             ),
//                                                     }}
//                                                 />
//                                           </>
//                                         )
//                                       })()}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>

//                         {/* Epiphany Explanations */}
//                         <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
//                           <h3 className="text-lg sm:text-xl font-bold text-red-300">Epiphany Explanations</h3>
//                           {cardData.epiphanies.map((epiphany, index) => (
//                             <div key={index} className="p-3 sm:p-4 rounded-lg bg-background/50 border border-border">
//                               <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                                 <span
//                                   className={`px-3 py-1 rounded-full text-xs font-bold w-fit ${getTierColor(epiphany.tier)}`}
//                                 >
//                                   {epiphany.tier} Tier
//                                 </span>
//                                 <span className="text-xs sm:text-sm font-semibold text-foreground">
//                                   {epiphany.id}
//                                 </span>
//                               </div>
//                               <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{epiphany.reasoning}</p>
//                             </div>
//                           ))}
//                         </div>

//                         {/* Divine Epiphanies */}
//                         {cardData.divineEpiphanies && cardData.divineEpiphanies.length > 0 && (
//                           <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
//                             <h3 className="text-lg sm:text-xl font-bold text-red-300">Divine Epiphanies</h3>
//                             <p className="text-xs sm:text-sm text-muted-foreground mb-4">
//                               Good Divine Epiphanies that this card can roll:
//                             </p>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                               {cardData.divineEpiphanies.map((divineEpiphany: any, index: number) => (
//                                 <div key={index} className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/40">
//                                   <div className="flex items-center gap-2 mb-2">
//                                     {divineEpiphany.icon && (
//                                       <img
//                                         src={divineEpiphany.icon}
//                                         alt={divineEpiphany.name || "Divine Epiphany"}
//                                         className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
//                                       />
//                                     )}
//                                     <span className="px-2 py-1 rounded-full text-xs font-bold bg-red-500/30 text-red-200 border border-red-400/50">
//                                       Divine
//                                     </span>
//                                     {divineEpiphany.name && (
//                                       <span className="text-xs sm:text-sm font-semibold text-red-200">
//                                         {divineEpiphany.name}
//                                       </span>
//                                     )}
//                                   </div>
//                                   <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
//                                     {divineEpiphany.description}
//                                   </p>
//                                   {divineEpiphany.reasoning && (
//                                     <p className="text-xs text-red-300/80 mt-2 italic leading-relaxed">
//                                       {divineEpiphany.reasoning}
//                                     </p>
//                                   )}
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </DialogContent>
//                     </Dialog>
//                   )
//                 })}
//               </div>
//             </section>

//             {/* 3. Recommended Save Data */}
//             <section id="recommended-save-data" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
//             <h2 className="text-2xl font-bold mb-6 text-red-400">3. Recommended Save Data</h2>
//               <p className="text-muted-foreground mb-6">
//                 These are examples - you can change based on your playstyle.
//               </p>

//               <div className="space-y-12">
//                 {/* Build 1 */}
//                 <div className="space-y-6">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-xl font-bold text-red-300">Draw Engine</h3>
//                     <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
//                       [XXX]
//                     </span>
//                   </div>

//                   <p className="text-sm text-muted-foreground leading-relaxed">
                    
//                     <br />

//                     <br />
              
//                   </p>

//                   {(() => {
//                     const { topRow, bottomRow } = generateDeckRows("draw-engine");
//                     return (
//                       <>
//                         {/* Top Row */}
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto justify-items-center">
//                           {topRow.map((card, index) => (
//                             <CardDisplay key={card.id || index} card={card} />
//                           ))}
//                         </div>

//                         {/* Bottom Row */}
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto justify-items-center">
//                           {bottomRow.map((card, index) => (
//                             <CardDisplay key={card.id || index} card={card} />
//                           ))}
//                         </div>
//                       </>
//                     );
//                   })()}
//                 </div>

//                 {/* Build 2 */}
//                 <div className="space-y-6">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-xl font-bold text-red-300">Passion Stacking</h3>
//                     <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
//                       [XXX]
//                     </span>
//                   </div>

//                   <p className="text-sm text-muted-foreground leading-relaxed">
                    
//                   </p>

//                   {(() => {
//                     const { topRow, bottomRow } = generateDeckRows("mei-lin");
//                     return (
//                       <>
//                         {/* Top Row */}
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto justify-items-center">
//                           {topRow.map((card, index) => (
//                             <CardDisplay key={card.id || index} card={card} />
//                           ))}
//                         </div>

//                         {/* Bottom Row */}
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto justify-items-center">
//                           {bottomRow.map((card, index) => (
//                             <CardDisplay key={card.id || index} card={card} />
//                           ))}
//                         </div>
//                       </>
//                     );
//                   })()}
//                 </div>
//               </div>
//             </section>

//             {/* 3.1. Equipments */}
//             <section id="equipments" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
//               <h2 className="text-2xl font-bold mb-6 text-red-400">3.1. Equipments</h2>
//               <p className="text-muted-foreground mb-6 whitespace-pre-line">
//                 These are her best equipment options, only weapon is listed by priority, you usually can’t equip them all at once.
//                 <br/>
//                 Only one unique item per character or they come from different Chaos Manifestations.
//                 <br/>
//                 Hover over the tooltip to see each item’s source.
//               </p>

//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {/* Weapon Category */}
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-center gap-2 mb-3">
//                     <h3 className="text-lg font-bold text-orange-300">Weapon</h3>
//                   </div>

//                 {/* Best in Slot Weapon */}
//                 <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                   <GearTooltip text={`Cthulu Monster`} />

//                   <div className="relative w-21 h-32 flex-shrink-1">
//                     <img
//                       src="/images/bg_equipment_rarity_unique.webp"
//                       alt="Unique Rarity"
//                       className="w-full h-full object-contain"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <img
//                         src="/images/gear/Intellect-Of-Discord.webp"
//                         alt="Intellect of Discord"
//                         className="w-16 h-16 object-contain relative z-10"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
//                       Intellect of Discord
//                     </h4>
//                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                       <span>Attack</span>
//                       <span className="text-white font-semibold">+82</span>
//                     </div>
//                     <p className="text-sm text-muted-foreground leading-relaxed">
//                       +<span className="text-[#FF8C00]">18</span>% Attack<br/>
//                       On Ravage, decrease Stress of allies by <span className="text-[#FF8C00]">1</span>
//                     </p>
//                   </div>
//                 </div>

//                 {/* Show More Weapons Modal */}
//                 <Dialog>
//                   <DialogTrigger asChild>
//                   <div className="flex justify-center w-full">
//                     <button
//                       className="flex items-center justify-center gap-2 text-xs w-40
//                                 rounded-lg overflow-hidden border border-border bg-card 
//                                 hover:border-red-400 transition-all duration-300 
//                                 hover:scale-105 hover:shadow-lg hover:shadow-red-400/20 py-1 mt-3"
//                     >
//                       Show More
//                       <ChevronDown className="h-3 w-3"/>
//                     </button>
//                     </div>
//                   </DialogTrigger>

//                   <DialogContent className="max-w-3xl w-full bg-gray-900 p-6 rounded-lg overflow-y-auto max-h-[80vh] scrollbar-none">
//                   <DialogHeader>
//                     <DialogTitle className="text-lg font-bold">
//                       Alternative Weapon
//                     </DialogTitle>
//                     <DialogDescription className="text-sm text-gray-300">
//                       Scroll to see more options, listed by priority.
//                     </DialogDescription>
//                   </DialogHeader>

//                     <div className="space-y-4 mt-4">


//                       {/* 2nd Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Cthulu Monster`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_unique.webp"
//                             alt="Unique Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Tentacles-Of-Chaos.webp" alt="Tentacles of Chaos" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
//                             Tentacles of Chaos
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Attack</span>
//                             <span className="text-white font-semibold">+82</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             +<span className="text-[#FF8C00]">8</span>% ally Attack<br/>
//                             Upon enemy Defeat, -<span className="text-[#FF8C00]">2</span> Stress to the Combatant<br/> with the highest Stress
//                           </p>
//                         </div>
//                       </div>

//                       {/* 3rd Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`City of Mist
//                       Laboratory 0`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_unique.webp"
//                             alt="Unique Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Foggy-Crystal-Ball.webp" alt="Foggy Crystal Ball" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
//                             Foggy Crystal Ball
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Attack</span>
//                             <span className="text-white font-semibold">+82</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             Increase Damage Amount of Attack Cards with a
//                             <br />
//                             Cost of <span className="text-[#FF8C00]">0</span> by <span className="text-[#FF8C00]">40</span>%
//                           </p>
//                         </div>
//                       </div>

//                       {/* 4th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Seasonal Dellang Shop`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_legend.webp"
//                             alt="Legend Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/W-52-Dopamine-Injector.webp" alt={`W-52 "Dopamine Injector"`} className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
//                             W-52 "Dopamine Injector"
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Attack</span>
//                             <span className="text-white font-semibold">+82</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             When Drawing by an ability, increase Damage Amount by <span className="text-[#FF8C00]">20</span>%
//                             for <span className="text-[#FF8C00]">1</span> turn (<span className="text-[#FF8C00]">2</span> times per turn)
//                           </p>
//                         </div>
//                       </div>

//                       {/* 5th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Laboratory 0`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_legend.webp"
//                             alt="Legend Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Mutant-Predator-Spike.webp" alt={`Mutant Predator Spike`} className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
//                             Mutant Predator Spike
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Attack</span>
//                             <span className="text-white font-semibold">+82</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             When there are <span className="text-[#FF8C00]">4</span> or more cards in hand<br/>increase Damage Amount by <span className="text-[#FF8C00]">30</span>%
//                           </p>
//                         </div>
//                       </div>

//                       {/* 6th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Dellang Shop`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_legend.webp"
//                             alt="Legend Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Second-Method.webp" alt="Second Method" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
//                             Second Method
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Attack</span>
//                             <span className="text-white font-semibold">+82</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             Extra Attack damage +<span className="text-[#FF8C00]">35</span>%
//                           </p>
//                         </div>
//                       </div>

//                       {/* 7th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Dellang Shop`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_legend.webp"
//                             alt="Legend Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/RFS-17.webp" alt="RFS-17" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
//                             RFS-17
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Attack</span>
//                             <span className="text-white font-semibold">+82</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             +<span className="text-[#FF8C00]">10</span>% Critical Chance of Attack Cards with cost <span className="text-[#FF8C00]">0</span>
//                           </p>
//                         </div>
//                       </div>

//                       {/* 8th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Dellang Shop`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_rare.webp"
//                             alt="Rare Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Obsidian-Sword.webp" alt="Obsidian Sword" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(51, 160, 243)" }}>
//                             Obsidian Sword
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Attack</span>
//                             <span className="text-white font-semibold">+82</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             Increase damage amount by <span className="text-[#FF8C00]">12</span>%
//                           </p>
//                         </div>
//                       </div>


                    
//                     </div>
                    
//                   </DialogContent>
//                 </Dialog>
//                 </div>

//                 {/* Armor Category */}
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-center gap-2 mb-3">
//                     <h3 className="text-lg font-bold text-blue-300">Armor</h3>
//                   </div>

//                 {/* Best in Slot Armor */}
//                 <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                   <GearTooltip text={`City of Mist
//                     Laboratory 0`} />

//                   <div className="relative w-21 h-32 flex-shrink-1">
//                     <img
//                       src="/images/bg_equipment_rarity_unique.webp"
//                       alt="Unique Rarity"
//                       className="w-full h-full object-contain"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <img
//                         src="/images/gear/Fragment-of-the-Empty-Void.webp"
//                         alt="Fragment of the Empty Void"
//                         className="w-16 h-16 object-contain relative z-10"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
//                       Fragment of the Empty Void
//                     </h4>
//                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                       <span>Defense</span>
//                       <span className="text-white font-semibold">+31</span>
//                     </div>
//                     <p className="text-sm text-muted-foreground leading-relaxed">
//                       At the start of battle, Discard up to <span className="text-[#FF8C00]">3</span> cards, Draw equal to the number
//                     </p>
//                   </div>
//                 </div>

//                 {/* Show More Armor Modal */}
//                 <Dialog>
//                   <DialogTrigger asChild>
//                   <div className="flex justify-center w-full">
//                     <button
//                       className="flex items-center justify-center gap-2 text-xs w-40
//                                 rounded-lg overflow-hidden border border-border bg-card 
//                                 hover:border-red-400 transition-all duration-300 
//                                 hover:scale-105 hover:shadow-lg hover:shadow-red-400/20 py-1 mt-3"
//                     >
//                       Show More
//                       <ChevronDown className="h-3 w-3"/>
//                     </button>
//                     </div>
//                   </DialogTrigger>

//                   <DialogContent className="max-w-3xl w-full bg-gray-900 p-6 rounded-lg overflow-y-auto max-h-[80vh] scrollbar-none">
//                   <DialogHeader>
//                     <DialogTitle className="text-lg font-bold">
//                       Alternative Armor
//                     </DialogTitle>
//                     <DialogDescription className="text-sm text-gray-300">
//                       Scroll to see more options.
//                     </DialogDescription>
//                   </DialogHeader>

//                     <div className="space-y-4 mt-4">

//                       {/* 2nd Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Laboratory 0`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_legend.webp"
//                             alt="Legend Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Rocket-Adorned-Cape.webp" alt="Rocket-Adorned Cape" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
//                             Rocket-Adorned Cape
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Defense</span>
//                             <span className="text-white font-semibold">+31</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             At the start of the battle,<br/> <span className="text-[#FF8C00]">1</span> Damage Reduction and Draw <span className="text-[#FF8C00]">1</span>
//                           </p>
//                         </div>
//                       </div>

//                       {/* 3rd Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                       <GearTooltip text={`The Blue Pot
//                           City of Mist
//                           Laboratory 0`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_legend.webp"
//                             alt="Legend Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Shield-of-the-Watcher.webp" alt="Shield of the Watcher" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
//                             Shield of the Watcher
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Defense</span>
//                             <span className="text-white font-semibold">+31</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             When taking Damage, <span className="text-[#FF8C00]">1</span> Mark on the attacker
//                           </p>
//                         </div>
//                       </div>

//                       {/* 4th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Laboratory 0`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_legend.webp"
//                             alt="Legend Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Wings-of-Freedom.webp" alt="Wings of Freedom" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
//                             Wings of Freedom
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Defense</span>
//                             <span className="text-white font-semibold">+31</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                            When hit, increase Damage Amount <span className="text-[#FF8C00]">10</span>% <br/>(can stack up to <span className="text-[#FF8C00]">3</span> times)
//                           </p>
//                         </div>
//                       </div>

//                       {/* 5th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                        <GearTooltip text={`Seasonal Dellang Shop`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_rare.webp"
//                             alt="Rare Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Brainwave-Blocking-Helmet.webp" alt="Brainwave-Blocking Helmet" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(51, 160, 243)" }}>
//                             Brainwave-Blocking Helmet
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Defense</span>
//                             <span className="text-white font-semibold">+31</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             When Drawing by an ability, <span className="text-[#FF8C00]">40</span>% Fixed Shield
//                           </p>
//                         </div>
//                       </div>

//                     </div>
//                   </DialogContent>
//                 </Dialog>
//                 </div>


//                 {/* Acessory Category */}
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-center gap-2 mb-3">
//                     <h3 className="text-lg font-bold text-red-300">Acessory</h3>
//                   </div>

//                 {/* Best in Slot Acessory */}
//                 <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                   <GearTooltip text={`Cthulu Monster`} />

//                   <div className="relative w-21 h-32 flex-shrink-1">
//                     <img
//                       src="/images/bg_equipment_rarity_unique.webp"
//                       alt="Unique Rarity"
//                       className="w-full h-full object-contain"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <img
//                         src="/images/gear/Sphere-Of-Randomness.webp"
//                         alt="Sphere of Randomness"
//                         className="w-16 h-16 object-contain relative z-10"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
//                       Sphere of Randomness
//                     </h4>
//                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                       <span>Health</span>
//                       <span className="text-white font-semibold">+83</span>
//                     </div>
//                     <p className="text-sm text-muted-foreground leading-relaxed">
//                       +<span className="text-[#FF8C00]">10</span>% max HP <br/>
//                       At the start of battle, +<span className="text-[#FF8C00]">1</span> AP, Draw <span className="text-[#FF8C00]">1</span>
//                     </p>
//                   </div>
//                 </div>

//                 {/* Show More Acessory Modal */}
//                 <Dialog>
//                   <DialogTrigger asChild>
//                   <div className="flex justify-center w-full">
//                     <button
//                       className="flex items-center justify-center gap-2 text-xs w-40
//                                 rounded-lg overflow-hidden border border-border bg-card 
//                                 hover:border-red-400 transition-all duration-300 
//                                 hover:scale-105 hover:shadow-lg hover:shadow-red-400/20 py-1 mt-3"
//                     >
//                       Show More
//                       <ChevronDown className="h-3 w-3"/>
//                     </button>
//                     </div>
//                   </DialogTrigger>

//                   <DialogContent className="max-w-3xl w-full bg-gray-900 p-6 rounded-lg overflow-y-auto max-h-[80vh] scrollbar-none">
//                   <DialogHeader>
//                     <DialogTitle className="text-lg font-bold">
//                       Alternative Acessory
//                     </DialogTitle>
//                     <DialogDescription className="text-sm text-gray-300">
//                       Scroll to see more options.
//                     </DialogDescription>
//                   </DialogHeader>

//                     <div className="space-y-4 mt-4">

//                       {/* 2nd Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Seasonal Dellang Shop`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_legend.webp"
//                             alt="Legend Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Superconductive-Protein.webp" alt="Superconductive Protein" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
//                             Superconductive Protein
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Health</span>
//                             <span className="text-white font-semibold">+83</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                            At the start of the battle, change the cost of <span className="text-[#FF8C00]">1</span> card in your hand to <span className="text-[#FF8C00]">0</span> for <span className="text-[#FF8C00]">1</span> turn
//                           </p>
//                         </div>
//                       </div>

//                       {/* 3rd Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Twin Star's Shadow`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_unique.webp"
//                             alt="Unique Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Pulsating-Egg.webp" alt="Pulsating Egg" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
//                            Pulsating Egg
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Health</span>
//                             <span className="text-white font-semibold">+83</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                            +<span className="text-[#FF8C00]">15</span>% Attack, +<span className="text-[#FF8C00]">10</span>% Max HP
//                           </p>
//                         </div>
//                       </div>

//                       {/* 4th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Swamp of Judgment`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_unique.webp"
//                             alt="Unique Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Verdant-Shackles.webp" alt="Verdant Shackles" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
//                           Verdant Shackles
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Health</span>
//                             <span className="text-white font-semibold">+83</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                           +<span className="text-[#FF8C00]">12</span>% Attack, +<span className="text-[#FF8C00]">12</span>% Defense
//                           </p>
//                         </div>
//                       </div>

//                       {/* 5th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                         <GearTooltip text={`Seasonal Dellang Shop`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_legend.webp"
//                             alt="Legend Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Emblem-of-an-Exceptional-Entity.webp" alt="Emblem of an Exceptional Entity" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
//                           Emblem of an Exceptional Entity
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Health</span>
//                             <span className="text-white font-semibold">+83</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                           +<span className="text-[#FF8C00]">30</span>% Damage Amount<br/>
//                           Stress received becomes <span className="text-[#FF8C00]">0</span> (<span className="text-[#FF8C00]">1</span> for each battle)
//                           </p>
//                         </div>
//                       </div>

//                       {/* 5th Option */}
//                       <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
//                        <GearTooltip text={`Dellang Shop`} />
//                         <div className="relative w-21 h-32 flex-shrink-1">
//                           <img
//                             src="/images/bg_equipment_rarity_rare.webp"
//                             alt="Rare Rarity"
//                             className="w-full h-full object-contain"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <img src="/images/gear/Amorphous-Cube.webp" alt="Amorphous Cube" className="w-16 h-16 object-contain relative z-10" />
//                           </div>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-base font-bold mb-1" style={{ color: "rgb(51, 160, 243)" }}>
//                             Amorphous Cube
//                           </h4>
//                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
//                             <span>Health</span>
//                             <span className="text-white font-semibold">+83</span>
//                           </div>
//                           <p className="text-sm text-muted-foreground leading-relaxed">
//                             At the start of battle, +<span className="text-[#FF8C00]">25</span>% Damage
//                           </p>
//                         </div>
//                       </div>


//                     </div>
//                    </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </section>


//             {/* 4. Memory Fragments */}
//             <section id="memory-fragments" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-red-400">4. Memory Fragments</h2>

//               {/* BEST IN SLOT */}
//               <div className="space-y-8 sm:space-y-12">
//                 <div>
//                   <div className="text-center mb-4 sm:mb-6">
//                     <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm">
//                       Best in Slot
//                     </span>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
//                     {[
//                       {
//                         name: "Black Wing",
//                         effect: "+12% Attack",
//                         icon: "/images/sets/black-wing.webp",
//                         why: "Best 2-Set bonus in general",
//                       },
//                       {
//                         name: "Executioner's Tool",
//                         effect: "+25% Critical Damage",
//                         icon: "/images/sets/executioners-tool.webp",
//                         why: "Best 2-Set bonus in general",
//                       },
//                       {
//                         name: "Cursed Corpse",
//                         effect: "Increases damage dealt to target inflicted with Agony by 10%",
//                         icon: "/images/sets/cursed-corpse.webp",
//                         why: "Optional damage boost if achievable, not required; substats are more important in general"
//                       },
//                     ].map((set) => (
//                       <ExpandableSetCard
//                         key={set.name + "bis"}
//                         set={set}
//                         tier="bis"
//                         isExpanded={expandedMemorySet === set.name + "bis"}
//                         onToggle={() => setExpandedMemorySet(expandedMemorySet === set.name + "bis" ? null : set.name + "bis")}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* SECONDARY */}
//                 <div>
//                   <div className="text-center mb-4 sm:mb-6">
//                     <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
//                       Secondary
//                     </span>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
//                     {[
//                       {
//                         name: "Spark of Passion",
//                         effect: "When Upgrade Cards are used, increase Damage Amount of the next 5 <span style=\"color:rgb(250, 139, 139)\">Passion</span> Cards used by 20%",
//                         icon: "/images/sets/spark-of-passion.webp",
//                         why: "Due to Reload mechanic (huge multiplicative damage buff for ballista), the 20% multiplicative damage bonus from the 4-Set is outperformed by the 2-Set bonus, while this set is a viable option, using 2/2 set offers better overall performance for her"
//                       },

//                       {
//                         name: "Black Wing",
//                         effect: "+12% Attack",
//                         icon: "/images/sets/black-wing.webp",
//                         why: "Best 2-Set bonus in general",
//                       },
//                     ].map((set) => (
//                       <ExpandableSetCard
//                         key={set.name + "secondary"}
//                         set={set}
//                         tier="secondary"
//                         isExpanded={expandedMemorySet === set.name + "secondary"}
//                         onToggle={() => setExpandedMemorySet(expandedMemorySet === set.name + "secondary" ? null : set.name + "secondary")}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Main Stats + Substat Priority */}
//               <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
//                 {/* Main Stats */}
//                 <div className="grid grid-cols-3 gap-2 sm:gap-4">
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold text-red-400">IV</div>
//                     <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">Ideal</div>
//                     <div className="py-1.5 sm:py-2 px-2 sm:px-4 rounded bg-red-500/10 border border-red-500/30 text-xs sm:text-sm font-medium text-red-300">
//                       Critical Rate
//                     </div>
//                   </div>

//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold text-red-400">V</div>
//                     <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">Desire</div>
//                     <div className="py-1.5 sm:py-2 px-2 sm:px-4 rounded bg-red-500/10 border border-red-500/30 text-xs sm:text-sm font-medium text-red-300">
//                       Passion Damage
//                     </div>
//                   </div>

//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold text-red-400">IV</div>
//                     <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">Ideal</div>
//                     <div className="py-1.5 sm:py-2 px-2 sm:px-4 rounded bg-red-500/10 border border-red-500/30 text-xs sm:text-sm font-medium text-red-300">
//                       Attack %
//                     </div>
//                   </div>
//                 </div>

//                 {/* Substat Priority */}
//                 <div className="mt-6 sm:mt-8 text-center justify-center text-xs sm:text-sm">
//                   {/* Priority Chain */}
//                   <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
//                     <div className="px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-pink-500/20 border-2 border-pink-500/70 font-bold text-pink-300 shadow-lg shadow-pink-500/20 text-xs sm:text-sm">
//                       Extra Damage
//                     </div>
//                     <span className="text-xl sm:text-2xl text-muted-foreground/40">›</span>
//                     <div className="px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/20 border border-red-500/50 font-semibold text-red-300 text-xs sm:text-sm">
//                       Critical Rate
//                     </div>
//                     <span className="text-xl sm:text-2xl text-muted-foreground/40">=</span>
//                     <div className="px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/20 border border-red-500/50 font-semibold text-red-300 text-xs sm:text-sm">
//                       Critical Damage
//                     </div>
//                     <span className="text-xl sm:text-2xl text-muted-foreground/40">›</span>
//                     <div className="px-2 sm:px-3 py-1 rounded-full bg-muted/70 border border-border text-muted-foreground text-xs sm:text-sm">
//                       Attack %
//                     </div>
//                     <span className="text-xs sm:text-sm text-muted-foreground/60">or</span>
//                     <div className="px-2 sm:px-3 py-1 rounded-full bg-muted/70 border border-border text-muted-foreground text-xs sm:text-sm">
//                       Attack +
//                     </div>
//                   </div>

//                   {/* Explanation */}
//                   <div className="mt-4 sm:mt-6 mx-auto text-center">
//                   <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
//                       <span className="text-muted-foreground">Prioritize Extra Damage first, Critical Rate and Critical Damage for ideal crit ratio. Then prioritize Flat Attack and Attack % for more damage.<br/>Passion Damage% is preferred over Attack% for most cases.</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* 5. Partners */}
//             <section id="partners" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-24">
//               <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-red-400">5. Partners</h2>
//               <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 whitespace-pre-line">
//                 Click on any partner below to view detailed information about their synergy with Veronica. Partners are ranked based on their overall effectiveness and specific utility for Veronica's builds.
//               </p>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
//                 {[
//                   {
//                     id: 1,
//                     name: "Rosaria",
//                     role: "S+",
//                     image: "/images/partners/rosaria.webp",
//                     description: "Goddess Tier - Best Overall Choice\n\nRosaria provides excellent damage output while also granting team Morale buffs, making her incredibly valuable for team-wide benefits. Her Upgrade Tutor Partner skill synergizes perfectly with Veronica's upgrade-focused builds, particularly those utilizing Firing Preparation variants.\n\nRosaria excels in compositions where you want both personal damage amplification and team support, making her the top choice for most Veronica builds.",
//                   },
//                   {
//                     id: 2,
//                     name: "Marin",
//                     role: "S+",
//                     image: "/images/partners/marin.webp",
//                     description: "Best Damage Option\n\nMarin trades Rosaria's team Morale buffing capabilities for significantly higher personal damage output. She offers superior Skill tutor effects compared to Upgrade tutors, making her ideal for Veronica builds that focus heavily on skill-based cards like Repose.\n\nChoose Marin when you prioritize maximum damage potential over team utility, especially in single-target scenarios where raw damage output matters most.",
//                   },
//                   {
//                     id: 3,
//                     name: "Nakia",
//                     role: "S",
//                     image: "/images/partners/nakia.webp",
//                     description: "Solid Raw Damage Alternative\n\nNakia provides better raw damage output than Rosaria, making her an excellent choice when you want pure damage without the team utility. While she lacks Rosaria's Morale buffing and Upgrade tutor benefits, her higher damage ceiling can be valuable in specific scenarios.\n\nConsider Nakia when you already have sufficient team support elsewhere and want to maximize Veronica's personal damage contribution.",
//                   },
//                   {
//                     id: 4,
//                     name: "Solia",
//                     role: "C",
//                     image: "/images/partners/solia.webp",
//                     description: "Not Worth Using\n\nSolia doesn't offer advantages over higher-tier partners like Nakia or Rosaria. Her damage output and utility fall short compared to the top options, making her an inefficient choice for Veronica builds.\n\nAvoid Solia unless you have no access to better partners, as she provides minimal benefit compared to the superior alternatives available.",
//                   },
//                   {
//                     id: 5,
//                     name: "Daisy",
//                     role: "C",
//                     image: "/images/partners/daisy.webp",
//                     description: "Suboptimal Choice\n\nSimilar to Solia, Daisy doesn't outperform higher-tier partners like Nakia or Rosaria in any meaningful way. Her overall effectiveness is limited, and she fails to provide the damage or utility that makes top-tier partners valuable.\n\nDaisy should only be considered if no other partners are available, as she offers significantly less value than Rosaria, Marin, or Nakia.",
//                   },
//                   {
//                     id: 6,
//                     name: "Tina",
//                     role: "Situational",
//                     image: "/images/partners/tina.webp",
//                     description: "Niche Utility Partner\n\nTina offers specialized utility that may be valuable in specific team compositions or encounter types. While she may not match the consistent value of top-tier partners, her unique effects can provide situational advantages.\n\nConsider Tina when her specific Partner Skill effects align with your team's needs, though she's generally outperformed by Rosaria, Marin, or Nakia in most scenarios.",
//                   },
//                 ].map((partner) => (
//                   <Dialog
//                     key={partner.id}
//                     open={selectedPartner === partner.id}
//                     onOpenChange={(open) => setSelectedPartner(open ? partner.id : null)}
//                   >
//                     <DialogTrigger asChild>
//                       <div className="flex flex-col items-center gap-4 cursor-pointer">
//                         {/* Tier Badge outside the card */}
//                         <span className={`px-3 py-1.5 rounded-full text-sm font-bold ${getTierColor(partner.role)}`}>
//                           {partner.role} Tier
//                         </span>
              
//                         {/* Card Image */}
//                         <div className="relative aspect-[9/16] hover:scale-105 rounded-lg overflow-hidden border-2 border-border hover:border-red-400 bg-card transition-all">
//                           <img
//                             src={partner.image || "/placeholder.svg"}
//                             alt={partner.name}
//                             className="object-cover w-full h-full"
//                           />
//                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-2 pt-6">
//                             <p className="text-[18px] py-2 font-semibold text-white text-center">{partner.name}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </DialogTrigger>
              
//                     <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-4 sm:p-6">
//                       <DialogHeader>
//                         <DialogTitle className="text-xl sm:text-2xl text-red-400 text-center">{partner.name}</DialogTitle>
//                       </DialogHeader>
//                       <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
//                         <div className="flex justify-center">
//                           <img
//                             src={partner.image || "/placeholder.svg"}
//                             alt={partner.name}
//                             className="w-32 sm:w-48 h-auto rounded-lg border-2 border-red-500/50"
//                           />
//                         </div>
//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Description</h3>
//                           <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">{partner.description}</p>
//                         </div>
//                       </div>
//                     </DialogContent>
//                   </Dialog>
//                 ))}
//               </div>
//             </section>

//             {/* 6. Teams */}
//             <section id="teams" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-24">
//               <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-red-400">6. Teams</h2>
//               <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 whitespace-pre-line">
//                 Below are two example team compositions showcasing Veronica in different roles. Click on any team to view detailed synergy explanations, role breakdowns, and strategic insights.
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                 {/* Team 1 */}
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent p-4 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
//                       <div className="flex items-center gap-2 mb-3">
//                         <div className="w-2 h-2 rounded-full bg-red-400"></div>
//                         <h3 className="text-base font-semibold text-red-400/100">Mei Lin Hypercarry</h3>
//                         </div>
//                       <div className="grid grid-cols-3 gap-2 mb-3">

//                         {/* Veronica */}
//                         <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-400/50 bg-card shadow-md group- transition-transform">
//                           <img
//                             src="/images/characters/veronicahalf.webp"
//                             alt="Veronica"
//                             className="object-cover w-full h-full"
//                           />
//                           <div className="absolute top-1 left-1 flex flex-col gap-0.5">
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
//                             </div>
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
//                             </div>
//                           </div>
//                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
//                             <p className="text-sm font-semibold text-white text-center">Veronica</p>
//                           </div>
//                         </div>

//                         {/* Mei Lin */}
//                         <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-400/50 bg-card shadow-md group- transition-transform">
//                           <img
//                             src="/images/characters/meilinhalf.webp"
//                             alt="Mei Lin"
//                             className="object-cover w-full h-full"
//                           />
//                           <div className="absolute top-1 left-1 flex flex-col gap-0.5">
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-job-striker.webp" alt="Striker" className="w-full h-full" />
//                             </div>
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
//                             </div>
//                           </div>
//                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
//                             <p className="text-sm font-semibold text-white text-center">Mei Lin</p>
//                           </div>
//                         </div>

//                         {/* Rei */}
//                         <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md group- transition-transform">
//                           <img src="/images/characters/reihalf.webp" alt="Rei" className="object-cover w-full h-full" />
//                           <div className="absolute top-1 left-1 flex flex-col gap-0.5">
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
//                             </div>
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-ego-void.webp" alt="Void" className="w-full h-full" />
//                             </div>
//                           </div>
//                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
//                             <p className="text-sm font-semibold text-white text-center">Rei</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between text-xs text-muted-foreground">
//                         <span className="font-medium">Veronica enables Mei Lin's burst through card draw and Passion synergy</span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 group-hover:translate-x-1 transition-transform"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </div>
//                     </div>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-4 sm:p-6">
//                     <DialogHeader>
//                       <DialogTitle className="text-xl sm:text-2xl text-red-400">Team 1: Mei Lin Hypercarry</DialogTitle>
//                       <DialogDescription>Optimal team composition focusing on enabling Mei Lin's burst potential</DialogDescription>
//                     </DialogHeader>
//                     <div className="space-y-4 mt-4">
//                       <div className="space-y-4">
//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Team Overview</h3>
//                           <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
//                             This composition maximizes <strong className="text-red-300">Mei Lin's burst damage potential</strong> by providing the essential support she needs: <strong className="text-red-300">card draw</strong> and <strong className="text-red-300">Passion synergy</strong>. Veronica serves as a support character, enabling Mei Lin to consistently find and play her key combo cards. Rei provides additional damage amplification through buffs, creating a powerful triple synergy.
//                           </p>
//                         </div>
                        
//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Synergies</h3>
//                           <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
//                             <div>
//                               <strong className="text-red-300">Veronica + Mei Lin:</strong> Veronica's Repose I (0 cost, Draw 2 other combatant's cards) solves Mei Lin's card draw problems, ensuring she can consistently access her powerful combo pieces like Aromata and Rising Dragon Spire. Both share <strong className="text-red-300">Passion type</strong>, creating natural synergy and team-wide benefits.
//                             </div>
//                             <div>
//                               <strong className="text-red-300">Rei + Mei Lin:</strong> Rei provides damage buffs that amplify Mei Lin's burst damage. These buffs multiply the effectiveness of Mei Lin's high-cost, high-damage attacks, making her burst windows significantly more devastating.
//                             </div>
//                             <div>
//                               <strong className="text-red-300">Passion Synergy:</strong> With both Veronica and Mei Lin sharing Passion type, the team benefits from enhanced Passion stack generation and related buffs. This is especially powerful with Mei Lin's Passion-based mechanics.
//                             </div>
//                             <div>
//                               <strong className="text-red-300">The Combo:</strong> Veronica draws cards for Mei Lin → Mei Lin finds Aromata and Rising Dragon Spire → Veronica's Pendant of Resolution V (if using Mei Lin Passion Build) provides massive Passion stacks → Rei's damage buffs amplify → Mei Lin unleashes devastating burst damage.
//                             </div>
//                           </div>
//                         </div>

//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Role Distribution</h3>
//                           <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground ml-4">
//                             <li><strong className="text-red-300">Mei Lin:</strong> Main DPS - Primary damage dealer focusing on burst windows with Passion stacks</li>
//                             <li><strong className="text-red-300">Veronica:</strong> Support/Draw Engine - Provides card draw and enables Mei Lin's combos</li>
//                             <li><strong className="text-red-300">Rei:</strong> Support/Damage Buffer - Amplifies Mei Lin's damage through buffs</li>
//                           </ul>
//                         </div>

//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Strengths & Use Cases</h3>
//                           <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
//                             This team excels in scenarios where you want to maximize single-target or burst damage. The combination of reliable card draw and damage amplification makes Mei Lin incredibly powerful. Best used in boss fights, single-target encounters, or situations where burst windows matter more than sustained damage. The Passion synergy provides additional benefits that enhance the overall team effectiveness.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </DialogContent>
//                 </Dialog>

//                 {/* Team 2 */}
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent p-4 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
//                       <div className="flex items-center gap-2 mb-3">
//                         <div className="w-2 h-2 rounded-full bg-red-400"></div>
//                         <h3 className="text-base font-semibold text-red-400/100">Veronica DPS</h3>
//                         </div>
//                       <div className="grid grid-cols-3 gap-2 mb-3">

//                         {/* Veronica */}
//                         <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-400/50 bg-card shadow-md group- transition-transform">
//                           <img
//                             src="/images/characters/veronicahalf.webp"
//                             alt="Veronica"
//                             className="object-cover w-full h-full"
//                           />
//                           <div className="absolute top-1 left-1 flex flex-col gap-0.5">
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
//                             </div>
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
//                             </div>
//                           </div>
//                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
//                             <p className="text-sm font-semibold text-white text-center">Veronica</p>
//                           </div>
//                         </div>

//                         {/* Owen */}
//                         <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-400/50 bg-card shadow-md group- transition-transform">
//                           <img
//                             src="/images/characters/owenhalf.webp"
//                             alt="Owen"
//                             className="object-cover w-full h-full"
//                           />
//                           <div className="absolute top-1 left-1 flex flex-col gap-0.5">
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-job-striker.webp" alt="Striker" className="w-full h-full" />
//                             </div>
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
//                             </div>
//                           </div>
//                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
//                             <p className="text-sm font-semibold text-white text-center">Owen</p>
//                           </div>
//                         </div>

//                         {/* Rei */}
//                         <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md group- transition-transform">
//                           <img src="/images/characters/reihalf.webp" alt="Rei" className="object-cover w-full h-full" />
//                           <div className="absolute top-1 left-1 flex flex-col gap-0.5">
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
//                             </div>
//                             <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
//                               <img src="/images/icon-ego-void.webp" alt="Void" className="w-full h-full" />
//                             </div>
//                           </div>
//                           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
//                             <p className="text-sm font-semibold text-white text-center">Rei</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between text-xs text-muted-foreground">
//                         <span className="font-medium">Veronica as main DPS with Owen providing Passion synergy and Rei buffing damage</span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 group-hover:translate-x-1 transition-transform"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </div>
//                     </div>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-4 sm:p-6">
//                     <DialogHeader>
//                       <DialogTitle className="text-xl sm:text-2xl text-red-400">Team 2: Veronica DPS</DialogTitle>
//                       <DialogDescription>Team composition focusing on Veronica as the primary damage dealer</DialogDescription>
//                     </DialogHeader>
//                     <div className="space-y-4 mt-4">
//                       <div className="space-y-4">
//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Team Overview</h3>
//                           <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
//                             This composition positions <strong className="text-red-300">Veronica as the main DPS</strong>, utilizing her powerful Ballista mechanics and draw engine. Owen provides <strong className="text-red-300">Passion synergy</strong> and additional frontline damage, while Rei offers damage amplification through buffs. This team focuses on sustained damage output through Veronica's consistent Ballista generation and reliable card cycling.
//                           </p>
//                         </div>
                        
//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Synergies</h3>
//                           <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
//                             <div>
//                               <strong className="text-red-300">Veronica + Owen:</strong> Both characters share <strong className="text-red-300">Passion type</strong>, creating natural synergy. Owen provides frontline presence and additional damage, while Veronica's draw engine and Ballista generation create consistent AoE damage output. The Passion synergy enhances both characters' effectiveness.
//                             </div>
//                             <div>
//                               <strong className="text-red-300">Rei + Veronica:</strong> Rei's damage buffs amplify Veronica's Ballista damage, making her Giant Ballista AoE attacks significantly more powerful. This is especially effective with Veronica's Draw Engine Build that focuses on consistent Ballista generation every turn.
//                             </div>
//                             <div>
//                               <strong className="text-red-300">Self-Sustaining Draw Engine:</strong> Veronica's Repose I (0 cost, Draw 2) combined with Firing Preparation IV creates a self-sustaining engine. She can draw cards, generate Ballistas, and maintain consistent damage output without requiring external card draw support.
//                             </div>
//                             <div>
//                               <strong className="text-red-300">The Combo:</strong> Veronica uses Repose I to draw cards → Firing Preparation IV generates Giant Ballista every turn → Rei's damage buffs amplify Ballista damage → Owen provides additional frontline pressure → Consistent AoE damage output across multiple enemies.
//                             </div>
//                           </div>
//                         </div>

//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Role Distribution</h3>
//                           <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground ml-4">
//                             <li><strong className="text-red-300">Veronica:</strong> Main DPS - Primary damage dealer through Ballista generation and AoE attacks</li>
//                             <li><strong className="text-red-300">Owen:</strong> Secondary DPS/Frontline - Provides Passion synergy and additional damage</li>
//                             <li><strong className="text-red-300">Rei:</strong> Support/Damage Buffer - Amplifies Veronica's Ballista damage through buffs</li>
//                           </ul>
//                         </div>

//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Strengths & Use Cases</h3>
//                           <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
//                             This team excels in scenarios requiring consistent AoE damage and reliable card cycling. Veronica's self-sustaining draw engine means the team doesn't rely heavily on external support, making it versatile across different encounter types. Best used in multi-enemy encounters, wave-based content, or situations where sustained damage output matters more than burst windows. The Passion synergy between Veronica and Owen provides additional team-wide benefits.
//                           </p>
//                         </div>

//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Team Comparison</h3>
//                           <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
//                             Compared to the Mei Lin Hypercarry team, this composition trades burst potential for consistency. Veronica's reliable Ballista generation provides steady damage output, while the Mei Lin team focuses on explosive burst windows. Choose this team when you need consistent AoE damage and self-sustaining card draw, or when you want Veronica to be the star of the show rather than supporting another DPS.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </section>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }