import { Suspense, useState } from 'react'
import Header from './components/Header'
import { LoadingSpinner } from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import SimulacionScreen from './Screen/SimulacionScreen';
import { DATA_USUARIO_INICIAL, PRODUCTOS } from './constants/dataInicial';
import { calcularComision } from './Utils/utils';
import VariablesUsuario from './components/VariablesUsuario';

function App() {
  const [userData, setUserData] = useState(DATA_USUARIO_INICIAL);
  const [activeNav, setActiveNav] = useState('summary');
  const [nivelAct, setNivelAct] = useState(15)
  const [productoSelec, setProductoSelec] = useState(PRODUCTOS[2].nombre);
  const [metaGanancia, setMetaGanancia] = useState(900000);
  const [ventasAct, setVentasAct] = useState(1000000);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const productoAct = PRODUCTOS.find(p => p.nombre === productoSelec) || PRODUCTOS[2];
  const comisionAct = calcularComision(productoAct.precio, nivelAct)

  const tengoQueVender = Math.round(
    metaGanancia * 1.21 * (
      nivelAct === 10 ? 10 :
        nivelAct === 15 ? 6.6 :
          nivelAct === 20 ? 5 :
            nivelAct === 35 ? 2.85 :
              1.8
    )
  );
  const volumenCarrera = Math.round(tengoQueVender / userData.valorUSD);
  const totalVentasMes = Math.round(volumenCarrera / userData.ticketPromedio * 10) / 10;
  const porcentajeFinal = Math.min((ventasAct / tengoQueVender) * 100, 100)
  const porcentajeDisplay = ((ventasAct / tengoQueVender) * 100).toFixed(2);

  const showAlertApproved = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000)
  }

  if (loading) {
    return <LoadingSpinner />;
  }



  return (
    <div className='flex flex-col bg-gray-300 w-full h-auto'>
      <Header />
      <VariablesUsuario userData={userData} setUserData={setUserData} />
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <main className='flex-1 p-4'>
        <Suspense fallback={<LoadingSpinner />}>
          {activeNav === "simulator" && <SimulacionScreen
            nivelAct={nivelAct} setNivelAct={setNivelAct}
            productoSelecionado={productoSelec} setProductoSelec={setProductoSelec}
            metaGanancia={metaGanancia} setMetaGanancia={setMetaGanancia}
            ventasActuales={ventasAct} setVentasActuales={setVentasAct}
            porcentajeFinal={porcentajeFinal}
            porcentajeDisplay={porcentajeDisplay}
            showAlertApproved={showAlertApproved}
            productoActual={productoAct}            
            comisionActual={comisionAct}
            tengoQueVender={tengoQueVender}
            volumenCarrera={volumenCarrera}
            totalVentasMes={totalVentasMes}
          />}
        </Suspense>
      </main>
    </div>
  )
}

export default App
