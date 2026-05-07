import React from "react";

export const Table = ({ children }: any) => {
    return (
        <table className="w-full border">
            {children}
        </table>
    );
};