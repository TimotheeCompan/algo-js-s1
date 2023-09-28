var a = "Jean"
var b = "Jean"
var result

function checkName(firstName,secondName) {
    if(firstName === secondName){
        return true
    }else{
        return false
    }
}
result= checkName(a,b)
console.log(result)