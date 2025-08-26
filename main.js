var repartoSel = "stampa"
var personale = []

function init() {
    setMacchinari();
    setPersonale();
}

function test() {
    console.log('test')
}

function setMacchinari() {

    macchine = macchine.sort((a, b) => a.nome.localeCompare(b.nome))
    macchine.forEach(m => {
        var newDiv = createCheckBoxItem(m);
        document.querySelectorAll('#div_macchine')[0].appendChild(newDiv);
    })
}

function setPersonale() {

    personale = JSON.parse(
            CryptoJS.AES.decrypt(
            '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'
            , prompt("Inserisci password")).toString(CryptoJS.enc.Utf8)
            )
    
    personale = personale.sort((a, b) => a.nome.localeCompare(b.nome))
    personale.forEach(p => {
        var newDiv = createCheckBoxItem(p);
        document.querySelectorAll('#div_personale')[0].appendChild(newDiv);
    })
}

function updatePunteggio() {

    var score = 0;

    document.querySelector('#div_personale').querySelectorAll('input[type="checkbox"]:checked').forEach(x => {

        var found = personale.find(p => p.nome == x.value)

        if (found != null) {
            // console.log(`${found.nome} [$${found.prezzo}] [${found.produzione}]`)
            score += found.produzione
        }
        else {
            console.error("Can't find: "+x.value);
        }



    })

    document.querySelector('#div_macchine').querySelectorAll('input[type="checkbox"]:checked').forEach(x => {
        var found = macchine.find(m => m.nome == x.value)

        if (found != null) {
            // console.log(`${found.nome} [$${found.prezzo}] [${found.produzione}]`)
            score += found.produzione
        }
        else {
            console.error("Can't find: "+x.value);
        }

    })

    var modificatore = document.querySelector('#modificatori_r').querySelector('input[type="radio"]:checked').value
    score *= modificatore

    console.log(`Score: ${score} (x${modificatore})`);
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
    document.querySelectorAll("."+repartoSel).forEach(el => el.style.display = 'block');
}

