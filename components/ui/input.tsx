export const Input = ({ className = "", ...props }: any) => {
    return (
        <input
            {...props}
            className={`h-[40px] px-4 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:ring-2 focus:ring-green-400 ${className}`}
        />
    );
};