const element =React.createElement(
    'h1', { className: "titre", id: "heidi"}, 'Hello World'
    
);
console.log(element)
ReactDOM.render(element, document.querySelector("#app"))