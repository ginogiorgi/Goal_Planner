interface ButtonProps {
    variant?: "primary" | "secondary" | "outline";
    mobileText?: string;
    desktopText?: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}

const Button = ({
    variant = "primary",
    mobileText,
    desktopText,
    href,
    onClick,
    className = "",
}: ButtonProps) => {
    const baseStyles =
        "px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base transition";

    const variantStyles = {
        primary: "rounded bg-vibrant-orange",
        secondary: "hover:text-vibrant-orange",
        outline: "rounded border border-vibrant-orange hover:bg-vibrant-orange",
    };

    const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    const content =
        mobileText && desktopText ? (
            <>
                <span className="md:hidden">{mobileText}</span>
                <span className="hidden md:inline">{desktopText}</span>
            </>
        ) : (
            mobileText || desktopText
        );

    if (href) {
        return (
            <a href={href} className={styles}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={styles}>
            {content}
        </button>
    );
};

export default Button;
