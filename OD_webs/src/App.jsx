import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '/home/andylml/Desktop/otros_dias/OD_webs/src/firebase-config.js'
import Header from './components/Header'
import ASCIIWelcome from './components/ASCIIWelcome'
import HeroCarousel from './components/HeroCarousel'
import FeaturedProducts from './components/FeaturedProducts'
import Artists from './components/Artists'
import Footer from './components/Footer'
import RTSEffects from './components/RTSEffects' // Nuevo componente
import './App.css'

function App() {
  const [userData, setUserData] = useState(null)
  const [isInverted, setIsInverted] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)

  const docRef = doc(db, "users", "yoDcY5Yrf1rcVDcb4K9Y")

  const getData = async () => { 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserData(docSnap.data());
    }
  };

  useEffect(() => {
    getData()
    if (isInverted) {
      document.body.classList.add('inverted');
    } else {
      document.body.classList.remove('inverted');
    }
  }, [isInverted])

  const handleEnterSite = () => {
    setHasEntered(true);
  };

  if (!hasEntered) {
    return (
      <div className={`min-h-screen ${isInverted ? 'bg-white' : 'bg-black'} overflow-hidden relative`}>
        <RTSEffects isInverted={isInverted} />
        <ASCIIWelcome 
          onEnterSite={handleEnterSite} 
          isInverted={isInverted}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isInverted ? 'bg-white text-black' : 'bg-black text-white'} relative`}>
      <RTSEffects isInverted={isInverted} />
      <Header 
        onSectionChange={() => {}} 
        currentSection="home"
        onToggleColors={() => setIsInverted(!isInverted)}
        isInverted={isInverted}
      />
      <HeroCarousel isInverted={isInverted} />
      <FeaturedProducts isInverted={isInverted} />
      <Artists isInverted={isInverted} />
      <Footer isInverted={isInverted} />
    </div>
  )
}

export default App