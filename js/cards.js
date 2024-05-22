

// let card = ''

// for (let e of dataDestinosNac) {
//     card = card + `
//                 <div class="card">
//                     <div class="img-container">
//                         <img class=${e.image} src="" alt="">
//                     </div>

//                     <div class="info-card">
//                         <div class="icon-container-card">

//                         </div>
//                         <div class="offer-card">
//                             <div class="date-card"></div>
//                             <div class="price-card"></div>
//                         </div>
//                         <div class="button-card">
//                             <button>Ver Detalles</button>
//                             <button>RESERVÁ AHORA</button>
//                         </div>
//                     </div>
//                 </div>`

// }

// for (let e of dataDestinosInter) {
//     card = card + `
//                 <div class="card">
//                     <div class="img-container">
//                         <img class=${e.image} src="" alt="">
//                     </div>

//                     <div class="info-card">
//                         <div class="icon-container-card">

//                         </div>
//                         <div class="offer-card">
//                             <div class="date-card"></div>
//                             <div class="price-card"></div>
//                         </div>
//                         <div class="button-card">
//                             <button>Ver Detalles</button>
//                             <button>RESERVÁ AHORA</button>
//                         </div>
//                     </div>
//                 </div>`

// }
// document.querySelectorAll("#viajes-nac .cards-container").forEach(container => {container.innerHTML = card;})
// document.querySelectorAll("viajes-inter .cards-container").forEach(container => {container.innerHTML = card;})


//función para generar la estructura de las tarjetas en el HTML
function generateCards(destinos) {
    let cards = "";
    for (let e of destinos) {
        let iconsHtml = "";
        if(e.icons){
            for (let icon of e.icons){
                iconsHtml += `<img class="icon-card" src="${icon}" alt="icono">`
            }
        }
        cards += `
        <div class="card">
            
            <div class="img-container">
                <h4 class=title-card>${e.name}</h4>
                <img class="img-card" src="${e.image}" alt="">
            </div>
            <div class="info-card">
                <div class="icon-container-card">
                    ${iconsHtml}
                </div>
                <div class="offer-card">
                    <div class="date-card">${e.departure}</div>
                    <div class="price-card">${e.price}</div>
                </div>
                <div class="button-card">
                    <button>Ver Detalles</button>
                    <button>RESERVÁ AHORA</button>
                </div>
            </div>
        </div>`;
    }
    return cards;
}

//genera las targejas para los destinos nacionales e internacionales
let cardsNac = generateCards(dataDestinosNac);
let cardsInter = generateCards(dataDestinosInter);

//inserta las tarjetas generadas de las variables en el contenedor de cada sección que corresponde
document.querySelectorAll("#viajes-nac .cards-container").forEach(container => {container.innerHTML = cardsNac;})
document.querySelectorAll("#viajes-inter .cards-container").forEach(container => {container.innerHTML = cardsInter;})
