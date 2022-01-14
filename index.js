let plus = document.getElementById("plus");
plus.addEventListener("click", plusfnc);
let counter = 0;
function plusfnc() {
    counter++;
    if (counter == 1) {
        var dlt = document.createElement("button");
        dlt.id = "dltid";
        document.body.appendChild(dlt);
        var dltid = document.getElementById("dltid");
        dltid.innerHTML = ("minus the texbox");
    }
    const txtbox = document.createElement("input");
    txtbox.className = "txid";

    txtbox.setAttribute("type", "text");
    document.body.appendChild(txtbox);
    plus.innerHTML = ("plus more");
    if (counter == 5) {
        alert("5 text box created");
    }
    // const dltid = document.getElementsByClassName(".dltid");
    dltid.addEventListener("click", dltfnc);
    function dltfnc() {
        const txid = document.querySelector(".txid");
        txid.remove();
        // alert("dlt clicked");
        counter--;
        if (counter == 0) {
            document.getElementById("dltid").remove();
        }
    }
}
document.getElementById("btn2").addEventListener("click", function(){
    
})
