import "./index.css";

import HomePage from "./components/HomePage";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10 gap-5 flex flex-col min-h-screen min-w-screen">
     <HomePage/>
    </div>
  );
}

export default App;
