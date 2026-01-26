interface FeatureProps {
    title: string;
    text: string | React.ReactNode;
    horizontal?: boolean;
}

{
    /*Feature component, used in App Features*/
}
function Feature({ title, text, horizontal = false }: FeatureProps) {
    return (
        <div
            className={`flex m-4 ${horizontal ? "w-full flex-row gap-64" : "flex-1 flex-col"}`}
        >
            <div>
                <div
                    className="w-10 h-1 mb-3"
                    style={{
                        background: "var(--main-gradient)",
                    }}
                />
                <h1 className="font-title font-semibold text-xl text-white-pearl mb-7">
                    {title}
                </h1>
            </div>
            <div className={horizontal ? "max-w-xl flex" : ""}>
                <p className="font-text font-medium text-sm leading-10 text-white-pearl">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default function Landing() {
    return (
        <div className="bg-landing-bg min-h-screen w-full">
            {/*Landing Page Nav Bar and header*/}
            <header className="relative bg-cover bg-center w-full bg-[url(/landing_bg.png)]">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,1) 92%)",
                    }}
                />
                <div className="relative z-10">
                    <div className="flex items-center justify-between px-8 py-4 text-white-pearl font-text text-base">
                        <div className="flex items-center gap-8">
                            <img src="icon.svg" alt="logo" />
                            <nav className="flex gap-8 ml-12">
                                <a
                                    href="header"
                                    className="hover:text-vibrant-orange transition"
                                >
                                    Home
                                </a>
                                <a
                                    href="whatIs"
                                    className="hover:text-vibrant-orange transition"
                                >
                                    What is Goal Planner?
                                </a>
                                <a
                                    href="aboutUs"
                                    className="hover:text-vibrant-orange transition"
                                >
                                    About Us
                                </a>
                                <a
                                    href="downloadApp"
                                    className="hover:text-vibrant-orange transition"
                                >
                                    Download App
                                </a>
                            </nav>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-4 py-2 hover:text-vibrant-orange transition">
                                Sign In
                            </button>
                            <button className="px-4 py-2 rounded bg-vibrant-orange">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="pt-32 pl-32 pb-40 max-w-[45rem] ml-4">
                        <h1
                            className="font-title text-transparent bg-clip-text font-bold text-6xl leading-tight"
                            style={{
                                backgroundImage: "var(--main-gradient)",
                            }}
                        >
                            Master your goals,
                            <br />
                            One Step
                            <br />
                            at a time.
                        </h1>
                        <p className="font-manrope text-xl text-white-pearl pt-4">
                            The minimalist tool for students and young
                            professionals to turn abstract visions into
                            actionable daily habits.
                        </p>
                    </div>
                </div>
            </header>
            {/*List of App Features*/}
            <div className=" my-3 box-border border-2 border-vibrant-orange rounded-3xl shadow-[0px_0px_10px_2px_rgba(217,78,6,0.8)] bg-black mx-12 flex flex-col p-8">
                <div className="flex flex-row">
                    <Feature
                        title="How it works"
                        text={
                            <>
                                Set your goals, plan your tasks on the calendar,
                                and build daily consistency.
                                <br />
                                Track your progress with simple statistics and
                                visual indicators.
                                <br />
                                Stay focused, motivated, and in control of your
                                time.
                            </>
                        }
                        horizontal
                    />
                </div>
                <div className="flex flex-row justify-between items-center my-16 mb-8">
                    <h1
                        className="font-title text-4xl font-semibold text-transparent bg-clip-text ml-3"
                        style={{
                            backgroundImage: "var(--main-gradient)",
                        }}
                    >
                        BUILT YOUR SUCCESS
                    </h1>
                </div>
                <div className="flex flex-wrap flex-row mt-8">
                    <Feature
                        title="Smart Goal Setting"
                        text="Define your vision with our intuitive framework designed for high achievers."
                    />
                    <Feature
                        title="Visual Progress"
                        text="Watch your growth with beautiful, live charts that make progress tangible."
                    />
                    <Feature
                        title="Habit Reminders"
                        text="Stay on track with gentle, intelligent nudges that fit your personal schedule."
                    />
                </div>
            </div>
            <div className="h-96"></div>
        </div>
    );
}
