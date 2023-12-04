import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';
import { MainLayout } from './Layouts/Main';
import { Welcome } from "./Pages/Welcome";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout title='Homepage' />}>
            <Route path="/" element={<Welcome title="Homepage" />} />
            <Route path="/welcome" index element={<Welcome title='Homepage' />} />
            <Route path="/about" index element={<About title='About' />} />
            <Route path="/projects" index element={<Projects title='Projects' />} />
            <Route path="/contact" index element={<Contact title='Contact' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
