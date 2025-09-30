// navbar.js DEL INDEX
document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./logo.png" alt="Logo" height="75" width="75">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 menuRight">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Historia 
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item"
                                        href="./pages/autoridades/autoridades.html">Edificio </a>
                                </li>
                                
                                <li><a class="dropdown-item" href="./pages/autoridades/encMuseo.html">Historia de la Unidad</a>
                                </li>
                            </ul>
                        </li>
                         <li><a class="nav-link" href="./pages/guiadas/VisitasG.html">
                              Mision
                            </a>
                          </li>
                  
                        <li>
                            <a class="nav-link" href="./pages/veteranos/veteranos.html">
                                Veteranos
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
        `;

  document.querySelector("#navbar").innerHTML = navbarHTML;
}); {/* navbar.js DE LAS CATEGORIAS PRINCIPALES */ }
document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="../../index.html">
                    <img src="../../multimedia/logo.png" alt="Logo" height="75" width="199">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 menuRight">
                            <li><a class="nav-link" href="../../index.html">
                                Inicio
                            </a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Institucional
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="../../pages/autoridades/autoridades.html">Autoridades</a>
                                </li>
                                
                                <li><a class="dropdown-item" href="../../pages/autoridades/historia.html">Historia de la Unidad</a>
                                </li>
                            </ul>
                        </li>
                        <li > <a class="nav-link" href="../../pages/guiadas/VisitasG.html">
                                Visitas Guiadas
                            </a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Visitas Virtual
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item"
                                        href="../../pages/virtuales/salas.html">Salas</a></li>
                                <li><a class="dropdown-item" href="../../pages/virtuales/restauracion.html">Restauracion</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="nav-link" href="../../pages/veteranos/veteranos.html">
                                Veteranos
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Amigos del Museo
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item"
                                        href="../../pages/amigos/recreacionistas.html">Recreacionistas</a></li>
                                <li><a class="dropdown-item"
                                        href="../../pages/amigos/modelistas.html">Modelistas</a></li><li><a class="dropdown-item"
                                        href="../../pages/amigos/pm.html">PM 101</a></li>
                                        <li><a class="dropdown-item"
                                        href="../../pages/amigos/promo.html">Promo 84</a></li>
                            </ul>
                        </li>
                        <!-- <li>
                        <a class="nav-link links" href="./paginas/formularios.html"><button
                                class="loginB">&nbsp;Veteranos GADA 101&nbsp;</button></a>
                    </li> -->
                    </ul>
                </div>
            </div>
        </nav>
        `;

  document.querySelector("#navbar2").innerHTML = navbarHTML;
});
// navbar.js DE LA SUBCATEGORIAS DE INSTITUCIONAL
document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="../../index.html">
            <img src="../../multimedia/blue.webp" alt="Logo" height="64" width="245" />
          </a>
    
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 menuRight">
    
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Institucional
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="./servicioHistorico.html">Servicio Historico </a></li>
                  <li><a class="dropdown-item" href="./edificio.html">Edificio </a></li>
                  <li><a class="dropdown-item" href="./moneda.html">Moneda </a></li>
                  <li><a class="dropdown-item" href="./jefesAge.html">Jefes AGE</a></li>
                  <li><a class="dropdown-item" href="./jefesShe.html">Jefes SHE</a></li>
                  <li><a class="dropdown-item" href="./directoresShe.html">Directores SHE</a></li>
                </ul>
              </li>
              <li >
                <a class="nav-link" href="../fondoDocumental.html">Fondos</a>
              </li>
    
              <li >
                <a class="nav-link" href="../departamentos.html">
                  Departamentos
                </a>
              </li>
    
              <li >
                <a class="nav-link" href="../galeria.html">
                 Galeria 
                </a>
              </li>
              <li >
                <a class="nav-link" href="../notas.html">
                  Notas
                </a>
              </li>
              <li >
                <a class="nav-link" href="../salutaciones.html">
                  Salutaciones
                </a>
              </li>
              <li >
                <a class="nav-link links" href="../formularios.html"><button class="loginB">Formularios</button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
        `;

  document.querySelector("#navbar3").innerHTML = navbarHTML;
});

// navbar.js DE LA SUBCATEGORIAS DE NOTAS PARTICULARES
document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="../../index.html">
            <img src="../../multimedia/blue.webp" alt="Logo" height="64" width="245" />
          </a>
    
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 menuRight">
    
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Institucional
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="../institucional/servicioHistorico.html">Servicio Historico </a></li>
                  <li><a class="dropdown-item" href="../institucional/edificio.html">Edificio </a></li>
                  <li><a class="dropdown-item" href="../institucional/moneda.html">Moneda </a></li>
                  <li><a class="dropdown-item" href="../institucional/jefesAge.html">Jefes AGE</a></li>
                  <li><a class="dropdown-item" href="../institucional/jefesShe.html">Jefes SHE</a></li>
                  <li><a class="dropdown-item" href="../institucional/directoresShe.html">Directores SHE</a></li>
                </ul>
              </li>
              <li >
                <a class="nav-link" href="../fondoDocumental.html">Fondos</a>
              </li>
    
              <li >
                <a class="nav-link" href="../departamentos.html">
                  Departamentos
                </a>
              </li>
    
              <li >
                <a class="nav-link" href="../galeria.html">
                 Galeria 
                </a>
              </li>
              <li >
                <a class="nav-link" href="../notas.html">
                  Notas
                </a>
              </li>
              <li >
                <a class="nav-link" href="../salutaciones.html">
                  Salutaciones
                </a>
              </li>
              <li >
                <a class="nav-link links" href="../formularios.html"><button class="loginB">Formularios</button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
        `;

  document.querySelector("#navbar4").innerHTML = navbarHTML;
});

/* FOOTER */
document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <div id="footer">
        <div class="footer">
            <div class="contactoContainer col-12" id="contacto">
                <div class="col-11">
                    <ul>
                        <li>
                            <a href="tel:011-4653-1818">
                                <img src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone">
                                    011-4653-1818
                            </a>
                        </li><!-- 
                        <li>
                            <a href="mailto:">
                                <img src="https://img.icons8.com/ios-filled/20/null/new-post.png" alt="logo email">
                                Correo electrónico :<br>
                                
                            </a>
                        </li> -->
                        <li>
                            <a href="https://www.google.com/maps/place/Museo+Histórico+del+Ejército+Argentino+(Oficial)/@-34.6286349,-58.5442278,17z/data=!4m6!3m5!1s0x95bcc804d36dfa47:0x943fe5a7b447720c!8m2!3d-34.6308972!4d-58.5435284!16s%2Fg%2F1ywpnld9h?hl=es-419&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                                Target="_blank">
                                <img src="https://img.icons8.com/ios-filled/20/null/marker.png" alt="puntero mapa">
                                Carlos Pellegrini 4000, B1702BDV Ciudadela, Provincia de Buenos Aires
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/place/Museo+Histórico+del+Ejército+Argentino+(Oficial)/@-34.6286349,-58.5442278,17z/data=!4m6!3m5!1s0x95bcc804d36dfa47:0x943fe5a7b447720c!8m2!3d-34.6308972!4d-58.5435284!16s%2Fg%2F1ywpnld9h?hl=es-419&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                                Target="_blank">
                                <img src="https://img.icons8.com/ios-filled/50/bus.png" alt="bus">
                               
                                COLECTIVOS Líneas: 1, 146 , 343.
                            </a>
                        </li>
                    </ul>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3283.031868698236!2d-58.54422777824642!3d-34.62863493722991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc804d36dfa47%3A0x943fe5a7b447720c!2sMuseo%20Hist%C3%B3rico%20del%20Ej%C3%A9rcito%20Argentino%20(Oficial)!5e0!3m2!1ses-419!2sar!4v1742253361659!5m2!1ses-419!2sar"
                        width="800" height="600" loading="lazy" title="iframe"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>


    </div>
      
      `;

  document.querySelector("#footer").innerHTML = footerHTML;
});
