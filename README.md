Este proyecto fue realizado usando React.

Se basa en una tienda en línea. Hace uso de rutas. Realiza un fetch a una BD en Firebase. La BD contiene dos coleccciones, la primera para alojar los productos y la segunda para alojar las compras por usuario. Es posible cargar información de un archivo JSON ubicado en la carpeta pública y que contiene el mock de productos. La carga se hace a través de la opción Carga del header.

Los componentes de conteo dependen del stock de cada uno de los productos.

Componentes:
    Cart: Maneja la información asociada al carrito de compra.
    CartContext: El contexto que contiene todas las funciones e información a utilizar en Cart y que es alimentada desde otros componentes del aplicativo.
    CartWidget: Componente que maneja la funcionalidad y el ícono del Cart presente en el Header.
    Discounts: Componente que renderiza los productos con descuento.
    Footer: Componente transversal que renderiza el pie de página del sitio. Solo es usado para referencias a los íconos utilizados.
    Header: Componente transversal que renderiza el encabezado del sitio.
    Item: Componente que renderiza la información general de un producto.
    ItemCount: Componente que renderiza lo botones de selección de cantidad de producto.
    ItemDetail: Componente que renderiza los detalles del producto seleccionado y su componente de selección.
    ItemDetailContainer: Componente que contiene al ItemDetail y realiza el fetch asociado.
    ItemList: Componente que contiene la lista de productos.
    ItemListContainer: Componente que realiza el fetch asociado a una lista de productos tanto por Id, por categoría o por descuento.
    Load: Componente que permite la carga del archivo JSON con el mock de productos a FireBase.
    Suggested: Componente que renderiza los productos sugeridos, de acuerdo a las compras anteriormente realizadas. Depende del LocalStorage.
    UserForma: Componente que renderiza y envía la información de contacto del comprador, y la respectiva compra a FireBase.
    
    Se tiene archivo Functions con funciones utiles que se importan en diferentes componentes del sitio.

    Librerias complementarias utilizadas:
    FireBase
    SweetAlert

    Estilos:
    Se utiliza un solo archivo de estilos "styles.css" para todos los componentes del sitio.