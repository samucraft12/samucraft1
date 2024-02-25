const grande = document.querySelector('.transparentCardContainerBLG');
const punto = document.querySelectorAll('.punto');

punto.forEach( (cadaPunto, i) => {
    punto[i].addEventListener("click", ()=> {
        let position = i;
        //posicion = 0 transformX  es 0%
        //poscicion = 1 transformX es -50%
        let operacion = position * -20;

        grande.style.transform = `translateX(${operacion}%)`;

        punto.forEach( (cadaPunto, i ) => {
            punto[i].classList.remove("activo");
        })
        punto[i].classList.add("activo");

    })  
})
