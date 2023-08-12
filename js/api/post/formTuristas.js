const form = document.querySelector("#form"); //id del formulario 


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    //capturo los datos del formulario con el id del input
    const alias = document.getElementById("alias").value;
    const idUsuario = document.getElementById("idUsuario").value;
    const email = document.getElementById("email").value;
    const contrasenia = document.getElementById("contrasenia").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const rol = document.getElementById("rol").value;
    const urlImg = document.getElementById("urlImg").value;

    //Objeto con los datos del usuario
    const dataUser = {
        accion: "altaTurista",  //endpoint
        idUsuario: idUsuario,
        alias: alias,
        email: email,
        contrasenia: contrasenia,
        nacionalidad: nacionalidad,
        rol: rol,
        urlImg: urlImg,
        activo: 2,
        bloqueado: 1
    };

    
    try {
        const response = await fetch('http://localhost/apiWhereWeEat/controllers/turistaController.php', {  //fetch hacia la api
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(dataUser) //convertimos a JSON los datos que traemos de la api
        });

        if (response.ok) {  //si se guarda exitosamente consologea los datos ingresados
            console.log(dataUser);
        } else {
            console.error('Error en la respuesta de la API');
        }
    } catch (error) {
        console.error(error);
    }
});
