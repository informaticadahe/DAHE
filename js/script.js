/* FOOTER */
document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <div id="footer">
        <div class="footer">
            <div class="contactoContainer col-12" id="contacto">
                <div class="col-11">
                    <ul>
                        <li>
                            <a href="tel:4653-1818">
                                <img src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone">
                                    4653-1818 / FAX: 4653-1774
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