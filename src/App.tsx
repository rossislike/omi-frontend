import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { useTest } from "./hooks/useTest"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import Home from "./pages/Home"

function App() {
  // const { data } = useTest()
  // console.log(data)

  // if (!data) {
  //   return <div>Loading...</div>
  // }

  console.log("hello")

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <main>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
