import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const colors = [
  { name: "Red", className: "bg-red-500" },
  { name: "Blue", className: "bg-blue-500" },
  { name: "Green", className: "bg-green-500" },
  { name: "Yellow", className: "bg-yellow-300" },
  { name: "Purple", className: "bg-purple-500" },
  { name: "Pink", className: "bg-pink-500" },
  { name: "Orange", className: "bg-orange-500" },
  { name: "Teal", className: "bg-teal-500" },
  { name: "Cyan", className: "bg-cyan-500" },
];

function App() {
  const [bgColor, setBgColor] = useState("bg-gray-200");

  return (
    <div
      className={`h-screen w-screen flex flex-col justify-center items-center transition-all duration-500 ${bgColor} p-6`}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center drop-shadow-lg px-6">
        Pick a Color
      </h1>

      {/* Color Buttons */}
      <div className="absolute bottom-10 w-full flex flex-wrap justify-center gap-2 px-4 max-w-4xl mx-auto">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setBgColor(color.className)}
            className={`px-4 py-2 text-md font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl text-white ${color.className}`}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
