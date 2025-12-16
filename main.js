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

            if (found.reparto == "stampa") score += found.produzione * mod_stampa
            else if (found.reparto == "verniciatura") score += found.produzione * mod_verniciatura
            else if (found.reparto == "presse") score += found.produzione * mod_presse
            else if (found.reparto == "cesoie") score += found.produzione * mod_cesoie
            else if (found.reparto == "centroTaglio") score += found.produzione * mod_ct

            var isCIG = document.getElementById('CIG_CB '+x.value).checked
            if (isCIG) {
                cig -= found.prezzo * 0.5
            }

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
        divP.style.backgroundColor = cb.checked ? "#b4bef3" : "#5260ad";
    }
    else {
        divP.style.backgroundColor = cb.checked ? (cigCB.checked ? "#ad5252ff" : "#b4bef3") : "#5260ad";
        cigBtn.style.visibility = cb.checked ? "visible" : "hidden";
        cigBtn.style.backgroundColor = cigCB.checked ? "#921212ff" : "#5260ad";
    }


}
