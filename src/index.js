import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"; //external CSS file



const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

//================================================
//================================================

function Header() {
    return <h1 className="header" style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Eden's Pizza Co.</h1>
}

//=====================
function Pizza({ name, ingredients, price, photoName}) {
    return (
        <div className="pizza">
            <img src={photoName} alt={name} />
            <h3>{name}</h3>
            <p>{ingredients}</p>
            <p>{price}</p>
        </div>
    );
}

// function Pizza({ name, ingredients, price, photoName, soldOut }) {
//     return (
//         <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
//             <img src={photoName} alt={name} />
//             <div>
//                 <h3>{name}</h3>
//                 <p>{ingredients}</p>
//                 <span>{soldOut ? "Sold Out" : `$${price}`}</span>
//             </div>
//         </div>
//     );
// }

//=====================
function Menu() {
    const currentTime = new Date().getHours();
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <h3>{currentTime >= 10 && currentTime < 22 ? "Authentic Italian Cuisine, all from our stone oven" : " "}</h3>
            

            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        price={pizza.price}
                        photoName={pizza.photoName}
                    />
                ))}
            </ul>
        </div>
    );
}

//=====================
function Order() {
    return (
        <div>
            <p>We're currently open</p>
            <button className="btn">Order</button>
        </div>
    )
}


//=====================
function Footer() {
    const currentTime = new Date().getHours(); // currentTime
    return (
        <div>
            
            <footer className="footer">
                <br></br>
                {currentTime >= 10 && currentTime < 22 ? <Order/> : "Sorry, we're closed"}
                <br></br>
            </footer>
        </div>
    );
};


//=====================
function App() {

    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





