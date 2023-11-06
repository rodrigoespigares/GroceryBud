let contador = 0;

function add(){
    document.getElementById("submit").addEventListener("click",() => {
        let input = document.getElementById("input").value;
        if (input!="" && input != null){
            let newArticle = document.createElement("article");
            newArticle.className="article";
            let newP = document.createElement("p");
            newP.textContent = input;
            newP.id = "item"+contador++;
            let newDiv = document.createElement("div");
            newDiv.id = "buttons"
            let newEdit = document.createElement("button");
            newEdit.id ="edit";
            let newDelete = document.createElement("button");
            newDelete.id="delete"
            let newImgEdit = document.createElement("img");
            newImgEdit.src="src/img/edit.png";
            let newImgDelete = document.createElement("img");
            newImgDelete.src="src/img/bin.png";
            newEdit.appendChild(newImgEdit);
            newEdit.addEventListener("click",edit)
            newDelete.appendChild(newImgDelete);
            newDelete.addEventListener("click",deleteArticle)
            newDiv.appendChild(newEdit);
            newDiv.appendChild(newDelete);
            newArticle.appendChild(newP);
            newArticle.appendChild(newDiv);
            document.getElementById("list").appendChild(newArticle);
            document.getElementById("input").value = "";
        }
    })
}
function deleteArticle(e) {
    let article = e.target.parentNode.parentNode.parentNode;
    article.parentNode.removeChild(article);
}
function edit(e) {
    let article = e.target.parentNode.parentNode.parentNode;
    let p = article.querySelector("p");
    let newInput = document.createElement("input");
    newInput.value = p.textContent;
    
    newInput.id=p.id;
    article.removeChild(p);
    article.appendChild(newInput);
    let editItem = document.getElementById(newInput.id)
    
    editItem.addEventListener("keydown",(e) => {
        if(e.key =="Enter"){
            let newP = document.createElement("p");
            newP.textContent = editItem.value;
            newP.id =newInput.id;
            article.appendChild(newP);
            article.removeChild(newInput);
        }
    })
}
function deleteAll(){
    document.getElementById("clear").addEventListener("click",(e) => {
        let list = e.target.parentNode;
        let select = document.getElementById("list")
        console.log(select);
        list.removeChild(select);
        let newSelect = document.createElement("section");
        newSelect.id = "list";
        list.appendChild(newSelect);
    })
}