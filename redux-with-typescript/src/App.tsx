import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import "./index.css";

import HomePage from "./components/homePage";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10 gap-5 flex flex-col">
     <HomePage/>
    </div>
  );
}

export default App;
