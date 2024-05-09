let card = ''

for (let i = 0; i < 4; i++) {
    card = card + `
                <div class="card">
                    <div class="img-container">
                        <img class="img-card" src="" alt="">
                    </div>

                    <div class="info-card">
                        <div class="icon-container-card">

                        </div>
                        <div class="offer-card">
                            <div class="date-card"></div>
                            <div class="price-card"></div>
                        </div>
                        <div class="button-card">
                            <button>Ver Detalles</button>
                            <button>RESERVÁ AHORA</button>
                        </div>
                    </div>
                </div>`

}
document.querySelectorAll(".cards-container").forEach(container => {container.innerHTML = card;})