<<<<<<< HEAD
    
    
    const parent = React.createElement("div", { id: "parent" }, [
        React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am an h1 tag"), 
        React.createElement("h2", {}, "I am an h2 tag"),
        ]),
        
        React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag"), 
        React.createElement("h2", {}, "I am an h2 tag"),
        ])
    ]);
    
    
    
    

    console.log(parent);
        
    const root = ReactDOM.createRoot(document.getElementById("root"));
        
    root.render(parent);
=======
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header"; 
import Body from "./src/components/Body"; 

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
>>>>>>> 4569c83 (Reinitialise after accidental .git deletion)
