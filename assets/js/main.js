document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Valida que todas las variables existen
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // Mostrar el navbar
    nav.classList.toggle('show')
    // Cambiar el icono
    toggle.classList.toggle('bx-x')
    // Añadir padding al body
    bodypd.classList.toggle('body-pd')
    // Añadir padding al header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink));
    
    });

    $(document).ready(function(){
        $("#search").hide();
        $("#location").hide();
        $("#index").show();
    });

    $('#navIndex').on("click", function(){
        $("#search").hide();
        $("#location").hide();
        $("#index").show();
    });

    $('#navSearch').on("click", function(){
        $("#index").hide();
        $("#location").hide();
        $("#search").show();
    });
    $('#navLocation').on("click", function(){
        $("#index").hide();
        $("#search").hide();
        $("#location").show();
    })

