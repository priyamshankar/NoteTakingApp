notesShow();
let title = document.getElementById("exampleFormControlInput1");
let note = document.getElementById("exampleFormControlTextarea1");
let add_note = document.getElementById("add_note");
add_note.addEventListener("click", function () {
    let strnoteobj;
    let strtitleobj;
    let strnote = localStorage.getItem("strnote");
    let strTitle = localStorage.getItem("strTitle");
    if (strnote == null && strTitle == null) {
        strnoteobj = [];
        strtitleobj = [];
    }
    else {
        strnoteobj = JSON.parse(strnote);
        strtitleobj = JSON.parse(strTitle);
    }
    strnoteobj.push(note.value);
    strtitleobj.push(title.value);
    localStorage.setItem("strnote", JSON.stringify(strnoteobj));
    localStorage.setItem("strTitle", JSON.stringify(strtitleobj));
    title.value = ("");
    note.value = ("");
    notesShow();
});
function notesShow() {
    let strnote = localStorage.getItem("strnote");
    let strTitle = localStorage.getItem("strTitle");
    // let strnoteobj;
    // let strtitleobj;
    if (strnote == null && strTitle == null) {
        strnoteobj = [];
        strtitleobj = [];
    }
    else {
        strnoteobj = JSON.parse(strnote);
        strtitleobj = JSON.parse(strTitle);
    }
    let domShow = "";
    strnoteobj.forEach(function (element, index) {
        domShow += `  <div class="card text-dark bg-warning mb-3 mx-3 my-3" style="max-width: 18rem;display:inline-flex;min-width: 10rem">
        <div class="card-header">Note ${index + 1} <button type="button" onclick="deleteNote(this.id)" class="btn-close" aria-label="Close"
                style="float: right;" id="${index}"></button></div>
        <div class="card-body">
            <h5 class="card-title">${strtitleobj[index]}</h5>
            <p class="card-text">${element}</p>
            <button type="button" class="btn btn-outline-light" id="cut${index}">Light</button>
        </div>
        </div>`;
    });
    document.getElementById("oops").innerHTML = domShow;
    if (strnoteobj.length!=0 && strtitleobj.length!=0){
        // domShow.innerHTML=(`No notes found!! Add some please`);
        let emptyNote=document.getElementById("emptyNote");
        emptyNote.style.display="none";
    }
    else{
        emptyNote.style.display="block";
    }
}
function deleteNote(index) {
    // alert(index);
    let strnote = localStorage.getItem("strnote");
    let strTitle = localStorage.getItem("strTitle");
    // let strnoteobj;
    // let strtitleobj;
    if (strnote == null && strTitle == null) {
        strnoteobj = [];
        strtitleobj = [];
    }
    else {
        strnoteobj = JSON.parse(strnote);
        strtitleobj = JSON.parse(strTitle);
    }
    strnoteobj.splice(index, 1);
    strtitleobj.splice(index, 1);
    localStorage.setItem("strnote", JSON.stringify(strnoteobj));
    localStorage.setItem("strTitle", JSON.stringify(strtitleobj));
    notesShow();
}

let search = document.getElementById("search");
search.addEventListener("input", function () {
    let card = document.getElementsByClassName("card");
    Array.from(card).forEach(function (element) {
        let noteTxt = element.getElementsByTagName("p")[0].innerText;
        let titlTxt = element.getElementsByTagName("h5")[0].innerText;
        if (noteTxt.includes(search.value)) {
            element.style.display = "inline-flex";
        }
        else if(titlTxt.includes(search.value)) {
            element.style.display = "inline-flex";
        }
        else {
            element.style.display = "none";
        }
    });
})