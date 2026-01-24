import Link from "next/link";
import landingImage from "../../public/LandingImg.jpg";
import Image from "next/image";

const Landing = () => {
	return (
		<div className="min-h-screen bg-[#050505]">
			{/* Navigation */}
			<nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-10 lg:px-10 py-6">
				<div className="max-w-[1440px] mx-auto flex items-center justify-between">
					{/* Logo */}
					<div className="flex-shrink-0"></div>

					{/* Nav Links - Hidden on mobile, shown on desktop */}
					<div className="hidden lg:flex items-center gap-6 xl:gap-8 font-manrope text-[18px] font-medium text-pearl-white">
						<Link
							href="/"
							className="hover:text-vibrant-orange transition-colors">
							Home
						</Link>
						<Link
							href="/onboarding"
							className="hover:text-vibrant-orange transition-colors whitespace-nowrap">
							What is GoalPlanner?
						</Link>
						<Link
							href="#about"
							className="hover:text-vibrant-orange transition-colors">
							About us
						</Link>
						<Link
							href="#download"
							className="hover:text-vibrant-orange transition-colors whitespace-nowrap">
							Download app
						</Link>
					</div>

					{/* Auth Buttons */}
					<div className="flex items-center gap-3 md:gap-5">
						<button className="font-manrope text-[16px] md:text-[18px] font-medium text-pearl-white hover:text-vibrant-orange transition-colors">
							Log In
						</button>
						<button className="bg-vibrant-orange text-pearl-white font-manrope text-[16px] md:text-[18px] font-medium px-4 md:px-6 lg:px-7 py-2 md:py-2.5 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap">
							Get started
						</button>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative w-full h-[500px] md:h-[600px] lg:h-[710px] overflow-hidden">
				{/* Background Image */}
				<img
					src="https://api.builder.io/api/v1/image/assets/TEMP/18a72b7a933460b3870d80590ada4491965930f4?width=2880"
					alt="Hero background"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>

				{/* Hero Content */}
				<div className="relative h-full flex items-center justify-start px-4 md:px-16 lg:px-32 max-w-[1440px] mx-auto">
					<div className="max-w-[700px] pt-12 md:pt-20 lg:pt-32">
						<h1 className="font-montserrat font-bold text-[36px] md:text-[52px] lg:text-[62px] leading-[1.2] tracking-[-0.04em] bg-gradient-orange bg-clip-text text-transparent mb-4 md:mb-6">
							Master your goals,
							<br />
							One Step
							<br />
							at a time.
						</h1>
						<p className="font-manrope font-medium text-[16px] md:text-[18px] lg:text-[20px] text-pearl-white max-w-[554px]">
							The minimalist tool for students and young professionals to turn
							abstract visions into actionable daily habits.
						</p>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
				<div className="max-w-[1320px] mx-auto border-2 border-vibrant-orange rounded-[35px] bg-black shadow-[0_0_5px_0_#D94E06] p-6 md:p-10 lg:p-16">
					<div className="max-w-[1109px] mx-auto">
						{/* Section Header */}
						<div className="mb-8 md:mb-12">
							<div className="relative inline-block">
								<div className="w-[38px] h-1 bg-gradient-orange mb-2"></div>
								<h2 className="font-montserrat font-semibold text-[20px] md:text-[24px] tracking-[-0.03em] text-pearl-white">
									How it works
								</h2>
							</div>
							<p className="font-manrope font-medium text-[14px] md:text-[16px] leading-relaxed md:leading-[49px] text-pearl-white mt-4 md:mt-0 md:ml-[300px] max-w-[731px]">
								Set your goals, plan your tasks on the calendar, and build daily
								consistency. Track your progress with simple statistics and
								visual indicators. Stay focused, motivated, and in control of
								your time.
							</p>
						</div>

						{/* BUILT YOUR SUCCESS */}
						<h3 className="font-montserrat font-semibold text-[24px] md:text-[34px] leading-tight tracking-[-0.03em] bg-gradient-orange bg-clip-text text-transparent mb-8 md:mb-12">
							BUILT YOUR SUCCESS
						</h3>

						{/* Features Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
							{/* Feature 1 */}
							<div>
								<div className="relative inline-block mb-4">
									<div className="w-[38px] h-[3px] bg-gradient-orange mb-1"></div>
									<h4 className="font-montserrat font-semibold text-[20px] md:text-[24px] tracking-[-0.03em] text-pearl-white">
										Smart Goal Setting
									</h4>
								</div>
								<p className="font-manrope font-medium text-[14px] md:text-[16px] leading-relaxed md:leading-[40px] text-pearl-white">
									Define your vision with our intuitive framework designed for
									high achievers.
								</p>
							</div>

							{/* Feature 2 */}
							<div>
								<div className="relative inline-block mb-4">
									<div className="w-[39px] h-[3px] bg-gradient-orange mb-1"></div>
									<h4 className="font-montserrat font-semibold text-[20px] md:text-[24px] tracking-[-0.03em] text-pearl-white">
										Visual Progress
									</h4>
								</div>
								<p className="font-manrope font-medium text-[14px] md:text-[16px] leading-relaxed md:leading-[40px] text-pearl-white">
									Watch your growth with beautiful, live charts that make
									progress tangible.
								</p>
							</div>

							{/* Feature 3 */}
							<div>
								<div className="relative inline-block mb-4">
									<div className="w-[40px] h-[3px] bg-gradient-orange mb-1"></div>
									<h4 className="font-montserrat font-semibold text-[20px] md:text-[24px] tracking-[-0.03em] text-pearl-white">
										Habit Reminders
									</h4>
								</div>
								<p className="font-manrope font-medium text-[14px] md:text-[16px] leading-relaxed md:leading-[40px] text-pearl-white">
									Stay on track with gentle, intelligent nudges that fit your
									personal schedule.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Feature Section - The possibilities are beyond your imagination */}
			<section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
				<div className="max-w-[972px] mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Image */}
						<div className="order-2 lg:order-1">
							<Image
								src={landingImage}
								alt="Goal achievement visualization"
								className="w-full h-auto max-w-[363px] mx-auto lg:mx-0 rounded-[33px]"
							/>
						</div>

						{/* Content */}
						<div className="order-1 lg:order-2">
							<h2 className="font-montserrat font-semibold text-[32px] md:text-[42px] lg:text-[48px] leading-tight tracking-[-0.03em] bg-gradient-orange bg-clip-text text-transparent mb-6 md:mb-8 max-w-[360px]">
								The possibilities are beyond your imagination
							</h2>
							<p className="font-manrope font-medium text-[14px] md:text-[16px] leading-relaxed md:leading-[41px] text-pearl-white">
								Daily tracking increases your chances of turning goals into
								reality. When you see your progress every day, your dreams stop
								being abstract and start becoming achievable.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
				<div className="max-w-[1320px] mx-auto bg-gradient-orange rounded-[10.724px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] px-6 md:px-12 lg:px-16 py-8 md:py-10 lg:py-9 flex flex-col md:flex-row items-center justify-between gap-6">
					<h2 className="font-montserrat font-semibold text-[28px] md:text-[36px] lg:text-[40px] leading-tight tracking-[-0.03em] text-deep-bg text-center md:text-left max-w-[588px]">
						Ready to reach your potential?
					</h2>
					<button className="bg-sea-green text-pearl-white font-montserrat font-semibold text-[24px] md:text-[28px] lg:text-[32px] tracking-[-0.03em] px-8 md:px-12 lg:px-16 py-4 md:py-5 rounded-[40px] hover:opacity-90 transition-opacity whitespace-nowrap">
						Get Started
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-vibrant-orange mt-12 md:mt-16 lg:mt-20">
				<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-12 lg:py-14">
					<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 mb-8">
						{/* Creator 1 - Juan Manuel Garcia */}
						<div className="text-center lg:text-left">
							<h3 className="font-montserrat font-semibold text-[20px] md:text-[24px] text-pearl-white mb-2">
								Juan Manuel Garcia
							</h3>
							<a
								href="mailto:juanmanuel_garcia98@hotmail.com"
								className="font-manrope font-medium text-[12px] md:text-[13px] text-pearl-white hover:underline block mb-2">
								juanmanuel_garcia98@hotmail.com
							</a>
							<a
								href="https://github.com/LittleBigPants"
								target="_blank"
								rel="noopener noreferrer"
								className="font-manrope font-medium text-[12px] md:text-[13px] text-pearl-white hover:underline block mb-2">
								https://github.com/LittleBigPants
							</a>
							<a
								href="https://www.linkedin.com/in/juan-manuel-garcia-99952b270/"
								target="_blank"
								rel="noopener noreferrer"
								className="font-manrope font-medium text-[12px] md:text-[13px] text-pearl-white hover:underline block">
								https://www.linkedin.com/in/juan-manuel-garcia-99952b270/
							</a>
						</div>

						{/* Creator 2 - Gino Rubén Giorgi */}
						<div className="text-center lg:text-left">
							<h3 className="font-montserrat font-semibold text-[20px] md:text-[24px] text-pearl-white mb-2">
								Gino Rubén Giorgi
							</h3>
							<a
								href="mailto:ginorubengiorgi@gmail.com"
								className="font-manrope font-medium text-[12px] md:text-[13px] text-pearl-white hover:underline block mb-2">
								ginorubengiorgi@gmail.com
							</a>
							<a
								href="https://github.com/ginogiorgi"
								target="_blank"
								rel="noopener noreferrer"
								className="font-manrope font-medium text-[12px] md:text-[13px] text-pearl-white hover:underline block mb-2">
								https://github.com/ginogiorgi
							</a>
							<a
								href="https://www.linkedin.com/in/ginorubengiorgi/"
								target="_blank"
								rel="noopener noreferrer"
								className="font-manrope font-medium text-[12px] md:text-[13px] text-pearl-white hover:underline block">
								https://www.linkedin.com/in/ginorubengiorgi/
							</a>
						</div>
					</div>

					{/* Copyright */}
					<div className="text-center">
						<p className="font-abeezee text-[11px] md:text-[12px] text-pearl-white">
							© 2026 GoalPlanner. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Landing;
