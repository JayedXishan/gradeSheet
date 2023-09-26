function cal(){
    var s1=parseInt(document.getElementById('ban').value);
    var s2=parseInt(document.getElementById('eng').value);
    var s3=parseInt(document.getElementById('math').value);
    var s4=parseInt(document.getElementById('bgs').value);
    var s5=parseInt(document.getElementById('ict').value);

    if((s1<0 && s1>100)||(s2<0 && s2>100)||(s3<0 && s3>100)||(s4<0 && s4>100)||(s5<0 && s5>100)){
        alert("Wrong Marks Entered");
    }
    else{
        var gotMarks=s1+s2+s3+s4+s5;
        var avgMarks=gotMarks/5;
        var per=parseInt((gotMarks/500)*100);
        let grade="";
        let res="";
        if(s1>=33 && s2>=33 && s3>=33 && s4>=33 && s5>=33){
            res="PASS";
        }
        else{
            res="FAIL";
        }
        if(avgMarks>=80){
            grade="A+";
        }
        else if(avgMarks>=70){
            grade="A";
        }
        else if(avgMarks>=60){
            grade="A-";
        }
        else if(avgMarks>=50){
            grade="B";
        }
        else if(avgMarks>=40){
            grade="C";
        }
        else if(avgMarks>=33){
            grade="D";
        }
        else{
            grade="F";
        }
        document.getElementById("mo").innerHTML=gotMarks;
        document.getElementById("rsl").innerHTML=res;
        document.getElementById("per").innerHTML=per;
        document.getElementById("grd").innerHTML=grade;

    }
    document.querySelector('.totalShow').classList.add('expand');

}
