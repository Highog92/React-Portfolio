import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from './Layouts/Main';
import { Welcome } from "./Pages/Welcome";
import { Projects } from './Pages/Projects';
import { About } from './Pages/About';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout title='Homepage' />}>
            <Route path="/" element={<Welcome title="Homepage" />} />
            <Route path="/welcome" index element={<Welcome title='Homepage' />} />
            <Route path="/about" element={<About title='About' />} />
            <Route path="/projects" element={<Projects title='Projects' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
