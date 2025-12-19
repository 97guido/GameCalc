var repartoSel = "stampa"
var personale = []
var macchine = []
var bonusMalus = 0
var cig = 0

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
        var newDiv = createCheckBoxItem(p, true);
        document.querySelectorAll('#div_personale')[0].appendChild(newDiv);
    })
}

function updatePunteggio() {

    var score = bonusMalus;
    cig = 0;

    var mod_stampa = document.querySelector('#modificatori_r_stampa').querySelector('input[type="radio"]:checked').value
    var mod_verniciatura = document.querySelector('#modificatori_r_verniciatura').querySelector('input[type="radio"]:checked').value
    var mod_presse = document.querySelector('#modificatori_r_presse').querySelector('input[type="radio"]:checked').value
    var mod_cesoie = document.querySelector('#modificatori_r_cesoie').querySelector('input[type="radio"]:checked').value
    var mod_ct = document.querySelector('#modificatori_r_ct').querySelector('input[type="radio"]:checked').value

    document.querySelector('#div_personale').querySelectorAll('input[type="checkbox"]:checked.cm-toggle').forEach(x => {

        var found = personale.find(p => p.nome == x.value)

        if (found != null) {
            // console.log(`${found.nome} [$${found.prezzo}] [${found.produzione}]`)

            var isCIG = document.getElementById('CIG_CB '+x.value).checked
            if (isCIG) {
                cig -= 5;
            }


            if (found.reparto == "stampa") score += isCIG ? 0 : found.produzione * mod_stampa
            else if (found.reparto == "verniciatura") score += isCIG ? 0 : found.produzione * mod_verniciatura
            else if (found.reparto == "presse") score += isCIG ? 0 : found.produzione * mod_presse
            else if (found.reparto == "cesoie") score += isCIG ? 0 : found.produzione * mod_cesoie
            else if (found.reparto == "centroTaglio") score += isCIG ? 0 : found.produzione * mod_ct

            
            // console.log(`${found.reparto} ||| ${found.produzione} ||| ${mod_stampa}`)

            
        }
        else {
            console.error("Can't find: "+x.value);
        }



    })

    document.querySelector('#div_macchine').querySelectorAll('input[type="checkbox"]:checked.cm-toggle').forEach(x => {
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

    document.querySelector('#score_view').innerText = score + cig;
    document.querySelector('#cig_view').value = cig;
    
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

function createCheckBoxItem(item, withCig=false) {
    var newDiv = document.createElement('div');
    newDiv.className = item.reparto+' cb'
    newDiv.id = 'div_'+item.nome

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

    newCB.onchange = function() { updatePunteggio(); changedPersonaleCheckbox(item.nome); };

    var newLabel = document.createElement('label');
    newLabel.htmlFor = item.nome;
    newLabel.innerText = item.nome.toUpperCase();
    newLabel.className = "toggle-label";

    

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


    if (withCig) {
        var cigCB = document.createElement('input');
        cigCB.id = "CIG_CB " + item.nome;
        cigCB.type = "checkbox";
        cigCB.style.visibility = "hidden";
        cigCB.style.width = 0;
        cigCB.onclick = function() { changedPersonaleCheckbox(item.nome); updatePunteggio(item.nome); };
        newDiv.appendChild(cigCB);

        var cigLabel = document.createElement('label');
        cigLabel.id = "CIG " + item.nome;
        cigLabel.htmlFor = "CIG_CB " + item.nome;
        cigLabel.innerText = "CIG";
        cigLabel.style.visibility = "hidden";
        cigLabel.classList.add("cig_btn");
        newDiv.appendChild(cigLabel);
    }

    return newDiv;
}

function changedRepartoHandler() {
    repartoSel = document.querySelector('#reparto_r').querySelector('input[type="radio"]:checked').value

    document.querySelectorAll(".cb").forEach(el => el.style.display = 'none');
    document.querySelectorAll(".mod_nav").forEach(el => el.style.display = 'none');
    document.querySelectorAll("."+repartoSel).forEach(el => el.style.display = 'flex');
}

function changedPersonaleCheckbox(nome) {
    var cb = document.getElementById(nome);
    var divP = document.getElementById("div_"+nome);
    var cigBtn = document.getElementById("CIG " + nome);
    var cigCB = document.getElementById("CIG_CB " + nome);

    if (cigCB == undefined || cigCB == null) {
        divP.style.backgroundColor = cb.checked ? "#b4bef3" : ""; // "#5260ad";
    }
    else {
        divP.style.backgroundColor = cb.checked ? (cigCB.checked ? "#ad5252ff" : "#b4bef3") : ""; //"#5260ad";
        cigBtn.style.visibility = cb.checked ? "visible" : "hidden";
        cigBtn.style.backgroundColor = cigCB.checked ? "#921212ff" : "#5260ad";
    }


}
