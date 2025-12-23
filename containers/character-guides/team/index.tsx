import { Team } from "@/types/character-guides";

type Props = {
  team: Team[];
  teamDescription: string;
};
const TeamSection = (props: Props) => {
  const { team, teamDescription } = props;
  return (
    <section
      id="teams"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-24"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400 text-center">
        6. Teams
      </h2>
      <p className="text-muted-foreground mb-6 text-sm sm:text-base text-center px-4">
        {teamDescription}
        <br />
        Click on any team to view detailed synergy explanations and role
        breakdowns.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            id: 1,
            title: "Chizuru Hypercarry",
            subtitle:
              "Rei provides damage buffs while Veronica enables card draw",
            members: [
              {
                name: "Chizuru",
                job: "psionic",
                ego: "void",
                image: "/images/characters/chizuruhalf.webp",
              },
              {
                name: "Rei",
                job: "controller",
                ego: "void",
                image: "/images/characters/reihalf.webp",
              },
              {
                name: "Veronica",
                job: "ranger",
                ego: "passion",
                image: "/images/characters/veronicahalf.webp",
              },
            ],
            overview:
              "This composition maximizes Chizuru's damage potential by providing the two things she needs most: card draw and damage amplification. Chizuru's power comes from stacking Will-O'-Wisp (gained through hits) to empower her Shadow of the Moon attacks. Without proper support, she struggles to cycle through her deck and find key cards like Tsukuyomi and Shadow of the Moon.",
            synergies: [
              {
                highlight: "Rei + Chizuru",
                text: "Rei provides damage buffs that multiply Chizuru's Shadow of the Moon damage. Both share Void Ego type, creating natural synergy. Rei's support is especially powerful with Tsukuyomi III (adds 2 hits to Shadow of the Moon), allowing for infinite stacking potential.",
              },
              {
                highlight: "Veronica + Chizuru",
                text: "Veronica's Repose (0 cost, Draw 2 other combatant's cards) solves Chizuru's card draw problem. This ensures Chizuru can consistently find her Tsukuyomi cards (which generate 3 Will-O'-Wisp per hit) and Shadow of the Moon cards to unleash her damage.",
              },
              {
                highlight: "The Combo",
                text: "Veronica draws cards → Chizuru finds Tsukuyomi → Chizuru uses attack cards to generate Will-O'-Wisp (3 per hit) → Rei's damage buffs amplify the damage → Chizuru uses Shadow of the Moon with massive Will-O'-Wisp stacks for devastating damage.",
              },
            ],
            roles: [
              "Chizuru: Main DPS - generates Will-O'-Wisp and deals massive damage with Shadow of the Moon",
              "Rei: Support/Damage Buffer - amplifies Chizuru's damage through buffs",
              "Veronica: Support/Draw Engine - provides card draw to keep Chizuru's combo going",
            ],
          },
          {
            id: 2,
            title: "Mono Void",
            subtitle:
              "Rei provides damage buffs while Tressa generates attack cards for Will-O'-Wisp stacking",
            members: [
              {
                name: "Chizuru",
                job: "psionic",
                ego: "void",
                image: "/images/characters/chizuruhalf.webp",
              },
              {
                name: "Tressa",
                job: "psionic",
                ego: "void",
                image: "/images/characters/tressahalf.webp",
              },
              {
                name: "Rei",
                job: "controller",
                ego: "void",
                image: "/images/characters/reihalf.webp",
              },
            ],
            overview:
              "This variant replaces Veronica with Tressa, taking a different approach to Will-O'-Wisp generation. Instead of relying on card draw to find Chizuru's cards, Tressa generates attack cards that Chizuru can use with Tsukuyomi to generate Will-O'-Wisp stacks. All three characters share Void Ego type, creating strong synergy and team-wide benefits.",
            synergies: [
              {
                highlight: "Tressa + Chizuru",
                text: "Tressa's ability to spam attack cards directly feeds Chizuru's Will-O'-Wisp generation. When Chizuru uses Tsukuyomi (3 Will-O'-Wisp per hit), Tressa's attack cards provide the hits needed to stack Will-O'-Wisp quickly without relying on card draw RNG.",
              },
              {
                highlight: "Rei + Chizuru",
                text: "Rei's role remains the same - providing damage buffs that amplify Chizuru's Shadow of the Moon attacks. The Void Ego synergy between all three characters enhances their effectiveness.",
              },
              {
                highlight: "Triple Void Ego Synergy",
                text: "Having all three characters share Void Ego type creates natural synergy and provides team-wide benefits. This makes the team more cohesive than mixed Ego type compositions, enhancing overall effectiveness.",
              },
              {
                highlight: "The Combo",
                text: "Tressa spams attack cards → Chizuru uses Tsukuyomi on those attacks → Generates 3 Will-O'-Wisp per hit → Rei's damage buffs amplify → Chizuru unleashes Shadow of the Moon with massive Will-O'-Wisp stacks.",
              },
            ],
            roles: [
              "Chizuru: Main DPS - generates Will-O'-Wisp and deals massive damage with Shadow of the Moon",
              "Tressa: Support/Hit Generator - spams attack cards to help Chizuru build Will-O'-Wisp stacks",
              "Rei: Support/Damage Buffer - amplifies Chizuru's damage through buffs",
            ],
            comparison:
              "This team trades Veronica's card draw for Tressa's direct attack card generation. It's more consistent for Will-O'-Wisp stacking but may struggle if you need to find specific Chizuru cards. The triple Void Ego synergy provides stronger team-wide benefits, but you lose Veronica's versatile draw utility. Choose this team when you want more reliable Will-O'-Wisp generation and stronger Ego type synergy.",
          },
        ].map((team) => (
          <Dialog key={team.id}>
            <DialogTrigger asChild>
              <div className="group cursor-pointer rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-103">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                  <h3 className="text-base sm:text-lg font-semibold text-violet-400">
                    {team.title}
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  {team.members.map((member) => (
                    <div
                      key={member.name}
                      className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                        <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img
                            src={`/images/icon-job-${member.job}.webp`}
                            alt={member.job}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img
                            src={`/images/icon-ego-${member.ego}.webp`}
                            alt={member.ego}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                        <p className="text-xs sm:text-sm font-semibold text-white text-center">
                          {member.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium">{team.subtitle}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </DialogTrigger>

            {/* Dialog with sticky header + no scrollbar */}
            <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-hidden bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
              <DialogHeader className="sticky bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                  {team.title}
                </DialogTitle>
              </DialogHeader>

              <div className="overflow-y-auto px-6 pb-6 pt-4 flex-1 scrollbar-none">
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    {team.members.map((member) => (
                      <div
                        key={member.name}
                        className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-purple-500/50 shadow-2xl"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                          <p className="text-base font-bold text-white text-center">
                            {member.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-5 text-sm sm:text-base">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Team Overview
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {team.overview}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Synergies
                      </h3>
                      <div className="space-y-3 text-muted-foreground">
                        {team.synergies.map((syn, i) => (
                          <div key={i}>
                            <strong className="text-purple-300">
                              {syn.highlight}:
                            </strong>{" "}
                            {syn.text}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Role Distribution
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        {team.roles.map((role, i) => (
                          <li key={i}>
                            <strong className="text-purple-300">
                              {role.split(":")[0]}:
                            </strong>
                            {role.split(":")[1]}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {team.comparison && (
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Team Comparison
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {team.comparison}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};
