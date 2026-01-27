import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    mobileText?: string;
    desktopText?: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
}

const Button = ({
    mobileText,
    desktopText,
    href,
    onClick,
    className = "",
    children,
}: ButtonProps) => {
    const baseStyles =
        "px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-text font-normal rounded bg-vibrant-orange text-white-pearl transition";

    const styles = `${baseStyles} ${className}`;

    const content = children ? (
        children
    ) : mobileText && desktopText ? (
        <>
            <span className="md:hidden">{mobileText}</span>
            <span className="hidden md:inline">{desktopText}</span>
        </>
    ) : (
        mobileText || desktopText
    );

    if (href) {
        return (
            <Link href={href} className={styles}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={styles}>
            {content}
        </button>
    );
};

export default Button;
