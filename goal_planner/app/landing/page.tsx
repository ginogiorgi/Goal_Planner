import Feature from "@/components/LandingPage/Feature/Feature";
import DownloadButton from "@/components/LandingPage/DownloadButton/DownloadButton";
import Creator from "@/components/LandingPage/Creator/Creator";
import Button from "@/components/ui/Button/Button";

export default function Landing() {
    return (
        <div className="bg-landing-bg min-h-screen w-full">
            <header
                id="header"
                className="relative bg-cover bg-center w-full bg-[url(/landing_bg.png)] -scroll-mt-16"
            >
                {/*Nav Bar*/}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,1) 92%)",
                    }}
                />
                <div className="relative z-10">
                    <div className="flex items-center justify-between px-4 md:px-8 py-4 text-white-pearl font-text">
                        <div className="flex items-center gap-8">
                            <img
                                src="icon.svg"
                                alt="logo"
                                className="w-8 h-8 md:w-auto md:h-auto"
                            />
                            <nav className="hidden md:flex gap-8 ml-12">
                                <a
                                    href="#header"
                                    className="hover:text-vibrant-orange transition"
                                >
                                    Home
                                </a>
                                <a
                                    href="#features"
                                    className="hover:text-vibrant-orange transition"
                                >
                                    What is Goal Planner?
                                </a>
                                <a
                                    href="#footer"
                                    className="hover:text-vibrant-orange transition"
                                >
                                    About Us
                                </a>
                            </nav>
                        </div>
                        <div className="flex gap-6 md:gap-8 items-center">
                            <a
                                href="#"
                                className="hidden md:block hover:text-vibrant-orange transition"
                            >
                                Sign In
                            </a>
                            <Button
                                mobileText="Download App"
                                desktopText="Get Started"
                                href="#download-app"
                            />
                        </div>
                        {/*Header*/}
                    </div>
                    <div className="pt-16 md:pt-32 px-6 md:pl-32 pb-20 md:pb-40 max-w-full md:max-w-[50rem] md:ml-4 text-center md:text-left">
                        <h1
                            className="font-title text-transparent bg-clip-text font-bold text-4xl md:text-6xl leading-tight"
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
                        <p className="font-manrope text-base md:text-xl text-white-pearl pt-4">
                            The minimalist tool for students and young
                            professionals to turn abstract visions into
                            actionable daily habits.
                        </p>
                    </div>
                </div>
            </header>
            {/*List of App Features*/}
            <div
                id="features"
                className="my-3 box-border border-2 border-vibrant-orange rounded-3xl shadow-[0px_0px_10px_2px_rgba(217,78,6,0.8)] bg-black mx-4 md:mx-12 flex flex-col p-4 md:p-8 scroll-mt-32"
            >
                <div className="flex flex-col md:flex-row">
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
                <div className="flex flex-row justify-between items-center my-8 md:my-16 mb-8">
                    <h1
                        className="font-title text-2xl md:text-4xl font-semibold text-transparent bg-clip-text ml-3"
                        style={{
                            backgroundImage: "var(--main-gradient)",
                        }}
                    >
                        BUILT YOUR SUCCESS
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row md:flex-wrap mt-8">
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
            {/*Possibility*/}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-28 mx-4 md:mx-16 lg:mx-64 mt-16 md:mt-28">
                <img
                    src="possibilityLandingPage.jpg"
                    alt="Possibility Image"
                    className="w-64 md:w-80 h-96 md:h-[27rem] object-cover rounded-3xl"
                />
                <div className="text-center md:text-left">
                    <h1
                        className="font-title font-semibold text-3xl md:text-5xl text-transparent bg-clip-text mb-8 pb-2"
                        style={{
                            backgroundImage: "var(--main-gradient)",
                        }}
                    >
                        <>
                            The possibilities
                            <br />
                            are
                            <br />
                            beyond your
                            <br />
                            imagination
                        </>
                    </h1>
                    <p className="font-text text-white-pearl mb-8 leading-10">
                        Daily tracking increases your chances of goals into
                        reality.
                    </p>
                    <p className="font-text text-white-pearl leading-10">
                        When you see your progress every day, your dreams stop
                        being abstract and start becoming achievable.
                    </p>
                </div>
            </div>
            {/*Ready to Reach Potential - Desktop*/}
            <div
                className="hidden md:flex mx-4 md:mx-12 rounded-xl py-8 md:py-5 items-center justify-between p-8 md:p-14 mt-16 md:mt-28 gap-6 md:gap-0"
                style={{
                    background: "var(--main-gradient)",
                }}
            >
                <h2 className="font-title font-semibold text-2xl md:text-4xl text-deep-bg text-center md:text-left">
                    <>
                        Ready to reach your
                        <br />
                        potential?
                    </>
                </h2>
                <button className="bg-sea-green text-white-pearl font-title font-semibold text-xl md:text-2xl px-8 md:px-10 py-2 md:py-3 rounded-full">
                    Get Started
                </button>
            </div>
            {/*Download App - Mobile*/}
            <div
                id="download-app"
                className="md:hidden mx-4 rounded-xl py-8 px-6 mt-16 scroll-mt-20"
                style={{
                    background: "var(--main-gradient)",
                }}
            >
                <h2 className="font-title font-semibold text-3xl text-deep-bg text-center mb-6">
                    Download Our App
                </h2>
                <p className="font-text text-base text-deep-bg text-center mb-8">
                    Get the Goal Planner app and start achieving your goals
                    today!
                </p>
                <div className="flex flex-col gap-4">
                    <DownloadButton
                        icon="apple-icon.svg"
                        topText="Download on the"
                        bottomText="App Store"
                        href="#"
                    />
                    <DownloadButton
                        icon="google-play-icon.svg"
                        topText="GET IT ON"
                        bottomText="Google Play"
                        href="#"
                    />
                </div>
            </div>
            {/*Footer*/}
            <footer
                id="footer"
                className="bg-vibrant-orange mt-16 md:mt-28 px-6 md:px-44 py-6"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                    <Creator
                        name="Juan Manuel Garcia"
                        email="juanmanuel_garcia98@hotmail.com"
                        github="https://github.com/LittleBigPants"
                        linkedin="https://www.linkedin.com/in/juan-manuel-garcia-99952b270/"
                    />
                    <img
                        src="icon-white.svg"
                        alt="logo"
                        className="w-16 h-16 md:w-24 md:h-24 order-first md:order-none"
                    />
                    <Creator
                        name="Gino Rubén Giorgi"
                        email="ginorubengiorgi@gmail.com"
                        github="https://github.com/ginogiorgi"
                        linkedin="https://www.linkedin.com/in/ginorubengiorgi/"
                    />
                </div>

                {/* Copyright */}
                <div className="mt-6 text-center">
                    <p className="font-text text-sm text-white-pearl">
                        © 2026 GoalPlanner. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
