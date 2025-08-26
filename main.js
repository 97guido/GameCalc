var repartoSel = "stampa"


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
