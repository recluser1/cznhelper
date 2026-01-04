// src/data/team.ts
export type TeamMember = {
  name: string;
  role: string;
  avatar?: string;
};

export type TeamSection = {
  title: string;
  members: TeamMember[];
};

export const TeamSections: readonly TeamSection[] = [
  {
    title: "Founder",
    members: [
      {
        name: "Lucie",
        role: "Developer, Designer",
        avatar: "/images/team/lucie.png",
      },
    ],
  },
  {
    title: "Development",
    members: [
      {
        name: "Chikitori",
        role: "Lead Developer",
        avatar: "/images/team/chikitori.png",
      },
      { name: "Name", role: "Developer, Editor" },
    ],
  },
  {
    title: "Content",
    members: [{ name: "Zyla", role: "Lead Writer" }],
  },
  {
    title: "Help",
    members: [
      { name: "Sproot", role: "Advisor" },
      { name: "185217", role: "Number Cruncher" },
    ],
  },
];
