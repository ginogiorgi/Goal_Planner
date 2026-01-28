interface StepHeaderProps {
    title: string;
    description: string;
}

const StepHeader = ({ title, description }: StepHeaderProps) => {
    return (
        <div className="mt-10 mb-10">
            <h1 className="text-white-pearl font-title font-bold text-6xl mb-4">
                {title}
            </h1>
            <p className="text-input-text font-text text-lg">{description}</p>
        </div>
    );
};

export default StepHeader;
