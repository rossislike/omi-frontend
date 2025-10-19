import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { useTest } from "./hooks/useTest"
import { Navbar } from "./components/Navbar"

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
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<>Home</>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
