import { useState } from 'react'
import Header from './components/Header';
// import Footer from './components/Footer'; // <-- Add this line
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const appTitle = "React Props Demo";
  const year = new Date().getFullYear();

  return ( 
   <div id="container">
     <Header title={appTitle} />
     <main>
       <h2>Welcome to the Props Demo!</h2>
       <p>
         This app demonstrates how to pass
         data between components using props.
       </p>
     </main>
     <Footer copyrightYear={year} />
   </div>
 );
}

export default App
