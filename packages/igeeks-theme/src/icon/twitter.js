import * as React from "react";
const Twitter = props => {
    const [color, useColor] = React.useState(props.color ? props.color : "white");
    return (
        <svg
            onMouseEnter={() => {
                useColor("#f3de4f");
            }}
            onMouseLeave={() => {
                useColor(props.color ? props.color : "white");
            }}
            fill={color}
            style={{ marginLeft: "35px" }}
            data-name="Capa 1"
            viewBox="0 0 512 416"
            {...props}
        >
            <title>{"twitter"}</title>
            <path
                d="M512 49.25a218.64 218.64 0 01-60.48 16.57 104.36 104.36 0 0046.18-58 210 210 0 01-66.56 25.41A105 105 0 00249.57 105a108 108 0 002.43 23.93C164.74 124.67 87.52 82.85 35.65 19.14A105 105 0 0067.9 159.42a103.69 103.69 0 01-47.42-12.92v1.15a105.43 105.43 0 0084.1 103.13 104.65 104.65 0 01-27.52 3.46 92.77 92.77 0 01-19.88-1.79c13.6 41.57 52.2 72.13 98.08 73.12a210.93 210.93 0 01-130.14 44.77A197.72 197.72 0 010 368.9 295.54 295.54 0 00161 416c193.16 0 298.76-160 298.76-298.69 0-4.64-.16-9.12-.39-13.57A209.29 209.29 0 00512 49.25z"
            />
        </svg>
    );
};

export default Twitter;
