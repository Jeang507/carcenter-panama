# CarCenter Panamá

CarCenter Panamá es un proyecto web estático desarrollado como proyecto final utilizando **HTML, CSS y JavaScript**.

El sitio simula una plataforma automotriz donde el visitante puede explorar vehículos, filtrar modelos, comparar alternativas, guardar favoritos en un garage personal, conocer tecnologías de conducción y solicitar una visita orientativa.

## Objetivo del proyecto

Crear una experiencia web organizada y visualmente coherente alrededor de la temática automotriz.

La historia del sitio sigue el recorrido de una persona que busca un vehículo:

1. Entra a la página principal y conoce CarCenter.
2. Explora los modelos disponibles en el catálogo.
3. Filtra y busca vehículos según sus intereses.
4. Revisa imágenes en la galería.
5. Compara modelos mediante una tabla dinámica.
6. Guarda sus opciones favoritas en **Mi Garage**.
7. Conoce los modos de conducción mediante un Canvas interactivo.
8. Consulta la ubicación de CarCenter.
9. Completa un formulario para solicitar orientación.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Swiper.js
- Lightbox2
- Parsley.js
- OpenStreetMap mediante iframe

## Estructura del proyecto

```text
CarCenter/
├── index.html
├── catalogo.html
├── galeria.html
├── comparador.html
├── garage.html
├── evolucion.html
├── visita.html
├── contacto.html
├── css/
│   └── estilos.css
├── js/
│   ├── main.js
│   ├── catalogo.js
│   ├── comparador.js
│   ├── garage.js
│   ├── evolucion.js
│   └── contacto.js
├── img/
│   ├── autos/
│   └── logos/
└── README.md
```

## Cómo ejecutar el proyecto

No requiere instalación de dependencias ni servidor backend.

Desde la carpeta principal del proyecto, ejecuta:

```bash
python3 -m http.server 8000
```

Luego abre en el navegador:

```text
http://localhost:8000
```

También puede ejecutarse abriendo `index.html` directamente, aunque se recomienda usar un servidor local para trabajar de forma más estable.

## Funcionalidades principales

### Página principal

- Diseño visual de bienvenida para CarCenter Panamá.
- Carrusel de vehículos destacados con Swiper.js.
- Contador regresivo mensual.
- Accesos directos al catálogo y al formulario de contacto.

### Catálogo de vehículos

- Catálogo integrado con 33 vehículos.
- Buscador por marca, modelo o categoría.
- Filtros por SUV, sedán, híbridos y otras categorías.
- Botón para agregar vehículos a Mi Garage.

### Galería

- Galería visual de vehículos.
- Ampliación de imágenes mediante Lightbox2.

### Comparador

- Tabla dinámica para comparar características de distintos vehículos.
- Comparación de marca, motor, transmisión, combustible, categoría y precio.

### Mi Garage

- Funcionalidad de Drag and Drop.
- Permite arrastrar vehículos al área de favoritos.
- Opción para eliminar vehículos guardados.
- Persistencia de favoritos mediante LocalStorage.

### Tecnología

- Canvas interactivo que representa modos de conducción:
  - ECO
  - NORMAL
  - SPORT
- Cada modo modifica visualmente el tablero y su información.

### Visítanos

- Mapa integrado mediante iframe de OpenStreetMap.
- Información de ubicación, horarios y contacto.

### Contacto

- Formulario organizado y validado con Parsley.js.
- Validación visible para campos obligatorios.
- Mensaje de confirmación después de completar la solicitud.

## Criterios implementados

El proyecto incorpora los elementos solicitados para el proyecto final:

- Estructura general del sitio web.
- Historia relacionada con la temática automotriz.
- Uso de iframe.
- Incorporación de imágenes.
- Drag and Drop.
- Uso de tablas.
- Enlaces internos y externos.
- Canvas interactivo.
- Formularios validados.
- Plugins y librerías externas.
- Contador regresivo.
- Diseño responsive para distintos tamaños de pantalla.

## Nota

CarCenter Panamá es un proyecto web estático. La información presentada sobre vehículos, precios, disponibilidad y contacto se utiliza únicamente dentro de la experiencia visual del sitio. No realiza pagos reales ni almacena información en un servidor.
