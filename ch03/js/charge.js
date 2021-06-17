    // var age = 21;
    var charge;  //입장료
    var age = prompt("나이를 입력하면 자동계산 됩니다","14")

   //조건문 코딩
if(age!==null){
    
    if(age < 8){
        document.write("미취학 아동입니다.<br>")
        charge = 1000;          
    }
    else if(age >= 8 && age <14){
        document.write("초딩 입니다<br>")
        charge = 2000;          
    }
    else if(age >=14 && age < 20){
        document.write("중고딩 입니다<br>")
        charge = 2500;          
    }
    else{  //age>=20 생략됨
        document.write("일반인 입니다<br>")
        charge = 3000;     

    }
    document.write("입장료는 <span class='font'>" + charge + "</span><span class='font'>원</span> 입니다." ) ; //공통으로 들어가는 것은 중복방지로 밖으로 빼면 됌
    
    }else{ //age = null
         document.write("입력이 취소되었습니다.");
}