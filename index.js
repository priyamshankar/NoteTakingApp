notesShow();
// let remFavcl = document.getElementsByClassName("remFavcl");
//     remFavcl.style.display = "none";
let title = document.getElementById("exampleFormControlInput1");
let note = document.getElementById("exampleFormControlTextarea1");
let add_note = document.getElementById("add_note");
let showFav = document.getElementById("showFav");
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
            <button type="button" class="btn btn-outline-light" id="${index}00" onclick="addFav(this.id)">Add to fav</button>

        </div>
    </div>`;
    });

    document.getElementById("oops").innerHTML = domShow;
    if (strnoteobj.length != 0 && strtitleobj.length != 0) {
        // domShow.innerHTML=(`No notes found!! Add some please`);
        let emptyNote = document.getElementById("emptyNote");
        emptyNote.style.display = "none";
    }
    else {
        emptyNote.style.display = "block";
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
        else if (titlTxt.includes(search.value)) {
            element.style.display = "inline-flex";
        }
        else {
            element.style.display = "none";
        }
    });
});
function addFav(favIndex) {
    // document.getElementById("favIndex").style.display="none";
    let favIndexobj;
    favIndex = (favIndex / 100);
    let favIndexstr = localStorage.getItem("favIndexstr");
    if (favIndexstr == null) {
        favIndexobj = [];
    }
    else {
        favIndexobj = JSON.parse(favIndexstr);
    }
    favIndexobj.push(favIndex);
    localStorage.setItem("favIndexstr", JSON.stringify(favIndexobj));
}

function favourites() {
    let favcount = localStorage.getItem("favIndexstr");
    favcount = JSON.parse(favcount);
    let favDomshow = "";
    favcount.forEach(function (element, index) {
        favDomshow += `  <div class="card text-dark bg-warning mb-3 mx-3 my-3" style="max-width: 18rem;display:inline-flex;min-width: 10rem">
        <div class="card-header">Note ${element} <button type="button" onclick="deleteNote(this.id)" class="btn-close" aria-label="Close"
                style="float: right;" id="${index}"></button></div>
        <div class="card-body">
            <h5 class="card-title">${strtitleobj[element]}</h5>
            <p class="card-text">${strnoteobj[element]}</p>
        <button type="button" class="my-3 mx-3 btn btn-outline-danger remFavcl" id="${index}000" onclick="rmFav(this.id)">Remove from Fav </button>

        </div>
    </div>`;
        document.getElementById("oops").innerHTML = favDomshow;
    });
    if (favcount.length==0){
        document.getElementById("oops").innerHTML = "<h5>Nothing to show!</h5>";
    }

}
function rmFav(index){
    index=(index/1000);
    let rmCounter=localStorage.getItem("favIndexstr");
    rmCounter=JSON.parse(rmCounter);
    rmCounter.splice(index,1);
    localStorage.setItem("favIndexstr",JSON.stringify(rmCounter));
    favourites();
}