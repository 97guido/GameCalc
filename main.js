var repartoSel = "stampa"
var personale = []
var macchine = []
var bonusMalus = 0

function init() {
    
    checkLogin()

    window.addEventListener("load",function() {
        setTimeout(function(){
            // This hides the address bar:
            window.scrollTo(0, 1);
        }, 0);
    });
    

}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkLogin() {

    try {
        var dpsw = getCookie("ecPsw")
        if (dpsw == "") {
            var c = prompt("Inserisci password").toString()
            var encryptKey = CryptoJS.AES.decrypt("U2FsdGVkX1/yd1JujCegau6Q/a38WP1GU+MquyDeeEmViPg0V2DNMx81g6en9vwtjJ/eXElkLPbVtB3cZB1Qbg==", c).toString(CryptoJS.enc.Utf8)
            c = "";
            document.cookie = `ecPsw=${encryptKey};`
            dpsw = encryptKey;
        }

        setPersonale(dpsw);
        setMacchinari(dpsw);


        if (personale.length > 0) {
            // Login authorized
        }
        else {
            document.cookie = "ecPsw=;";
            lpsw = "";
            checkLogin();
        }
    }
    catch (ex) {
        checkLogin();
    }
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

    //macchine = macchine.sort((a, b) => a.nome.localeCompare(b.nome))
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

    var score = bonusMalus;

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

function addBonus(toAdd) {
    bonusMalus += toAdd
    updatePunteggio()
    document.querySelector('#bonus_input').value = bonusMalus;

}

function setBonus() {
    bonusMalus = Number.parseInt(document.querySelector('#bonus_input').value);
    updatePunteggio()
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
