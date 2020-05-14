var student ={};

student.이름="유니나";
student.취미="발레";
student.특기="피아노";
student.장래희망="과학자";

student.toString = function(){
    var output = "";
    for (var key in this) {
        //toString;
        if(key != 'toString'){
            output += key + '\t' + this[key] +'\n';
        }
    }
    
    return output;
}
alert(student.toString());

delete (student.특기);

alert(student);