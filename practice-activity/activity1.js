var score = 0;

function updatescore(){
    score = score + 1;
    document.getElementById("score").innerHTML = "Score " + score;

}
function save(){
    localStorage.setItem("score1",score);
}
function nextpage(){
    window.location="index.html";
}
