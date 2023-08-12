


const form = document.querySelector("#login");


form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData = new FormData(form);
    
    try {
   const response = await fetch('api-login', {
            method: 'POST',
            body: formData
        });
    


    
    } catch (error) {
    console.error(error);
    }
});




