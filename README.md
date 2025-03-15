
# Asistente de Metas Mensuales

## Descripción del Desafío

Este proyecto es la solución al desafío de desarrollar un **frontend enfocado 100% en vista móvil (webapp)** para un simulador de comisiones y planificador de actividad, basado en un modelo original de Google Sheets. El objetivo fue transformar una hoja de cálculo en una interfaz intuitiva, funcional y visualmente atractiva.

## Sobre la Aplicación

El Asistente de Metas Mensuales es una herramienta web interactiva orientada a dispositivos móviles que permite a los profesionales de ventas:

* Establecer objetivos de ingresos mensuales
* Simular diferentes escenarios de comisión
* Crear un plan de ventas accionable con objetivos específicos
* Visualizar su progreso hacia las metas establecidas

## Decisiones de Diseño e Implementación

### Enfoque Mobile-First

* Diseño optimizado para pantallas móviles
* Navegación simplificada con tabs inferiores
* Componentes responsivos que maximizan el espacio limitado
* Interacciones adaptadas a uso táctil

### UX/UI

* Paleta de colores profesional con predominio de tonos verdes
* Visualización clara de datos mediante cards y secciones bien delimitadas
* Elementos interactivos (sliders, selectores) con feedback visual
* Sistema de notificaciones toast para confirmaciones
* Iconografía intuitiva para mejorar la navegación

### Funcionalidad

* Implementación fiel de los cálculos del modelo original en Google Sheets
* Actualización en tiempo real de valores al modificar parámetros
* Distribución lógica en tres pantallas principales para mayor claridad
* Posibilidad de exportar y compartir resultados

## Estructura de la Aplicación

### Pantallas Principales

1. **Resumen** : Muestra la visión general de metas y resultados esperados
2. **Simulación** : Permite ajustar variables y ver impacto en comisiones
3. **Planificación** : Presenta un plan de acción concreto con distribución temporal

### Componentes Destacados

* Sistema de navegación por tabs
* Secciones colapsables para mejor organización
* Controles interactivos (sliders, inputs, selects)
* Visualización de progreso mediante barras y porcentajes
* Variables de usuario personalizables

## Tecnologías Utilizadas

* **React.js** : Para la construcción de la interfaz
* **Tailwind CSS** : Framework de CSS para estilizado
* **Lucide React** : Biblioteca de iconos
* **React Hooks** : Para gestión de estado (principalmente useState)

## Instalación y Ejecución

1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/asistente-metas-mensuales.git
```

2. Instalar dependencias

```bash
cd asistente-metas-mensuales
npm install
```

3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

4. Abrir en navegador (preferentemente en modo de vista móvil)

```
http://localhost:5173
```

## Mejoras Futuras

* Implementación de persistencia de datos mediante localStorage
* Exportación a PDF funcional
* Sincronización con calendario para recordatorios
* Modo oscuro para uso nocturno
* Animaciones para mejorar la experiencia de usuario

## Aspectos Evaluados en el Desafío

* **UX/UI** : Experiencia de usuario fluida y atractiva en entorno móvil
* **Funcionalidad** : Implementación fiel de los cálculos de la hoja original
* **Código limpio** : Estructura organizada y seguimiento de mejores prácticas

## Autor

Brayan Mendoza
