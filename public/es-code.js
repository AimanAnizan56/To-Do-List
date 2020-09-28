var countList = 1;
function addList(){
    if(!(document.getElementById('input-to-do').value === '')){
        let allList = document.getElementById('all-list');
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.classList.add('text-base');
        td1.appendChild(document.createTextNode(countList));
        let td2 = document.createElement('td');
        td2.classList.add('text-base');
        td2.appendChild(document.createTextNode(document.getElementById('input-to-do').value))
        tr.appendChild(td1);
        tr.appendChild(td2);
        allList.appendChild(tr);
        countList++;
        document.getElementById('input-to-do').value = "";
        console.log(allList);
    }
}