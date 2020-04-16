function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarioLs'));

    if(listaUsuarios == null){
        listaUsuarios = 
        [
            //Nombre, apellido, Naixament, paisOrigen, Provincia, Barri, DNI, telefon, email, contrasenya, Area, tipo, ocupante(Solo dinamizadores)
            ["Iris", "Gurnell", "1/1/1991", "Espanya", "Baleares", "Son lluis", "44444444L", "666666666", "iris@iris.com", "hola123", "2" ,"Artistica"],
            ["Laura", "Petenya", "1/1/1991", "Espanya", "Baleares", "Son lluis", "55555555L", "777777777", "laura@laura.com", "hola123", "2","Ludoteca"],
            ["Genes", "Genesis", "1/1/1991", "Espanya", "Baleares", "Son lluis", "66666666L", "888888888", "genes@genes.com", "hola123", "2","Diversidad"],
            ["Joan", "moreny", "7/7/2000", "Espanya", "Balear", "Son Lluis", "77777777O", "999999999","joan@joan.com", "hola123", "3"],
            ["Pepe", "Porra", "7/7/2000", "Espanya", "Balear", "Son Lluis", "88888888O", "555555555","pepe@pepe.com", "hola123", "3"],
            ["Maria", "Lisa", "7/7/2000", "Espanya", "Balear", "Son Lluis", "33333333O", "444444444","maria@maria.com", "hola123", "3"],
            ["Elsa", "Ruiz", "7/7/2000", "Espanya", "Balear", "Son Lluis", "22222222O", "333333333","elsa@elsa.com", "hola123", "3"],
            ["Sophie", "cocui", "7/7/2000", "Espanya", "Balear", "Son Lluis", "11111111T", "222222222","sophie@sophie.com", "hola123", "3"],
            ["Esty", "Quesada", "7/7/1994", "Espanya", "Balear", "Son Lluis","00000000P", "000000000", "esty@esty.com", "hola123", "1"]
        ];

    }
    return listaUsuarios;
}

function obtenerListaTalleres(){
    var listaTalleres = JSON.parse(localStorage.getItem('listaTalleresLs'));

    if(listaTalleres == null){
        listaTalleres = 
        [
            //titol, places, dia, hora, casal, descripcion
            ["Taller de desarrollo de juegos", "15", "21/06/2020", "17:30", "Llevant", "Vols aprendré desenvolupar? Amb aquest taller, desenvoluparas de cero a professional. Amb unity i blender3D"],
            ["Taller de cant", "12", "17/06/2020", "18:00", "Ciutat antiga", "Canta amb el grup de joves de 16 a 30 anys. Aprenderás el cant i podrás unir-te a la banda."],
            ["Crea instrument amb elements de reciclatge", "21", "07/07/2020", "17:00", "Mitjorn", "Crea el teu instrument amb elements de reciclatge."],
            ["Cuina amb molta magia", "8", "19/07/2020", "18:00", "Tramuntana", "Uneix al taller de la cuina i preparat amb molta creativitat."]
        ];

    }
    return listaTalleres;
}

function obtenerListaPost(){
    var listaPost = JSON.parse(localStorage.getItem('listaPostLs'));

    if(listaPost == null){
        listaPost = 
        [
            //Post, descripcion, imatge, dia, hora, autor
            ["Quedat en ca teva", "jalapeños con papa", "./img/1.png", "01/09/2020", "23:55", "Laura"],
            ["jugam a magic amb videotrucada", "jalapeños con papa", "./img/2.jpg", "01/09/2020", "23:55", "Laura"],
            ["Entrevista amb la escriptora que va escriure el seu llibre", "jalapeños con papa", "./img/3.jpg", "01/09/2020", "23:55", "Genes"],
            ["pa amb sobrassada", "jalapeños con papa", "./img/4.jpg", "01/09/2020", "23:55", "Iris"]
        ];

    }
    return listaPost;
}

function obtenerListaComentaris(){
    var listaComentaris = JSON.parse(localStorage.getItem('listaComentarisLs'));

    if(listaComentaris == null){
        listaComentaris = 
        [
            //post, nom, dia, hora, comentari
            ["Taller de cant", "Pepe", "01/05/2020", "23:30", ""],
            ["Cuina amb molta magia", "Elsa", "02/05/2020", "23:35", ""],
            ["jugam a magic amb videotrucada", "Maria", "01/06/2020", "22:30", ""]
        ];

    }
    return listaComentaris;
}

function obtenerListaPropostes(){
    var listaPropostes = JSON.parse(localStorage.getItem('listaPropostesLs'));

    if(listaPropostes == null){
        listaPropostes = 
        [
            //nom, proposta
            ["Joan", "Vull que hagi ordinadors nous en la sala"],
            ["Pepe", "Vull que hi hagi una sala on es poden connectar als nostres ordenadors"],
            ["Maria", "Vull una sala de te"],
            ["Elsa", "Libre soy, libre soy..."],
            ["Sophie", "M'agrada les xocolatines."]
        ];

    }
    return listaPropostes;
}

function validarCredenciales(pDNI, pContrasena){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < listaUsuarios.length; i++){
        if(pDNI == listaUsuarios[i][6] && pContrasena == listaUsuarios[i][9]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + 
            listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo',listaUsuarios[i][10]);
        }
    }

    return bAcceso;
}

function iniciarSesion(){
    var sDNI = '';
    var sContrasena = '';
    var bAcceso = false;

    sDNI = document.querySelector('#UserDNI').value;
    sContrasena = document.querySelector('#UserPassword').value;

    bAcceso = validarCredenciales(sDNI, sContrasena);
    //console.log(bAcceso);


    if(bAcceso == true){
        ingresar();
    }else{
        alert("Tus credenciales que has introducido, son completamente "
         + "erroneas. Vuelve a intentar");
    }
    
}

function getUserFromStorage(){
    // Recupera l'item del storage i el transforma a un objecte JSON.
	let userObjStorage = JSON.parse(localStorage.getItem("usuario"));
	console.log(userObjStorage);
	let container = document.getElementById("bienvenidoUser");
	container.innerHTML = userObjStorage.name + " " +
    userObjStorage.mobile;

}

function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href = 'administrador.html';
        break;
        case '2':
            window.location.href = 'dinatmizadors.html';            
        break;
        case '3':
            window.location.href = './../index.html';
        break;
    }
}


/*window.onload=function(){
    console.log("Cargado correctamente");
    //alert("Cargado correctamente");
  
    //div contenedor de post
    let containerReservas= document.getElementById("pReservas");
    this.createListReserva(listaReservas, containerReservas);
  
    //div contenedor de comentarios
    let containerCoche= document.getElementById("pCoches");
    this.createListCoche(listaCoches, containerCoche);
    
    //div contenedor del talleres
    let containerUser= document.getElementById("usuare");
    this.createListCoche(listaUsuarios, containerUser);

    
    //div contenedor del Propostes
    let containerUser= document.getElementById("usuare");
    this.createListCoche(listaUsuarios, containerUser);
  
}*/