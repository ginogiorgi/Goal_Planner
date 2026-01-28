import { FaPlus } from "react-icons/fa";

interface AddButtonProps {
    label: string;
    onClick?: () => void;
    textSize?: "small" | "medium" | "large";
}

const AddButton = ({ label, onClick, textSize = "medium" }: AddButtonProps) => {
    // Size configurations for text and elements
    const sizeConfig = {
        small: {
            container: "py-3 px-3",
            circle: "w-4 h-4",
            icon: 8,
            text: "text-xs leading-[14px]",
        },
        medium: {
            container: "py-6 px-4",
            circle: "w-6 h-6",
            icon: 10,
            text: "text-sm leading-[18px]",
        },
        large: {
            container: "py-8 px-6",
            circle: "w-8 h-8",
            icon: 12,
            text: "text-base leading-[20px]",
        },
    };

    const config = sizeConfig[textSize];

    return (
        <button
            onClick={onClick}
            className={`w-full ${config.container} border-2 border-dashed border-[rgba(255,85,0,0.4)] bg-[rgba(255,255,255,0.01)] rounded-[20px] flex items-center justify-center gap-2 hover:border-vibrant-orange transition-colors`}
        >
            <div
                className={`${config.circle} border-2 border-vibrant-orange rounded-full flex items-center justify-center`}
            >
                <FaPlus size={config.icon} className="text-vibrant-orange" />
            </div>
            <span
                className={`text-vibrant-orange font-text font-normal tracking-[0.35px] ${config.text}`}
            >
                {label}
            </span>
        </button>
    );
};

export default AddButton;
