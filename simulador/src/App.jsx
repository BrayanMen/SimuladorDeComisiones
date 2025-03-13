import { Suspense, useEffect, useState } from 'react'
import Header from './components/Header'
import { fetchMeses, fetchNav, fetchProductos, fetchUsuarioInicial } from './Services/api';
import { LoadingSpinner } from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import SimulacionScreen from './Screen/SimulacionScreen';

function App() {
  const [userData, setUserData] = useState({});
  const [nav, setNav] = useState([]);
  const [activeNav, setActiveNav] = useState('');
  const [productos, setProductos] = useState([]);
  const [productoSelec, setProductoSelec] = useState('');
  const [meses, setMeses] = useState([]);
  const [metaGanancia, setMetaGanancia] = useState(900000)
  const [nivelAct, setNivelAct] = useState(15)
  const [presentaciones, setPresentaciones] = useState(5)
  const [tasaDeCierre, setTasaDeCierre] = useState(0.3)
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
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
        setProductoSelec(productosData[4].nombre);
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

  const handlerUserData = (campo, valor) =>{
    setUserData({...userData, [campo]: valor})
  };

  return (
    <div className='flex flex-col bg-gray-300 w-full h-screen'>
      <Header />
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} nav={nav} />
      <main className='flex-1 p-4'>
      <Suspense fallback={<LoadingSpinner />}>
        {activeNav === "simulator" && <SimulacionScreen 
        userData={userData}
        handlerUserData={handlerUserData}
        productoActual={productoActual}
        nivelActual={nivelActual}
        setNivelActual={setNivelActual}
        metaGanancia={metaGanancia}
        setMetaGanancia={setMetaGanancia}
        ventasActuales={ventasActuales}
        setVentasActuales={setVentasActuales}
        completionPercentage={completionPercentage}
        percentDisplay={percentDisplay}
        comisionActual={comisionActual}
        tengoQueVender={tengoQueVender}
        volumenCarrera={volumenCarrera}
        totalVentasMes={totalVentasMes}
        meses={meses}
        />}
      </Suspense>
      </main>
    </div>
  )
}

export default App
