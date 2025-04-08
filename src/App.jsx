import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useState } from "react";
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"


const router = createBrowserRouter(
  [
    // {
    //   path:"/",
    //   element:
    //   <div className="w-full h-full flex flex-col">
    //     <Navbar/>
    //     <Home/>
    //   </div>
    // },
    {
      path: "/",
      element: (
        <ThemeWrapper>
          <Home />
        </ThemeWrapper>
      ),
    },
    {
      path: "/pastes",
      element: (
        <ThemeWrapper>
           {/* <div className="w-full h-full flex flex-col"> */}
            
            <Paste/>
          {/* </div> */}
        </ThemeWrapper>
      ),
    },
    // {
    //   path:"/pastes",
    //   element: <div className="w-full h-full flex flex-col">
    //   <Navbar/>
    //   <Paste/>
    // </div>
    // },
    {
      path:"/pastes/:id",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <ViewPaste/>
    </div>,
    }
  ]
)


function ThemeWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      {children}
    </div>
  );
}

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
