import "./index.css";
import { useEffect } from 'react';
import HomePage from "./components/HomePage";
import Header from "./components/seraUi/Header";

export function App() {
  //  dark mode class to the root element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    
    // Cleanup function to remove the class when component unmounts
    return () => {
      root.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen  text-foreground">
        <Header/>
      <div className="container mx-auto p-8 text-center relative z-10 gap-5 flex flex-col min-h-screen">
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
