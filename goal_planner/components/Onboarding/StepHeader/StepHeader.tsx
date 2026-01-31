import { ReactNode } from "react";

interface StepHeaderProps {
    title: string | ReactNode;
    description: string;
}

const StepHeader = ({ title, description }: StepHeaderProps) => {
    return (
        <div className="py-4 px-4 mt-6 mb-6">
            <h1 className="text-white-pearl font-title font-bold text-6xl mb-4 leading-normal">
                {title}
            </h1>
            <p className="text-input-text font-text text-lg">{description}</p>
        </div>
    );
};

export default StepHeader;
