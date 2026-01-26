import { useState } from "react";
import Image from "next/image";
import HealthIcon from "../../../public/Health.svg";
import CareerIcon from "../../../public/Career.svg";
import AcademicIcon from "../../../public/Academic.svg";
import FinanceIcon from "../../../public/Finance.svg";
import FitnessIcon from "../../../public/Fitness.svg";
import SkillIcon from "../../../public/Skill.svg";
import CreativeIcon from "../../../public/Creative.svg";
import SocialIcon from "../../../public/Social.svg";
const NewGoal = () => {
	const [selectedCategory, setSelectedCategory] = useState("Career");
	const [selectedColor, setSelectedColor] = useState("#D94E06");

	const categories = [
		{
			name: "Health",
			icon: HealthIcon,
		},
		{
			name: "Career",
			icon: CareerIcon,
		},
		{
			name: "Academic",
			icon: AcademicIcon,
		},
		{
			name: "Finance",
			icon: FinanceIcon,
		},
		{
			name: "Fitness",
			icon: FitnessIcon,
		},
		{
			name: "Skill",
			icon: SkillIcon,
		},
		{
			name: "Creative",
			icon: CreativeIcon,
		},
		{
			name: "Social",
			icon: SocialIcon,
		},
	];

	const colors = [
		{ name: "Orange", value: "#D94E06" },
		{ name: "Blue", value: "#1F6AE1" },
		{ name: "Green", value: "#2E8B57" },
		{ name: "Purple", value: "#CB30E0" },
		{ name: "Yellow", value: "#FC0" },
	];

	return (
		<div className="px-4 md:px-10 lg:px-20 py-4">
			<div className="max-w-[1280px] mx-auto">
				{/* Category Selection */}
				<div className="mb-4">
					<label className="block text-white-pearl font-manrope font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-3">
						Select Category
					</label>
					<div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 w-[60%]">
						{categories.map((category) => (
							<button
								key={category.name}
								onClick={() => setSelectedCategory(category.name)}
								className={`relative h-20 w-20 flex flex-col items-center justify-center gap-0.5 rounded-[7px] transition-all ${
									selectedCategory === category.name
										? "bg-vibrant-orange border-2 border-vibrant-orange shadow-[0_0_15px_0_rgba(255,110,66,0.3)]"
										: "bg-input-bg border border-[rgba(255,255,255,0.05)] hover:border-vibrant-orange/50"
								}`}>
								<Image
									src={category.icon}
									alt={category.name}
									width={16}
									height={16}
									className={`object-contain transition-colors ${
										selectedCategory === category.name
											? "filter brightness-0 invert"
											: ""
									}`}
								/>
								<span
									className={`font-manrope font-medium text-[8px] leading-[8px] text-center ${
										selectedCategory === category.name
											? "text-white-pearl"
											: "text-input-text"
									}`}>
									{category.name}
								</span>
								{selectedCategory === category.name && (
									<div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-vibrant-orange rounded-full flex items-center justify-center">
										<svg
											width="8"
											height="8"
											viewBox="0 0 15 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M5.64887 11.3335L2.48221 8.16683L3.27387 7.37516L5.64887 9.75016L10.7461 4.65294L11.5378 5.44461L5.64887 11.3335Z"
												fill="white"
											/>
										</svg>
									</div>
								)}
							</button>
						))}
					</div>
				</div>

				{/* Goal Name and Description */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
					<div>
						<label className="block text-white-pearl font-manrope font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
							Goal Name
						</label>
						<input
							type="text"
							className="w-full h-[44px] bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[7px] px-3 text-white-pearl font-manrope text-[15px] focus:outline-none focus:border-vibrant-orange transition-colors"
							placeholder="e.g., Master UI Design"
						/>
					</div>
					<div>
						<label className="block text-white-pearl font-manrope font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
							Description
						</label>
						<input
							type="text"
							className="w-full h-[44px] bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[7px] px-3 text-white-pearl font-manrope text-[15px] focus:outline-none focus:border-vibrant-orange transition-colors"
							placeholder="Describe your goal..."
						/>
					</div>
				</div>

				{/* Date and Color Selection */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
					<div>
						<label className="block text-white-pearl font-manrope font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
							Start Date
						</label>
						<input
							type="date"
							className="w-full h-[44px] bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[7px] px-3 text-white-pearl font-manrope text-[15px] focus:outline-none focus:border-vibrant-orange transition-colors"
						/>
					</div>
					<div>
						<label className="block text-white-pearl font-manrope font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
							Target Date
						</label>
						<input
							type="date"
							className="w-full h-[44px] bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[7px] px-3 text-white-pearl font-manrope text-[15px] focus:outline-none focus:border-vibrant-orange transition-colors"
						/>
					</div>
					<div>
						<label className="block text-white-pearl font-manrope font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
							Color Tag
						</label>
						<div className="flex items-center gap-2 h-[44px]">
							{colors.map((color) => (
								<button
									key={color.value}
									onClick={() => setSelectedColor(color.value)}
									className={`w-5 h-5 rounded-full transition-all ${
										selectedColor === color.value
											? "shadow-[0_0_0_2px_rgba(255,110,66,0.2)]"
											: "hover:scale-110"
									}`}
									style={{ backgroundColor: color.value }}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Tasks and Daily Habits */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{/* Tasks */}
					<div>
						<div className="flex items-center gap-2 mb-3">
							<div className="w-8 h-8 bg-[rgba(255,85,0,0.1)] rounded-[7px] flex items-center justify-center">
								<svg
									width="20"
									height="22"
									viewBox="0 0 25 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M15.2183 18.5694L16.5794 17.2083L12.9822 13.6111V9.13883H11.0378V14.3888L15.2183 18.5694ZM12.01 23.7222C10.6651 23.7222 9.40121 23.467 8.21834 22.9565C7.03547 22.4461 6.00653 21.7534 5.13153 20.8784C4.25653 20.0034 3.56382 18.9745 3.05341 17.7916C2.54299 16.6087 2.28778 15.3449 2.28778 13.9999C2.28778 12.655 2.54299 11.3911 3.05341 10.2083C3.56382 9.02541 4.25653 7.99647 5.13153 7.12147C6.00653 6.24647 7.03547 5.55376 8.21834 5.04335C9.40121 4.53293 10.6651 4.27772 12.01 4.27772C13.3549 4.27772 14.6188 4.53293 15.8017 5.04335C16.9845 5.55376 18.0135 6.24647 18.8885 7.12147C19.7635 7.99647 20.4562 9.02541 20.9666 10.2083C21.477 11.3911 21.7322 12.655 21.7322 13.9999C21.7322 15.3449 21.477 16.6087 20.9666 17.7916C20.4562 18.9745 19.7635 20.0034 18.8885 20.8784C18.0135 21.7534 16.9845 22.4461 15.8017 22.9565C14.6188 23.467 13.3549 23.7222 12.01 23.7222ZM12.01 21.7777C14.1651 21.7777 16.0002 21.0202 17.5152 19.5052C19.0303 17.9901 19.7878 16.155 19.7878 13.9999C19.7878 11.8449 19.0303 10.0098 17.5152 8.49474C16.0002 6.97969 14.1651 6.22217 12.01 6.22217C9.85491 6.22217 8.01984 6.97969 6.50479 8.49474C4.98975 10.0098 4.23223 11.8449 4.23223 13.9999C4.23223 16.155 4.98975 17.9901 6.50479 19.5052C8.01984 21.0202 9.85491 21.7777 12.01 21.7777Z"
										fill="#D94E06"
									/>
								</svg>
							</div>
							<h2 className="text-white-pearl font-manrope font-semibold text-[16px] leading-[22px]">
								Tasks
							</h2>
						</div>

						<button className="w-full py-4 border-2 border-dashed border-[rgba(255,85,0,0.4)] bg-[rgba(255,255,255,0.01)] rounded-[16px] flex items-center justify-center gap-2 hover:border-vibrant-orange transition-colors">
							<div className="w-6 h-6 border-2 border-vibrant-orange rounded-full flex items-center justify-center">
								<svg
									width="12"
									height="13"
									viewBox="0 0 15 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6.44985 8.54923H3.1189V7.43891H6.44985V4.10796H7.56017V7.43891H10.8911V8.54923H7.56017V11.8802H6.44985V8.54923Z"
										fill="#D94E06"
									/>
								</svg>
							</div>
							<span className="text-vibrant-orange font-manrope font-normal text-[13px] leading-[18px] tracking-[0.35px]">
								Add Task
							</span>
						</button>
					</div>

					{/* Daily Habits */}
					<div>
						<div className="flex items-center gap-2 mb-3">
							<div className="w-8 h-8 bg-[rgba(255,85,0,0.1)] rounded-[7px] flex items-center justify-center">
								<svg
									width="20"
									height="22"
									viewBox="0 0 25 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M18.8156 11.0832L17.6003 8.40961L14.9267 7.19434L17.6003 5.97906L18.8156 3.30545L20.0308 5.97906L22.7044 7.19434L20.0308 8.40961L18.8156 11.0832ZM18.8156 24.6943L17.6003 22.0207L14.9267 20.8054L17.6003 19.5902L18.8156 16.9166L20.0308 19.5902L22.7044 20.8054L20.0308 22.0207L18.8156 24.6943ZM9.09333 21.7777L6.66277 16.4304L1.31555 13.9999L6.66277 11.5693L9.09333 6.22211L11.5239 11.5693L16.8711 13.9999L11.5239 16.4304L9.09333 21.7777ZM9.09333 17.0624L10.0656 14.9721L12.1558 13.9999L10.0656 13.0277L9.09333 10.9374L8.12111 13.0277L6.03083 13.9999L8.12111 14.9721L9.09333 17.0624Z"
										fill="#D94E06"
									/>
								</svg>
							</div>
							<h2 className="text-white-pearl font-manrope font-semibold text-[16px] leading-[22px]">
								Daily Habits
							</h2>
						</div>

						<button className="w-full py-4 border-2 border-dashed border-[rgba(255,85,0,0.4)] bg-[rgba(255,255,255,0.01)] rounded-[16px] flex items-center justify-center gap-2 hover:border-vibrant-orange transition-colors">
							<div className="w-6 h-6 border-2 border-vibrant-orange rounded-full flex items-center justify-center">
								<svg
									width="12"
									height="13"
									viewBox="0 0 15 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6.44984 8.54923H3.11889V7.43891H6.44984V4.10796H7.56016V7.43891H10.8911V8.54923H7.56016V11.8802H6.44984V8.54923Z"
										fill="#D94E06"
									/>
								</svg>
							</div>
							<span className="text-vibrant-orange font-manrope font-normal text-[13px] leading-[18px] tracking-[0.35px]">
								Add Daily Habit
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewGoal;
