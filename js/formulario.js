const formulario = document.getElementById("formulario_contacto");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	// password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,10}$/ // 7 a 10 numeros.
}

const campos = {
	nombre: false,
	apellido: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) =>{
	switch (e.target.name) {
		case "nombre":
				validarCampo(expresiones.nombre, e.target, "nombre");
		break;

		case "apellido":
			validarCampo(expresiones.apellido, e.target, "apellido");
		break;

		case "telefono":
			validarCampo(expresiones.telefono, e.target, "telefono");
		break;

		case "correo":
			validarCampo(expresiones.correo, e.target, "correo");
		break;
	}
}

const validarCampo = (expresion, input, campo) =>{
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
		document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto");
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove("formulario_input-error-active");
		campos[campo] = true;
	}else{
		document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-incorrecto");
		document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-correcto");
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add("formulario_input-error-active");
		campos[campo] = false;
	}
}

inputs.forEach((input)=>{
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
})

formulario.addEventListener('submit', (e)=>{
	e.preventDefault();

	if(campos.nombre && campos.apellido && campos.telefono && campos.correo){
		formulario.reset();

		document.getElementById("formulario_mensaje-exito").classList.add("formulario_mensaje-exito-active");

		setTimeout(() =>{
			document.getElementById("formulario_mensaje-exito").classList.remove("formulario_mensaje-exito-active");
		}, 5000);
	}
	
})