

document.querySelector("form.formulario").addEventListener("submit", function(event) {

    event.preventDefault();// parar envío

   
    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;
   

    let validated = true; 

    if (name.length < 5) {
        swal('Nombre',"El nombre es muy corto","warning");
        validated = false; 
    }

    if (!email.includes("@") && !email.endsWith(".com"||'.es') ) {
        swal("Email","Falta @ email y/o .com/.es al final", "warning");
        validated = false; 
    }

   

    if (message.length < 1) {
        swal("Mensaje","Mensaje vacío","warning");
        validated = false; 
    }
   
    if (validated){
        swal("Gracias por tu mensaje","Nos pondremos en contacto","success")
        event.target.submit();
    }
})