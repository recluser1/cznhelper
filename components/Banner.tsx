import { ReactNode } from "react";

interface BannerProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    backgroundImage?: string;
}

export function Banner({
    title,
    subtitle,
    children,
    backgroundImage = "/images/header.jpg",
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
            <div className="relative h-full flex flex-col justify-center items-center px-6">
                {/* <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-wider drop-shadow-2xl mb-6">
          {title}
        </h1> */}

                {subtitle && (
                    <p className="mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide drop-shadow-2xl max-w-4xl leading-tight">
                        {subtitle}
                    </p>
                )}

                {children && (
                    <div className="mt-8 max-w-3xl">
                        {children}
                    </div>
                )}
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
        </section>
    );
}