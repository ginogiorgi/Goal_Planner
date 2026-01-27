interface StepHeaderProps {
    title: string;
    description: string;
}

const StepHeader = ({ title, description }: StepHeaderProps) => {
    return (
        <div className="mt-10 mb-12 px-4 md:px-10 lg:px-20">
            <h1 className="text-white-pearl font-title font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.025em] mb-4">
                {title}
            </h1>
            <p className="text-input-text font-text font-normal text-lg md:text-md leading-[1.4] max-w-[600px]">
                {description}
            </p>
        </div>
    );
};

export default StepHeader;
