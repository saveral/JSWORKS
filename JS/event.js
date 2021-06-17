//상세 설명 보기 클릭 - 텍스트 보이기
function showText(){
    var text = document.getElementById("desc")
    text.style.display = "block"; 
    /* inline = 가로로 , block = 수직으로, none = ? */
    var button = document.getElementById("btn")
    button.style.display = "none"
}
function hideText(){
    var text = document.getElementById("desc")
    text.style.display = "none";  //텍스트 숨기기

    var button = document.getElementById("btn")
    button.style.display = "block"
    
}