export const Select = ({ className = "", onValueChange }: any) => {
    return (
        <select
            onChange={(e) => onValueChange?.(e.target.value)}
            className={`border border-gray-200 bg-gray-50 px-4 py-2 rounded-lg ${className}`}
        >
            <option value="">Tanlang</option>
            <option value="Dori">Dori</option>
            <option value="Asbob">Asbob</option>
        </select>
    );
};