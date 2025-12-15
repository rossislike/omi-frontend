import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { useTest } from "./hooks/useTest"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import Home from "./pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
function App() {
  // const { data } = useTest()
  // console.log(data)

  // if (!data) {
  //   return <div>Loading...</div>
  // }

  const queryClient = new QueryClient({
    defaultOptions: {},
  })

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
