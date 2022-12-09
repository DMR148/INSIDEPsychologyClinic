//desplegar paginas
$("#desplegar1").click(function () {
    $("#pages").toggleClass("abrirPages");
});
//desplegar servicio
$("#desplegar2").click(function () {
    $("#services").toggleClass("abrirServices");
});
//desplegar menu movil
$("#sandwich").click(function () {
    $("#menuIzq").toggleClass("abrirDesplegarMenuM");
});
//desplegar barra de busqueda movil
$("#iconoSearchM").click(function () {
    $("#searchM").toggleClass("abrirSearchM");
});
//desplegar informacion movil
$("#iconoInfoM").click(function () {
    $("#infoM").toggleClass("abrirInfoM");
});
//modal de busqueda
var fondomodalBusqueda = document.getElementById("modalBusqueda");
var btnBuscar = document.getElementById("buscar");
var cerrarBuscar = document.getElementById("cerrarModalBusqueda");

btnBuscar.onclick = function () {
    fondomodalBusqueda.style.display = "block";
};
cerrarBuscar.onclick = function () {
    fondomodalBusqueda.style.display = "none";
};
//slide de fotos
$(function () {
    $("#slider4").responsiveSlides({
      auto: true,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "callbacks",
      before: function () {
        $('.events').append("<li>before event fired.</li>");
      },
      after: function () {
        $('.events').append("<li>after event fired.</li>");
      }
    });
  });
//animaciones WoW
new WOW().init();
// Funcion para el boton subir
$(document).ready(function () {
    $("#subir").click(function () {
      $("html,body").animate(
        {
          scrollTop: "0px",
        },
        1000
      );
    });
  });
//modal horario
var fondomodal = document.getElementById("modalHorario");
var fondomodal2 = document.getElementById("modalHorarioImg");
var btn = document.getElementById("imgHorario");
var cerrar = document.getElementById("cerrarModalHorario");

btn.onclick = function () {
    fondomodal.style.display = "block";
    fondomodal2.style.display = "block";
};
cerrar.onclick = function () {
    fondomodal.style.display = "none";
    fondomodal2.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == fondomodal) {
    fondomodal.style.display = "none";
    fondomodal2.style.display = "none";
  }
};
//botones de menu
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate({
      scrollTop: $(ancla).offset().top,
  },
  1000
  );
  $("#menuIzq").toggleClass("abrirDesplegarMenuM");
});