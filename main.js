var repartoSel = "stampa"
var personale = []
var macchine = []


function init() {
    
    let p = prompt("Inserisci password");
    setMacchinari(p);
    setPersonale(p);
    p = null;

}

function test() {
    console.log('test')
}

function setMacchinari(p) {

    macchine = JSON.parse(
        CryptoJS.AES.decrypt(
        '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'
        , p).toString(CryptoJS.enc.Utf8)
        )

    macchine = macchine.sort((a, b) => a.nome.localeCompare(b.nome))
    macchine.forEach(m => {
        var newDiv = createCheckBoxItem(m);
        document.querySelectorAll('#div_macchine')[0].appendChild(newDiv);
    })
}

function setPersonale(p) {

    personale = JSON.parse(
        CryptoJS.AES.decrypt(
        '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'
        , p).toString(CryptoJS.enc.Utf8)
        )

    personale = personale.sort((a, b) => a.nome.localeCompare(b.nome))
    personale.forEach(p => {
        var newDiv = createCheckBoxItem(p);
        document.querySelectorAll('#div_personale')[0].appendChild(newDiv);
    })
}

function updatePunteggio() {

    var score = 0;

    var mod_stampa = document.querySelector('#modificatori_r_stampa').querySelector('input[type="radio"]:checked').value
    var mod_verniciatura = document.querySelector('#modificatori_r_verniciatura').querySelector('input[type="radio"]:checked').value
    var mod_presse = document.querySelector('#modificatori_r_presse').querySelector('input[type="radio"]:checked').value
    var mod_cesoie = document.querySelector('#modificatori_r_cesoie').querySelector('input[type="radio"]:checked').value
    var mod_ct = document.querySelector('#modificatori_r_ct').querySelector('input[type="radio"]:checked').value

    document.querySelector('#div_personale').querySelectorAll('input[type="checkbox"]:checked').forEach(x => {

        var found = personale.find(p => p.nome == x.value)

        if (found != null) {
            // console.log(`${found.nome} [$${found.prezzo}] [${found.produzione}]`)

            if (found.reparto == "stampa") score += found.produzione * mod_stampa
            else if (found.reparto == "verniciatura") score += found.produzione * mod_verniciatura
            else if (found.reparto == "presse") score += found.produzione * mod_presse
            else if (found.reparto == "cesoie") score += found.produzione * mod_cesoie
            else if (found.reparto == "centroTaglio") score += found.produzione * mod_ct

            // console.log(`${found.reparto} ||| ${found.produzione} ||| ${mod_stampa}`)

            
        }
        else {
            console.error("Can't find: "+x.value);
        }



    })

    document.querySelector('#div_macchine').querySelectorAll('input[type="checkbox"]:checked').forEach(x => {
        var found = macchine.find(m => m.nome == x.value)

        if (found != null) {
            // console.log(`${found.nome} [$${found.prezzo}] [${found.produzione}]`)
            if (found.reparto == "stampa") score += found.produzione * mod_stampa
            else if (found.reparto == "verniciatura") score += found.produzione * mod_verniciatura
            else if (found.reparto == "presse") score += found.produzione * mod_presse
            else if (found.reparto == "cesoie") score += found.produzione * mod_cesoie
            else if (found.reparto == "centroTaglio") score += found.produzione * mod_ct
        }
        else {
            console.error("Can't find: "+x.value);
        }

    })

    document.querySelector('#score_view').innerText = score;
    
}

function createCheckBoxItem(item) {
    var newDiv = document.createElement('div');
    newDiv.className = item.reparto+' cb'

    if (item.reparto != repartoSel) newDiv.style.display = 'none'
    else newDiv.style.visibility = ''

    //newDiv.classList.add("itemBox");

    //<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    //<label for="vehicle1"> I have a bike</label><br></br>


    var newCB = document.createElement('input');
    newCB.id = item.nome
    newCB.type = "checkbox";
    newCB.value = item.nome;
    newCB.className = "cm-toggle"

    newCB.onchange = function() { updatePunteggio() };

    var newLabel = document.createElement('label');
    newLabel.htmlFor = item.nome;
    newLabel.innerText = item.nome;



    // newBtn.name = item.nome;
    // newBtn.style.background = item.colore;
    // newBtn.classList.add("label_btn");
    // newBtn.onclick = function() { addToItem(item.id_num) };
    
    // var newBtnDel = document.createElement('input');
    // newBtnDel.value = "-";
    // newBtnDel.type = "button";
    // newBtnDel.classList.add("del_btn");
    // newBtnDel.onclick = function() { removeToItem(item.id_num) };
    
    // var newNum = document.createElement('input');
    // newNum.id = item.id_num;
    // newNum.type = "number";
    // newNum.value = 0;
    // newNum.oninput = function() { updateNumber(item.id_num) };

    newDiv.appendChild(newCB);
    newDiv.appendChild(newLabel);
    // newDiv.appendChild(newNum);

    return newDiv;
}

function changedRepartoHandler() {
    repartoSel = document.querySelector('#reparto_r').querySelector('input[type="radio"]:checked').value

    document.querySelectorAll(".cb").forEach(el => el.style.display = 'none');
    document.querySelectorAll(".mod_nav").forEach(el => el.style.display = 'none');
    document.querySelectorAll("."+repartoSel).forEach(el => el.style.display = 'flex');
}
