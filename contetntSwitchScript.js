document.getElementById("pane1").style.display = "block";
document.getElementById("quest1").style.backgroundColor = "rgb(102, 255, 204)";

function openPane1() {
    document.getElementById("pane2").style.display = "none";
    document.getElementById("pane3").style.display = "none";
    document.getElementById("pane1").style.display = "block";

    document.getElementById("quest2").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("quest3").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("quest1").style.backgroundColor = "rgb(102, 255, 204)";

}

function openPane2() {
    document.getElementById("pane1").style.display = "none";
    document.getElementById("pane3").style.display = "none";
    document.getElementById("pane2").style.display = "block";

    document.getElementById("quest1").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("quest3").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("quest2").style.backgroundColor = "rgb(102, 255, 204)";

}

function openPane3() {
    document.getElementById("pane1").style.display = "none";
    document.getElementById("pane2").style.display = "none";
    document.getElementById("pane3").style.display = "block";

    document.getElementById("quest1").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("quest2").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("quest3").style.backgroundColor = "rgb(102, 255, 204)";
}
