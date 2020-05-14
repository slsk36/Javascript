var inputBtn =  document.getElementById("btnA");
var outputBtn =  document.getElementById("btnB");
var mDiv = document.getElementById("printArea");

var student_arr=[];

inputBtn.onclick = function(){
    mDiv.innerHTML ="입력되었습니다.";
    var student={
        "name":document.getElementById("name").value,
        "국어":document.getElementById("kor").value,
        "수학":document.getElementById("math").value,
        "영어":document.getElementById("eng").value
    };
    student.getSum= function(){
        return parseInt(this.국어)+parseInt(this.수학);
    }
    student_arr.push(student);
    console.log(student_arr);
}

outputBtn.onclick = function(){
    var output ="";
    for (const student in student_arr) {
        for (const key in student) {
                const element = student[key];
                if(key != 'getSum')
                output += key+":"+element + " ";
                else{
                    output += "총점: "+student[key](); 
                }
            }
            output +="<br>";
    }
    mDiv.innerHTML = output;
}
