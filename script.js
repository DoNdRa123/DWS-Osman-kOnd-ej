let first = document.getElementById('first')

first.addEventListener('click', function(){
    alert("Ahoj!")
})

let second = document.getElementById('second')

second.addEventListener('click', function(){
    this.textContent = "Změna"
})
 
const third = document.getElementById('third')

const thirda = document.getElementById('thirda')

third.addEventListener('click', function(){
    thirda.textContent = "nadpisu"
})

const fourth = document.getElementById('fourth')

const fourtha = document.getElementById('fourtha')

fourth.addEventListener('click', function(){
    fourtha.textContent = 'Úkol 4'
})

function hellouser(){
    let jmeno = document.getElementById('jmeno').value;
    alert('Vítám tě na webové stránce ' + jmeno);
}


const mys = document.getElementById('mys');
        
    mys.addEventListener('mouseenter', () => {
            mys.textContent = 'BAF';
    });

    mys.addEventListener('mouseleave', () => {
         mys.textContent = 'Najed na mě';
    });

let cas = document.getElementById('cas');
let datum = document.getElementById('datum');

const pcas =  document.getElementById('pcas');

const pdatum = document.getElementById('pdatum');

cas.addEventListener('click', function(){
    const aktualnicas = new Date();
    const skutecnycas = aktualnicas.toLocaleTimeString();
    pcas.textContent = 'Momentální čas je: ' + skutecnycas;
})

datum.addEventListener('click', function(){
    const aktualnidatum = new Date();
    const skutecnedatum = aktualnidatum.toLocaleDateString();
    pdatum.textContent = 'Momentální datum je: ' + skutecnedatum;
})
function secistTri() {  
    let vstup = document.getElementById("cislo").value
    let vysledek = parseFloat(vstup) + 3; document.getElementById("vysledek").innerText = "výsledek = " + vysledek 
    }
function sectiCisla() {
    let cislo1 = document.getElementById("cislo1").value; 
    let cislo2 = document.getElementById("cislo2").value;
    let vysledek = parseFloat(cislo1) + parseFloat(cislo2); 
    document.getElementById("vysledek2").innerText = "Výsledek: " + vysledek; 
    }

    const img = document.getElementById('obrazek');

    img.addEventListener('mouseover', function() {
        img.width = 360; 
        img.height = 240; 
    });

    img.addEventListener('mouseout', function() {
        img.width = 300; 
        img.height = 200; 
    });