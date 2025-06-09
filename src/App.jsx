// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// hello

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {GoldBarCollection} from "./pages/goldbar-collection.jsx";
import {OurApp} from "./pages/our-app.jsx";
import {AboutUs} from "./pages/about-us.jsx";
import {ContactUs} from "./pages/contact-us.jsx";
import {Blog} from "./pages/blog.jsx";
import {SignIn} from "./pages/sign-in.jsx";
import {SignUp} from "./pages/sign-up.jsx";
import {NotFound} from "./pages/not-found.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/goldbar-collection" element={<GoldBarCollection />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/our-app" element={<OurApp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      {/*<div>*/}
      {/*  <a href="https://vite.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
    </>
  )
}

export default App
