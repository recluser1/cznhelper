import { ReactNode } from "react";

interface BannerProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    backgroundImage?: string;
}

export function Banner({
    subtitle,
    children,
    backgroundImage = "/images/header1.jpg",
}: BannerProps) {
    return (
        <section className="relative h-64 md:h-96 lg:h-[22rem] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                    backgroundPosition: 'center top',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6">
                {subtitle && (
                    <p className="mt-12 sm:mt-16 md:mt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide drop-shadow-2xl max-w-4xl leading-tight text-center">
                        {subtitle}
                    </p>
                )}

                {children && (
                    <div className="mt-4 sm:mt-6 md:mt-8 max-w-3xl w-full">
                        {children}
                    </div>
                )}
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-background" />
        </section>
    );
}