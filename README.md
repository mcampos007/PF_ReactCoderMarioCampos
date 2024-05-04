### README - Español

# Proyecto Final del Curso de React JS - CoderHouse

Este proyecto es el trabajajo final del curso de React JS de CoderHouse, el mismo corresponde a un ecommerce que persiste la información en Firebase, se utilizaron las siguientes librerias de terceros:

- bootstrap: "^4.6.0"
- firebase": "^10.11.1"
- react": "^18.2.0"
- react-bootstrap": "^2.10.1"
- react-dom": "^18.2.0"
- react-icons": "^5.2.0"
- react-router-dom": "^6.22.3"
- uuid": "^9.0.1"

## Características Principales

- **Barra de Navegación:** la misma presenta a la izquierda un logo del ecomerce que permite visualizar una lista de todos los productos disponibles. Además en la parte centras hay tres enlaces que muestran la lista de productos que pertenecen a la catergoría . Y por ultimo a la derecha de la barra de navegación se presenta un ícono que permite visualizar el contenido del "cart" y a la derecha de este una etiqueta con la cantidad de artículos que hay en el "cart"
- **Visualización de los detalles del producto:** Para cada producto se puede visualizar la información siguiente: "Title, Description, Stock, Price". Junto con esta información se incluye un control que permite seleccionar la cantidad y agregar el producto al "cart". Existe una validación que asegura no permitir ingresar al carrito menos de una unidad o más del stock disponible
- **Proceso de Confirmación del pedido:** Luego de agregar un producto al carrito o visualizar el carrito en la barra de navegación se puede acceder al proceso de confirmación de la Orden. En esta pantalla se puede visualizar el detalle consolidado del pedido y la posibilidad de ingresar los (Nombre, telefono e email) y luego confirmar la orden. Al finalizar el proceso se visualizará el "ID" asignado por "Firebase". Junto con el proceso de confirmación se realizar la actualización del stock de cada item del pedido.!

## Instalación y ejecución

1.  Clona este repositorio en tu máquina local.
2.  Instala las dependencias del proyecto utilizando npm:

```
npm install
```

1.  Inicia la aplicación:

```
npm run dev
```

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
