// // lib/cardDescriptionFormatter.ts

// export function autoFormatCardDescription(description: string): string {
//   const clean = description.replace(/\\n|\n/g, " ").trim();
//   const lines: string[] = [];
//   let remaining = clean;

//   const percentageStats: string[] = [];
//   const percentageRegex = /\d+\.?\d*%\s+(?:Damage|Shield|Heal)/gi;
//   let match;

//   while ((match = percentageRegex.exec(remaining)) !== null) {
//     percentageStats.push(match[0]);
//   }

//   if (percentageStats.length > 0) {
//     lines.push(percentageStats.join(" "));
//     percentageStats.forEach((stat) => {
//       remaining = remaining.replace(stat, "");
//     });
//     remaining = remaining.trim();
//   }

//   if (remaining) {
//     const parts = remaining
//       .split(
//         /(?=\b(?:Choose|Heal|Draw|Create|Move|Gain|Apply|Add|Remove|Increase|Decrease|On|If|When)\s+)/i
//       )
//       .map((s) => s.trim())
//       .filter((s) => s.length > 0);

//     lines.push(...parts);
//   }

//   return lines.join("\n");
// }
