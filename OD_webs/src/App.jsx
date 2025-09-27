import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '/home/andylml/Desktop/otros_dias/OD_webs/src/firebase-config.js'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import FeaturedProducts from './components/FeaturedProducts'
import Artists from './components/Artists'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [userData, setUserData] = useState(null)
  const [currentSection, setCurrentSection] = useState('home')

  const docRef = doc(db, "users", "yoDcY5Yrf1rcVDcb4K9Y")

  const getData = async () => { 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserData(docSnap.data());
      console.log(docSnap.data());
    }
  };

  useEffect(() => {
    getData()
  }, [])

  // Función para cambiar sección
  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'artists':
        return <Artists />;
      case 'home':
      default:
        return (
          <>
            <HeroCarousel />
            <FeaturedProducts />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onSectionChange={handleSectionChange} currentSection={currentSection} />
      {renderSection()}
      <Footer />
    </div>
  )
}

export default App