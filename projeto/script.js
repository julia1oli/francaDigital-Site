const seletorCor=document.getElementById("seletorCor");
const btnAplicarCor=document.getElementById("btnAplicarCor");

// () => {} --> Função anônima (Sem nome)
// e = event = evento

btnAplicarCor.addEventListener("click", () => {
    const cor = seletorCor.value;
    document.documentElement.style.setProperty("--cor-fundo", cor);
});

const chips=document.querySelectorAll(".chip")
const galeria=document.getElementById("galeriaHero");

const imageminicial = chips[0].dataset.image;
galeria.style.backgroundImage = 'url(${imageminicial})'

chips.forEach((chip) => {
    chip.addEventListener("click", () => {
        galeria.classList.add("ativa");
        galeria.style.backgroundImage = `url(${chip.dataset.image})`;
    })
});