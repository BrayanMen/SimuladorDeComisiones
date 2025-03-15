import { Suspense, useState } from 'react'
import Header from './components/Header'
import { LoadingSpinner } from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import SimulacionScreen from './Screen/SimulacionScreen';
import ResumenScreen from './Screen/ResumenScreen';
import { DATA_USUARIO_INICIAL, NIVELES, PRODUCTOS } from './constants/dataInicial';
import { calcularComision } from './Utils/utils';
import VariablesUsuario from './components/VariablesUsuario';
import PlanificacionScreen from './Screen/PlanificacionScreen';
import AlertToast from './components/AlertToast';

function App() {
  const [userData, setUserData] = useState(DATA_USUARIO_INICIAL);
  const [activeNav, setActiveNav] = useState('summary');
  const [nivelAct, setNivelAct] = useState(15)
  const [productoSelec, setProductoSelec] = useState(PRODUCTOS[0].nombre);
  const [metaGanancia, setMetaGanancia] = useState(DATA_USUARIO_INICIAL.ingresoEsperado);
  const [ventasAct, setVentasAct] = useState(1000000);
  const [showAlert, setShowAlert] = useState(false);
  const [msjAlert, setMsjAlert] = useState('');
  const [loading, setLoading] = useState(false);

  const nivelSeleccionado = NIVELES.find(n => n.nivel === nivelAct);
  const tasaCierre = nivelSeleccionado?.tasaCierre || 0.3;

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
  const totalVentasMes = (volumenCarrera / userData.ticketPromedio);
  const porcentajeFinal = Math.min((ventasAct / tengoQueVender) * 100, 100)
  const porcentajeDisplay = ((ventasAct / tengoQueVender) * 100).toFixed(2);
  const presentacionesNecesarias = Math.round(totalVentasMes / tasaCierre);
  const nuevosProspectos = Math.round(totalVentasMes * 6);
  const presentacionesPorSemana = Math.round(presentacionesNecesarias / 4);
  const distribucionPorSemana = [
    (presentacionesNecesarias * 0.4),
    (presentacionesNecesarias * 0.3),
    (presentacionesNecesarias * 0.2),
    (presentacionesNecesarias * 0.1),
  ];

  const showAlertApproved = (msj) => {
    setMsjAlert(msj)
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
      <main className='flex-1 h-auto p-4'>
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
          {activeNav === "summary" && <ResumenScreen
            metaGanancia={metaGanancia}
            tengoQueVender={tengoQueVender}
            totalVentasMes={totalVentasMes}
            presentacionesNecesarias={presentacionesNecesarias}
            presentacionesPorSemana={presentacionesPorSemana}
            nuevosProspectos={nuevosProspectos}
            comisionActual={comisionAct}
            nivelActual={nivelAct}
            showAlertApproved={showAlertApproved}
          />}
          {activeNav === "planification" && <PlanificacionScreen
            nuevosProspectos={nuevosProspectos}
            presentacionesPorSemana={presentacionesPorSemana}
            presentacionesNecesarias={presentacionesNecesarias}
            tasaCierre={tasaCierre}
            distribucionPorSemana={distribucionPorSemana}
          />}
        </Suspense>
      </main>
      <AlertToast message={msjAlert} visible={showAlert} />
    </div>
  )
}

export default App
