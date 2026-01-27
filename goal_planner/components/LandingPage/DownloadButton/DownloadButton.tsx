interface DownloadButtonProps {
    icon: string;
    topText: string;
    bottomText: string;
    href: string;
}

const DownloadButton = ({
    icon,
    topText,
    bottomText,
    href,
}: DownloadButtonProps) => {
    return (
        <a
            href={href}
            className="flex items-center justify-center gap-3 bg-black text-white-pearl rounded-xl py-3 px-6 hover:bg-gray-900 transition"
        >
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img
                    src={icon}
                    alt={bottomText}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="text-left">
                <div className="text-xs">{topText}</div>
                <div className="text-xl font-semibold -mt-1">{bottomText}</div>
            </div>
        </a>
    );
};

export default DownloadButton;
