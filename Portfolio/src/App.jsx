import './Global.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';
import { MainLayout } from './Layouts/Main';
import { Welcome } from './Components/Welcome/Welcome';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout title='Home' />} >
            <Route path="/" element={<Welcome title='Welcome' />} />
            <Route path="/about" element={<About title='About' />} />
            <Route path="/projects" element={<Projects title='Projects' />} />
            <Route path="/contact" element={<Contact title='Contact' />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
