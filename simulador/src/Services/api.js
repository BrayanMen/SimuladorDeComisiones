import data from '../data/initialData.json' assert { type: 'json' };
const simularDelay = (delay) => new Promise((resuelto) => setTimeout(resuelto, delay));

export const fetchNav = async () => {
    await simularDelay(1000);
    return data.NAVEGACION;
};
export const fetchProductos = async () => {
    await simularDelay(1000);
    return data.PRODUCTOS;
};
export const fetchMeses = async () => {
    await simularDelay(1000);
    return data.MESES;
};
export const fetchUsuarioInicial = async () => {
    await simularDelay(1000);
    return data.DATA_USUARIO_INICIAL;
};
fetchUsuarioInicial().then(console.log);