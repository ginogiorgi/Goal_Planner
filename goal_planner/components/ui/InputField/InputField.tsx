interface InputFieldProps {
    label: string;
    type?: "text" | "date" | "email" | "password";
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
}: InputFieldProps) => {
    return (
        <div>
            <label className="block text-white-pearl mb-4">{label}</label>
            <input
                type={type}
                className="w-full h-12 bg-input-bg border border-input-bg text-white-pearl placeholder:text-input-text rounded-2xl px-3 focus:outline-none focus:border-vibrant-orange transition-colors"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
