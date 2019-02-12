
let input = document.querySelector('input');
let boutonAjouter = document.querySelector('button');
let ul = document.createElement('ul');
let divPrincipale = document.getElementById('divPrincipale');
divPrincipale.append(ul);

const ajoutLi = () => {
    let li = document.createElement('li');
    li.style.backgroundColor = '#e0dfdf';
    // Création d'un span (dans mon li) qui va contenir le texte de mon input
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.innerText = input.value;
    li.append(span);
    // let btnDone = document.createElement("button");
    // btnDone.className = "btn btn-outline-success";
    let iconeDone = document.createElement('i');
    iconeDone.className = "far fa-check-square";
    iconeDone.style.color = 'green';
    div.append(iconeDone);
    // let btnPoubelle = document.createElement('button');
    // btnPoubelle.className = "btn btn-outline-danger";
    let iconePoubelle = document.createElement('i');
    iconePoubelle.className = "fas fa-trash-alt";
    iconePoubelle.style.color = 'red';
    div.append(iconePoubelle);
    let iconeEdit = document.createElement('i');
    iconeEdit.className = "fas fa-edit";
    iconeEdit.style.color = '#b4b437';
    // let bntEdit = document.createElement('button');
    // bntEdit.className = "btn btn-outline-secondary";
    div.append(iconeEdit);
    ul.append(li); // 'append' pour que mon élément s'ajoute à la fin de la liste 
    div.append(iconePoubelle, iconeDone, iconeEdit);
    li.append(div);
    div.className = "text-right";
    li.className = "text-left";
    input.value = '';


    // Créer une méthode qui permet de supprimer le li (la déclencher au click du bouton delete)
    const deleteElement = () => {
        ul.removeChild(li);
    }
    iconePoubelle.addEventListener('click', deleteElement);

    // Fonction qui barre et mets ma case en vert quand je click sur 'done' et enlève ces propriétés quand je reclick sur 'done'
    const barrerTache = () => {
        if (li.style.textDecoration === '') {
            li.style.textDecoration = 'line-through';
            li.style.color = '#8b8787';
            li.style.backgroundColor = '#8cff8bcf';
        } else {
            li.style.textDecoration = '';
            li.style.color = '';
            li.style.backgroundColor = 'rgb(224, 223, 223)';
        }
    }
    iconeDone.addEventListener('click', barrerTache);

    // Créer une méthode qui permet de changer la valeur du li
    iconeEdit.addEventListener('click', function () {
        span.contentEditable = 'true';
        span.style.border = '2px solid #c7c5c5';
        span.style.padding = '10px 10px 10px 0px';
        span.innerText.color = 'red';
    });
    // Pour qu'au click du enter, il valide mes modifications :
    span.addEventListener('keypress', function (key) {
        if (key.keyCode == 13) {
            span.contentEditable = 'false';
            span.style.border = 'none';
        }
    })
};
boutonAjouter.addEventListener('click', ajoutLi);

