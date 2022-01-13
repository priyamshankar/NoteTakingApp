let plus = document.getElementById("plus");
plus.addEventListener("click", plusfnc);
function plusfnc() {
    let txtbox = document.createElement("p");
    txtbox.id="txid";
    
    //    txtbox.id=txid;
    //    txtbox.setAttribute("type","text");
    let text = document.createTextNode("This is a paragraph.");
    txtbox.appendChild(text);
    let txid=document.getElementById("txid");
    txid.innerHTML="<br>heyy there
}
