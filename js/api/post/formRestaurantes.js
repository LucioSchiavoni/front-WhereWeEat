const form = document.querySelector("#form"); //id del formulario 


form.addEventListener('submit', async (e) => {
    e.preventDefault();

// traer datos byId con .value

    const dataUser = {
    //   datos del restaurante
    };

    try {
        const response = await fetch('api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(dataUser) 
        });

        if (response.ok) {
            console.log(dataUser);
        } else {
            console.error('Error en la respuesta de la API');
        }
    } catch (error) {
        console.error(error);
    }
});
