import "./App.css";
// import Header from "./component/Header";
// import Balance from "./component/Balance";
// import IncomeExpenses from "./component/IncomeExpenses";
// import TransactionList from "./component/TransactionList";
// import AddTransaction from "./component/AddTransaction";
// import  {GlobalProvider}  from "./context/GlobalState";

// function App() {
//   return (
//     <GlobalProvider>
//       <Header />
//       <div className="container">
//         <Balance />
//         <IncomeExpenses />
//         <TransactionList />
//         <AddTransaction/>
//       </div>
//     </GlobalProvider>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";


const App = () => {
  const [count, setCount] = useState(0)

  const increase =()=>{
    setCount(prevCount => prevCount +1)
  }

  const decrease =()=>{
    setCount(prevCount => prevCount -1)
  }
  return (
    <div>
      <button className="btn" onClick={increase}>Plus</button>
      <span>{count}</span>
      <button className="btn" onClick={decrease}>Minus</button>
    </div>
  )
  
}


export default App

