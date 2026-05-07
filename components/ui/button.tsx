export const Button = ({ className = "", ...props }: any) => {
    return (
        <button
            {...props}
            className={`
        h-[42px]
        px-5
        rounded-xl
        text-white
        font-medium
        bg-gradient-to-r from-emerald-500 to-cyan-500
        hover:from-emerald-600 hover:to-cyan-600
        shadow-md hover:shadow-lg
        transition
        ${className}
      `}
        />
    );
};