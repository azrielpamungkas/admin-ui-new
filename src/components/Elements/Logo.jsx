import React from 'react'

function Logo(props) {
    const { variant = "primary" } = props;
    const variantsClasses = {
        primary: "text-primary text-4xl",
        secondary: "text-white text-sm sm:text-2xl",
    };
    return (
        <div className={`flex justify-center font-poppins tracking-wide ${variantsClasses[variant] || variantsClasses.primary}`}>
            <span className="font-bold">FINE</span>
            bank
            <span className="font-bold">.IO</span>
        </div>
    )
}

export default Logo