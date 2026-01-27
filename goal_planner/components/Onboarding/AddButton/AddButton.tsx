import { FaPlus } from "react-icons/fa";

interface AddButtonProps {
    label: string;
    onClick?: () => void;
}

const AddButton = ({ label, onClick }: AddButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="w-full py-6 px-4 border-2 border-dashed border-[rgba(255,85,0,0.4)] bg-[rgba(255,255,255,0.01)] rounded-[20px] flex items-center justify-center gap-2 hover:border-vibrant-orange transition-colors"
        >
            <div className="w-6 h-6 border-2 border-vibrant-orange rounded-full flex items-center justify-center">
                <FaPlus size={10} className="text-vibrant-orange" />
            </div>
            <span className="text-vibrant-orange font-text font-normal text-sm leading-[18px] tracking-[0.35px]">
                {label}
            </span>
        </button>
    );
};

export default AddButton;
