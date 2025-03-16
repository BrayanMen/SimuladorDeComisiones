import { BriefcaseBusiness, ChartNoAxesCombined, DownloadCloud, ShareIcon } from "lucide-react";
import Section from "../components/Section";
import { PRODUCTOS } from "../constants/dataInicial";
import { calcularComision } from "../Utils/utils";
import Buttom from "../components/Buttom";

export default function ResumenScreen({
    metaGanancia,
    tengoQueVender,
    totalVentasMes,
    presentacionesNecesarias,
    presentacionesPorSemana,
    nuevosProspectos,
    comisionActual,
    nivelActual,
    showAlertApproved
}) {
    return (
        <div>
            <Section
                title='Resumen de Meta Mensual'
                icon={<ChartNoAxesCombined />}>
                <div className="flex flex-col text-center m-8 shadow-xl pb-6 bg-gray-200 ">
                    <p className="text-2xl p-4 font-bold text-green-700 drop-shadow-xl ">
                        ${metaGanancia.toLocaleString()}
                    </p>
                    <p className="text-gray-600 text-md font-semibold">
                        Meta de Ganancia Mensual
                    </p>
                </div>
                <div className="divide-y m-8 divide-gray-300 p-4 shadow-lg mt-3">
                    {[{ label: "Tengo que Vender", value: `$ ${tengoQueVender.toLocaleString()}` },
                    { label: "Ganancia Neta", value: `$ ${Math.round(comisionActual).toLocaleString()}` },
                    { label: "Nuevos Datos a Prospectar", value: nuevosProspectos },
                    { label: "Mínimo Presentaciones por Mes:", value: presentacionesNecesarias },
                    { label: "Minimo Presentaciones por Semana:", value: presentacionesPorSemana },
                    { label: "Ventas Totales en el Mes", value: `${Math.round(totalVentasMes)}` },
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between py-2">
                            <p className="font-medium text-green-700 text-sm">
                                {item.label}
                            </p>
                            <p className="font-semibold text-green-900 text-sm">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>
            <Section title="Productos" icon={<BriefcaseBusiness size={20} />}>
                <div className="divide-y divide-gray-300 mx-6 my-4 p-2 shadow-lg">
                    <div className="flex items-center text-center justify-between py-2 text-sm font-medium text-gray-700">
                        <p>Producto</p>
                        <p>Valores</p>
                        <p>Comisión <br />({nivelActual}%)</p>
                    </div>
                    {PRODUCTOS.slice(0, 5).map(producto => (
                        <div key={producto.id} className="flex justify-between py-2">
                            <p className="text-xs text-green-700">{producto.nombre}</p>
                            <p className="text-xs text-center text-green-800">${producto.precio.toLocaleString()}</p>
                            <p className="font-semibold text-green-900 text-xs">${Math.round(calcularComision(producto.precio, nivelActual)).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </Section>
            <div className="flex gap-5">
                <Buttom text="Exportar PDF"
                    icon={<DownloadCloud size={20} />}
                    onClick={() => showAlertApproved('¡PDF Exportado!')}
                    className="flex-1" />
                <Buttom
                    text="Compartir"
                    icon={<ShareIcon size={20} />}
                    onClick={() => showAlertApproved("Compartiendo resumen")}
                    className="flex-1" />
            </div>
        </div>

    )
}