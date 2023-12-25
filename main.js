const root = ReactDOM.createRoot(document.querySelector('#root'));

// const content - (
// <div>
//     <h1 className="titie" >Today : {(new Date()).toDateString()}</h1>
// </div>
// )
function Counter(){
    return(
        <div class="counter">
        <button>+</button>
        <h2 id ="rs">{0}</h2>
        <button>-</button>
        <button>C</button>

        </div>
        

    )
}
function App() {
    return(
        <div>
         <h1>Today : {new Date().toDateString()}</h1>
         <Counter />
        </div>
    );
    
}

root.render(<App/>)