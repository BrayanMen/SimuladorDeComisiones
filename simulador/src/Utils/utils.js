export const calcularComision = (valorProd, comision) => {
    return (valorProd / 1.21) * (comision / 100)
}

export const formatoDeMoneda = (value) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);