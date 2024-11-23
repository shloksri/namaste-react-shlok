import React from "react";
import ReactDOM from "react-dom/client";


// React Element
const heading = (
    <h1>
        This is a React Element
    </h1>
);

//React Component
const HeadingComponent = () => {
    return <h1>
        This is a React Component.
    </h1>
};


const Title = () => (
    <h1>
        This is title.
    </h1>
);

// Component Composition
const HeadingComponent2 = () => (
    <div>
        <Title />
        <h1> This is Heading Component 2</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2 />)