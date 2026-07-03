# CarCenter Panamá

Proyecto final de la clase de Programación Web. Es el sitio de una agencia de autos hecho en HTML, CSS y JavaScript puro, sin frameworks.

Demo: https://jeang507.github.io/carcenter-panama/

## La idea

Simular el sitio de una agencia real donde el usuario puede ver el catálogo, comparar autos, guardar sus favoritos, revisar algo de tecnología del vehículo, ver dónde queda la agencia y por último dejar sus datos de contacto.

## Cómo correrlo

```bash
python3 -m http.server 8000
```

Y se abre `http://localhost:8000` en el navegador. Hace falta el servidor porque si no, algunas rutas relativas y el fetch de los datos no cargan bien.

## Qué hay en cada página

- **Catálogo**: 33 vehículos de 5 marcas, con buscador y filtros funcionando.
- **Galería**: fotos de los autos con Lightbox2.
- **Comparador**: se eligen dos autos y arma una tabla con las specs.
- **Mi Garage**: drag & drop para guardar autos favoritos, y queda guardado con localStorage aunque se recargue la página.
- **Evolución**: un canvas interactivo con modos ECO, NORMAL y SPORT.
- **Visítanos**: mapa de OpenStreetMap con la ubicación de la agencia.
- **Contacto**: formulario validado con Parsley.js.

La página principal también tiene un carrusel con Swiper.js y un contador regresivo que cambia cada mes.

## Tecnologías

HTML5, CSS3, JavaScript (vanilla) y las librerías Lightbox2, Swiper.js y Parsley.js.

## Nota

Los datos e imágenes de los autos son solo para la demostración del proyecto, no es una agencia ni inventario real.