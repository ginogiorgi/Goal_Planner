import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import cn from "clsx";

interface SidebarModalProps {
	title?: string;
	children: React.ReactNode;
	className?: string;
	onClose?: () => void;
}

export default function SidebarModal({
	title = "Daily Analytics",
	children,
	className,
	onClose,
}: SidebarModalProps) {
	return (
		<div className="fixed right-0 top-0 h-full w-80 z-50 border-l border-input-bg bg-deep-bg">
			{/* Header */}
			<div className="flex items-center justify-between mb-8 p-6 border-b border-input-bg">
				<div
					onClick={onClose}
					className="text-vibrant-orange hover:opacity-80 transition-opacity">
					<ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
				</div>
				<h1 className="text-2xl font-bold text-white flex-1">{title}</h1>
			</div>

			{/* Content */}
			<div className="h-full overflow-y-auto p-6">{children}</div>
		</div>
	);
}
