import { ExternalLink } from 'lucide-react';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="border-t border-blue-500/30 bg-[#0a0a0f]/95 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6 sm:gap-8">

                    <div>
                        <h3 className="text-white text-base sm:text-lg mb-2 sm:mb-3">Disclaimer</h3>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            CZN Helper is a fan-made guide website for Chaos Zero Nightmare.
                            This site is not affiliated with or endorsed by the official game developers.
                            All game assets, character names, and related content are property of
                            their respective owners. Information provided is based on community research
                            and may not be 100% accurate.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white text-base sm:text-lg mb-2 sm:mb-3">Official Links</h3>
                        <div className="space-y-2">
                            <a
                                href="https://discord.gg/chaoszeronightmare"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                            >
                                <FaDiscord className="w-4 h-4" />
                                <span>Discord</span>
                            </a>
                            <a
                                href="https://x.com/CZN_Official_EN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-sky-400 transition-colors"
                            >
                                <FaTwitter className="w-4 h-4" />
                                <span>X</span>
                            </a>
                            <a
                                href="https://page.onstove.com/chaoszeronightmare/en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>STOVE</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-base sm:text-lg mb-2 sm:mb-3">Contact</h3>
                        <div className="space-y-2">
                            <a
                                href="https://discordapp.com/users/813584519348617256"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <FaDiscord className="w-4 h-4" />
                                <span>lilyum.box</span>
                            </a>
                            <a
                                href="https://github.com/kairizinha/cznhelper"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <FaGithub className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
                    <p>© 2025 CZN Helper. Community-driven guide project.
                        Not for commercial use.
                    </p>
                </div>
            </div>
        </footer>
    );
}