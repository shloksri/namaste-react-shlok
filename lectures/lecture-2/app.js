import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am h1 of child1 change"),
        React.createElement("h2", {}, "I am h2 of child1"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am h1 of child2"),
        React.createElement("h2", {}, "I am h2 of child2")
    ])
])

const heading = React.createElement("h1", { id: "heading" }, "This is a core React Element")

const HeadingComponent = () => {
    return <h1>THis is Namaste React Component - Heading Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(HeadingComponent)

