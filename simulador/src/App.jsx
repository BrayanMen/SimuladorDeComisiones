import { useEffect, useState } from 'react'
import Header from './components/Header'
import { fetchMeses, fetchNav, fetchProductos, fetchUsuarioInicial } from './Services/api';
import { LoadingSpinner } from './components/LoadingSpinner';
import Navigation from './components/Navigation';

function App() {
  const [activeNav, setActiveNav] = useState('');
  const [nav, setNav] = useState([]);
  const [productos, setProductos] = useState([]);
  const [meses, setMeses] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargaData = async () => {
      try {
        const [navData, productosData, mesesData, userData] = await Promise.all([
          fetchNav(),
          fetchProductos(),
          fetchMeses(),
          fetchUsuarioInicial()
        ])
        setNav(navData); 
        setProductos(productosData);
        setMeses(mesesData);
        setUserData(userData);
        if (navData.length > 0) {
          setActiveNav(navData[0].id);
        }
      } catch (error) {
        console.error(error);
      }
      finally {
        setLoading(false);
      }
    }
    cargaData();
  }, []);

  if(loading){
    return <LoadingSpinner/>;
  }

  return (
    <div className='flex flex-col bg-gray-300 w-full h-screen'>
      <Header />
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} nav={nav} />
    </div>
  )
}

export default App
