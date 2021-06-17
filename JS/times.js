var count = 0; //전역변수
for(var i = 1; i<=100; i++){
    if(i % 4 === 0){
        document.write(i +', '); //4 숫자
        count += 1; //1,2 횟수

    }

}

document.write('<br>');
document.write("<p>4의 배수 갯수 : " + count +"</p>")=
00