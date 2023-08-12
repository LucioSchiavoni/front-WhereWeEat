


const apiUrl = 'api';

const productContainer = document.getElementById('product-list');
                                                                           //Prototipo de prueba con mapeado de productos 

fetch(apiUrl)   //fetch a la api de mostrar datos
    .then(response => response.json())   //convertimos a json la respuesta
    .then(data => {
       ///Se mapea cada dato del producto
        data.forEach(product => {
            const cardHtml = `
                <div class="max-w-xs bg-white shadow-md rounded-md overflow-hidden m-4">
                    <div class="p-4" key=${product.id}>
                        <p class="text-xl font-semibold">${product.nombre}</p>
                        <p class="mt-2 text-gray-600">ID: ${product.img}</p>
                        <p class="mt-2 text-gray-800">Precio: ${product.precio}</p>
                        <button >Ver</button>
                    </div>
                </div>
            `;
            //Se agrega la cadena de HTML con la estructura de la carta al mapeado de productos
            productContainer.innerHTML += cardHtml;
        });
    })
    .catch(error => {
        console.error('Error al obtener los productos:', error);
    });

    //Evento que escucha el botton al darle click
    productContainer.addEventListener('click', event => {
    const clickedButton = event.target;

    //Verificar si el elemento clickeado es un boton
    if (clickedButton.tagName === 'BUTTON') {
        const productId = clickedButton.getAttribute('data-id');

       // Redirigir al perfil del producto con el Id
        window.location.href = `/perfil-producto?id=${productId}`;
    }
});