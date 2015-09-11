function validarDatos() {
 	var variable = true;

 		if(!document.form.Producto.value){
 			alert("Se Necesita un Producto...!");
 			document.form.Producto.value.focus;
 			variable="false";
		}

		else if(!document.form.Descripcion.value){
 			alert("Se Necesita una Descripcion...!");
 			document.form.Descripcion.value.focus;
 			variable="false";
		}

		else if(!document.form.Codigo.value){
 			alert("Se Necesita un Codigo...!");
 			document.form.Codigo.value.focus;
 			variable="false";
		}

		else if(!document.form.Fecha.value){
 			alert("Se Necesita una Fecha...!");
 			document.form.Fecha.value.focus;
 			variable="false";
		}
		
		else if(!document.form.Cantidad.value){
 			alert("Se Necesita una Cantidad...!");
 			document.form.Cantidad.value.focus;
 			variable="false";
		}
		
		else if(!document.form.Contenido.value){
 			alert("Se Necesita un Contenido...!");
 			document.form.Contenido.value.focus;
 			variable="false";
		}
		
		else if(!document.form.Precio.value){
 			alert("Se Necesita un Precio...!");
 			document.form.Precio.value.focus;
 			variable="false";
		}


 		if (variable) {
 			document.form.submit();
 		}
 	}

 	window.onload=function(){
 		document.getElementById('boton').onclick=validarDatos;
 	}
 