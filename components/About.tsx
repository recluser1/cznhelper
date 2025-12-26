import React from 'react';

interface TeamMemberProps {
    name: string;
    role: string;
    avatarPath: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, avatarPath }) => (
    <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-gray-800 border border-gray-700 flex-shrink-0 overflow-hidden">
            <img
                src={avatarPath}
                alt={`${name}'s avatar`}
                className="w-full h-full object-cover"
            />
        </div>
        <div>
            <h4 className="text-white font-medium">{name}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
        </div>
    </div>
);

export function About() {
    const teamData = {
        founder: {
            title: 'Founder',
            members: [
                {
                    name: 'Lucie',
                    role: 'Developer, Designer',
                    avatarPath: '/images/devteam/lucie.png',
                },
            ],
        },
        development: {
            title: 'Development',
            members: [
                {
                    name: 'Chikitori',
                    role: 'Lead Developer',
                    avatarPath: '/images/devteam/chikitori.png',
                },
                // {
                //     name: 'Placeholder #1',
                //     role: 'Developer, Editor',
                //     avatarPath: '/images/devteam/na.png',
                // },
            ],
        },
        content: {
            title: 'Content',
            members: [
                {
                    name: 'Zyla',
                    role: 'Lead Writer',
                    avatarPath: '/images/devteam/zyla.png',
                },
                // {
                //     name: 'Placeholder #2',
                //     role: 'Writer, Editor',
                //     avatarPath: '/images/devteam/na.png',
                // },
                // {
                //     name: 'Placeholder #3',
                //     role: 'Editor',
                //     avatarPath: '/images/devteam/na.png',
                // },
            ],
        },
        help: {
            title: 'Help',
            members: [
                {
                    name: 'Sproot',
                    role: 'Community Manager',
                    avatarPath: '/images/devteam/sproot.png',
                },
                {
                    name: '185217',
                    role: 'Advisor',
                    avatarPath: '/images/devteam/185217.png',
                },
            ],
        },
    };

    return (
        <div className="container mx-auto -mt-16">
            <div className="max-w-5xl mx-auto space-y-8">
                <div>
                    <h1 className="text-white text-4xl font-bold">About CZN Helper</h1>
                    <p className="text-gray-400 mt-2">
                        A community-driven guide project for Chaos Zero Nightmare
                    </p>
                </div>

                <section className="bg-transparent rounded-lg p-8 space-y-8">
                    <h2 className="text-white text-2xl font-bold">Team</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
                        {Object.values(teamData).map((category) => (
                            <div key={category.title} className="space-y-6">
                                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider pb-2 border-b border-gray-700">
                                    {category.title}
                                </h3>
                                <div className="space-y-4">
                                    {category.members.map((member) => (
                                        <TeamMember
                                            key={member.name}
                                            name={member.name}
                                            role={member.role}
                                            avatarPath={member.avatarPath}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-6 border-t border-blue-500/30">
                        <h3 className="text-white font-semibold mb-3">Special Thanks</h3>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>
                                Design inspired by the old{' '}
                                <a
                                    href="https://old.sanitygone.help/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Sanity;Gone Project
                                </a>
                            </p>
                            <p>
                                Community resources from{' '}
                                <a
                                    href="https://docs.google.com/spreadsheets/d/1-KkQUFrjD_2Un3zMDmypCwZFVF5VmowswqYdLt9MOw8/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Sproot's Spreadsheet
                                </a>
                                {' '}and{' '}
                                <a
                                    href="https://wiki.e7bot.top/#/czn/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    E7Bot Wiki
                                </a>
                            </p>
                            <p>All contributors and testers from the community</p>
                            <p>Players who shared their gameplay insights and feedback</p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#0a0a0f] border border-blue-500/30 rounded-lg p-6 space-y-4">
                    <h2 className="text-white pb-2 border-b border-blue-500/30">Project Overview</h2>
                    <p className="text-gray-400">
                        CZN Helper is an open-source fan guide website inspired by the Sanity;Gone project for Arknights.
                        Our goal is to provide comprehensive, accessible information about characters, cards, builds, and
                        game mechanics in Chaos Zero Nightmare.
                    </p>
                    <p className="text-gray-400 font-bold">
                        This project is built and maintained by the community, for the community.
                        All content is researched and curated by dedicated players who want to help
                        others succeed in the game.
                    </p>
                </section>

                <section className="bg-[#0a0a0f] border border-blue-500/30 rounded-lg p-6 space-y-4">
                    <h2 className="text-white pb-2 border-b border-blue-500/30">Contributing</h2>
                    <p className="text-gray-400">
                        This is a community project and we welcome contributions!
                    </p>
                    <ul className="space-y-2 text-gray-400 ml-6">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>Add new character guides</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>Update existing information</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>Report bugs or suggest features</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>Improve the codebase</span>
                        </li>
                    </ul>
                    <p className="text-gray-400">
                        Check out the GitHub repository
                    </p>
                </section>

                <section className="bg-[#0a0a0f] border border-blue-500/30 rounded-lg p-6 space-y-4">
                    <h2 className="text-white pb-2 border-b border-blue-500/30">Technology Stack</h2>
                    <ul className="space-y-2 text-gray-400 ml-6">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span><strong className="text-white">React:</strong> Component-based architecture for scalability</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span><strong className="text-white">TypeScript:</strong> Type safety for reliable data structures</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span><strong className="text-white">Tailwind CSS:</strong> Utility-first styling with dark theme</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span><strong className="text-white">Radix UI:</strong> Accessible component primitives</span>
                        </li>
                    </ul>
                </section>

                <section className="bg-[#0a0a0f] border border-blue-500/30 rounded-lg p-6 space-y-4">
                    <h2 className="text-white pb-2 border-b border-blue-500/30">Disclaimer</h2>
                    <p className="text-gray-400 text-sm">
                        CZN Helper is an unofficial, fan-made project and is not affiliated with, endorsed by,
                        or connected to the developers or publishers of Chaos Zero Nightmare.
                        All game content, including character names, artwork, and mechanics,
                        are property of their respective owners.
                    </p>
                    <p className="text-gray-400 text-sm">
                        This website is provided for informational and educational purposes only.
                        All content is based on community research and personal gameplay experience.
                        Information may be incomplete, inaccurate, or subject to change as the game updates.
                    </p>
                </section>

            </div>
        </div>
    );
}