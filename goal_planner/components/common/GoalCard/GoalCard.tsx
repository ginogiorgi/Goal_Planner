import { HiDotsVertical } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import CreativeIcon from "../../../public/Creative.svg";
import FitnessIcon from "../../../public/Fitness.svg";
import Image from "next/image";

interface GoalCardProps {
	title: string;
	description?: string;
	progress?: number;
	isActive?: boolean;
	isCompleted?: boolean;
	showProgress?: boolean;
	showMenu?: boolean;
	showTargetDate?: boolean;
	targetDate?: string;
	category?: string;
	icon?: string;
	onEdit?: () => void;
	onDelete?: () => void;
	onMenu?: () => void;
}

export default function GoalCard({
	title,
	description,
	progress = 0,
	isActive = false,
	isCompleted = false,
	showProgress = true,
	showMenu = true,
	showTargetDate = false,
	targetDate,
	category = "Creative",
	icon,
	onEdit,
	onDelete,
	onMenu,
}: GoalCardProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);
	return (
		<div
			className={`w-full rounded-[20px] border bg-input-bg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 p-3 ${
				showProgress
					? "max-w-[1280px] h-auto md:h-[106px] border-input-bg"
					: "border-[rgba(255,255,255,0.05)]"
			}`}>
			{/* Edit Icon Badge */}
			<div
				className={`w-10 h-10 bg-vibrant-orange rounded-[16px] flex items-center justify-center flex-shrink-0 ${
					showProgress ? "w-14 h-14 md:ml-[25px]" : ""
				}`}>
				<Image
					src={icon || (category === "Creative" ? CreativeIcon : FitnessIcon)}
					alt={category}
					className={`${showProgress ? "h-8 w-8" : "w-6 h-6"} filter brightness-0 invert`}
				/>
			</div>

			{/* Content Container */}
			<div
				className={`flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
					showProgress ? "w-full md:px-5" : "w-full"
				}`}>
				{/* Title and Description */}
				<div className="flex-1">
					<div className="flex items-center gap-3 mb-1">
						<h3
							className={`text-white-pearl font-bold ${
								showProgress
									? "font-text text-xl leading-[28px]"
									: "font-manrope text-sm md:text-base leading-[1.3]"
							}`}>
							{title}
						</h3>
						{isActive && !isCompleted && (
							<span className="inline-flex px-2 py-[2.5px] rounded bg-vibrant-orange">
								<span className="text-white-pearl font-text font-semibold text-xs leading-[15px] tracking-[1px] uppercase">
									Active
								</span>
							</span>
						)}
						{isCompleted && (
							<span className="inline-flex px-2 py-[2.5px] rounded bg-green-500">
								<span className="text-white-pearl font-text font-semibold text-xs leading-[15px] tracking-[1px] uppercase">
									Completed
								</span>
							</span>
						)}
					</div>
					{description && (
						<p
							className={`font-medium ${
								showProgress
									? "text-white-pearl font-text text-sm leading-[20px]"
									: "text-input-text font-manrope text-xs md:text-sm leading-[1.3]"
							}`}>
							{description}
						</p>
					)}
				</div>

				{/* Progress Section */}
				{showProgress && (
					<div className="flex flex-col gap-2 w-full md:w-64 md:mr-12">
						<div className="flex items-center justify-between">
							<span className="text-white-pearl font-text font-medium text-sm leading-[20px]">
								Progress
							</span>
							<span className="text-white-pearl font-text font-semibold text-sm leading-[20px]">
								{progress}%
							</span>
						</div>
						<div className="h-[6px] w-full bg-progress-empty rounded-full overflow-hidden">
							<div
								className="h-full bg-vibrant-orange rounded-full transition-all duration-300"
								style={{ width: `${progress}%` }}
							/>
						</div>
					</div>
				)}

				{/* Target Date Section */}
				{showTargetDate && targetDate && (
					<div className="flex flex-col items-end">
						<span className="text-input-text font-text font-medium text-[10px] leading-[1.5] tracking-[0.5px] uppercase mb-0.5">
							Target
						</span>
						<span className="text-white-pearl font-text font-semibold text-sm leading-[1.5]">
							{targetDate}
						</span>
					</div>
				)}
			</div>

			{/* Menu Button */}
			{showMenu && (
				<div className="relative" ref={menuRef}>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className={`flex items-center justify-center hover:opacity-70 transition-opacity text-white-pearl cursor-pointer text-xl ${
							showProgress ? "md:mr-6 self-end md:self-center" : ""
						}`}>
						<HiDotsVertical />
					</button>

					{/* Dropdown Menu */}
					{isMenuOpen && (
						<div className="absolute right-0 top-full mt-2 w-48 bg-deep-bg border border-input-bg rounded-lg shadow-lg z-50">
							<div className="py-2">
								{onEdit && (
									<button
										onClick={() => {
											onEdit();
											setIsMenuOpen(false);
										}}
										className="w-full text-left px-4 py-2 text-white-pearl hover:bg-input-bg transition-colors font-text text-sm">
										Edit Goal
									</button>
								)}
								{onDelete && (
									<button
										onClick={() => {
											onDelete();
											setIsMenuOpen(false);
										}}
										className="w-full text-left px-4 py-2 text-red-500 hover:bg-input-bg transition-colors font-text text-sm">
										Delete Goal
									</button>
								)}
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
