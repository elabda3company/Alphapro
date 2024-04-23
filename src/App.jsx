import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import { useLang } from './context/DataContext'
import Footer from './components/footer/Footer'
import NoMatch from './pages/NoMatch'
import ContactsSidebar from './components/contacts/ContactsSidebar'
 

function App() {
  const {language,handleChangeLanguage} = useLang();
  const handleChange = (event) => {
    handleChangeLanguage(event.target.value);
  };
  return (
    <>
 
      <div dir={language === 'arabic' ? 'rtl' : 'ltr'} className='bg-[#030014]  '>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
        <ContactsSidebar />
        <Footer />
      
      </div>
 
    </>
  )
}

export default App
