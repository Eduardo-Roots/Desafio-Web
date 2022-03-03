let lembretes = [];
let output = [];
let users = 'notes'


function formatDate(date) {
    const time = new Date(date);
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

function showList() {
    if (lembretes.length > 0) {
        const htmlTemp = (`<ol> ${lembretes.map(itens => `<li> ${formatDate(itens.date)} --> ${itens.notes}`)} </ol> <button class="ml-5 mt-5 bg-danger text-light">Apagar tudo do dia</button>`);
        output.innerHTML = htmlTemp;
    } else {
        output.innerHTML = 'Você apagou todos seus lembretes!';
    }
}

function saveList() {
    localStorage.setItem(users, JSON.stringify(lembretes));
}

function clearList() {
    for (let i = 0; i < lembretes.length; i++) {
        if (lembretes[i].done === 'false') {
            lembretes.splice(i);
            localStorage.removeItem(users, JSON.stringify(lembretes))
            i = 0;
        } else {
            lembretes[i].id = i;
        }
    }
    showList();
    saveList();
}

function clickList(element) {
    if (element.target.localName === 'li') {
        element.target.dataset.done = !element.target.dataset.done === 'true';
        lembretes[element.target.dataset.id].done = element.target.dataset.done;
        saveList();
    } else if (element.target.localName === 'button') {
        clearList();
    }
}

function onSubmit(element) {
    const task = {};
    task.notes = element.target[0].value;
    task.date = new Date();
    task.id = lembretes.length;
    task.done = 'false';
    lembretes.push(task);
    saveList();
    showList();
    element.preventDefault();
}

window.addEventListener('load', async () => {
    output = document.getElementById('notas');
    if (localStorage.getItem(users)) {
        lembretes = JSON.parse(localStorage.getItem(users));
        showList();
    }
    else {
        output.innerHTML = 'Crie seu primeiro lembrete!';
    }
    document.getElementById('form-task').addEventListener('submit', onSubmit);
    output.addEventListener('click', clickList);
});
