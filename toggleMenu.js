var list = document.getElementById("list");

list.style.maxHeight = "0px";

function togglemenu(){
    if (list.style.maxHeight == "0px"){
        list.style.maxHeight = "300px";
    }else{
        list.style.maxHeight = "0px";
    }
}