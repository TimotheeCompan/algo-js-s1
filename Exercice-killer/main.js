class characteristics{
    constructor(name,luckDie,luckAttack,luckDieAttack){
        this.name= name
        this.luckDie = luckDie
        this.luckAttack = luckAttack
        this.luckDieAttack
    }
}
let nerd = new characteristics("Nerd",3,5,2)
let handsomeBoy = new characteristics("HandsomeBoy",2,5,3)
let blonde = new characteristics("Blonde",1,6,1)
let athleticMan = new characteristics("AthleticMan",3,5,2)
let smartGirl = new characteristics("SmartGirl",2,5,3)

var survivor=["Roger","Timothée","Mayeul","Dan","Eliyan","Jonny","Tom","Paul","Phillipe","Sarah","Emma","Ines","Vincent","Kevin","Olivia","Alice","Liam","Noah","Edouard","Leo","Charlotte","Amélia","Félix","Florence","Jacob"]
let random =Math.floor((Math.random()*5) +0);

if(random == 0){
    nerd.name = survivor[0]
    handsomeBoy.name = survivor[1]
    blonde.name = survivor[2]
    athleticMan.name = survivor[3]
    smartGirl.name = survivor[4]
    console.log("Le nerd est "+nerd.name+".")
    console.log("Le handsomeBoy est "+handsomeBoy.name+".")
    console.log("La blonde est "+blonde.name+".")
    console.log("Le athleticMan est "+athleticMan.name+".")
    console.log("La smartGirl est "+smartGirl.name+".")

    
}
if(random == 1){
    nerd.name = survivor[5]
    handsomeBoy.name = survivor[6]
    blonde.name = survivor[7]
    athleticMan.name = survivor[8]
    smartGirl.name = survivor[9] 
    console.log("Le nerd est "+nerd.name+".")
    console.log("Le handsomeBoy est "+handsomeBoy.name+".")
    console.log("La blonde est "+blonde.name+".")
    console.log("Le athleticMan est "+athleticMan.name+".")
    console.log("La smartGirl est "+smartGirl.name+".")
}
if(random == 2){
    nerd.name = survivor[10]
    handsomeBoy.name = survivor[11]
    blonde.name = survivor[12]
    athleticMan.name = survivor[13]
    smartGirl.name = survivor[14]
    console.log("Le nerd est "+nerd.name+".")
    console.log("Le handsomeBoy est "+handsomeBoy.name+".")
    console.log("La blonde est "+blonde.name+".")
    console.log("Le athleticMan est "+athleticMan.name+".")
    console.log("La smartGirl est "+smartGirl.name+".")
}
if(random == 3){
    nerd.name = survivor[15]
    handsomeBoy.name = survivor[16]
    blonde.name = survivor[17]
    athleticMan.name = survivor[18]
    smartGirl.name = survivor[19]
    console.log("Le nerd est "+nerd.name+".")
    console.log("Le handsomeBoy est "+handsomeBoy.name+".")
    console.log("La blonde est "+blonde.name+".")
    console.log("Le athleticMan est "+athleticMan.name+".")
    console.log("La smartGirl est "+smartGirl.name+".")
}
if(random == 4){
    nerd.name = survivor[20]
    handsomeBoy.name = survivor[21]
    blonde.name = survivor[22]
    athleticMan.name = survivor[23]
    smartGirl.name = survivor[24]
    console.log("Le nerd est "+nerd.name+".")
    console.log("Le handsomeBoy est "+handsomeBoy.name+".")
    console.log("La blonde est "+blonde.name+".")
    console.log("Le athleticMan est "+athleticMan.name+".")
    console.log("La smartGirl est "+smartGirl.name+".")
}

let killer = 100
let nerdState= 1
let handsomeState= 1
let blondeState= 1
let athleticState= 1
let smartState= 1
while(killer > 0){
    if(nerdState != 0){
        let probaNerd = Math.floor((Math.random()*11) +0);
        
        if(probaNerd < nerd.luckDie){
            nerdState =0
            console.log(nerd.name+" est mort sans mettre de dégats.")
            
        }else if(probaNerd > nerd.luckAttack) {
            killer = killer - 10
            console.log(nerd.name+" a réussi à frapper le killer")
            
        }else if(probaNerd == 3){
            killer = killer - 15
            nerdState = 0
            console.log(nerd.name+" est mort mais a réussi à faire très mal au killer")
            
        }
    }
    if(handsomeState != 0){
        let probaHandsome = Math.floor((Math.random()*11) +0);
        if(probaHandsome < handsomeBoy.luckDie){
            handsomeState =0
            console.log(handsomeBoy.name+" est mort sans mettre de dégats.")
            
        }else if(probaHandsome > handsomeBoy.luckAttack) {
            killer = killer - 10
            console.log(handsomeBoy.name+" a réussi à frapper le killer")
            
        }else if( probaHandsome == 3){
            killer = killer - 15
            handsomeState = 0
            console.log(handsomeBoy.name+" est mort mais a réussi à faire très mal au killer")
            
        }
    }
    if(blondeState != 0){
        let probaBlonde = Math.floor((Math.random()*11) +0);
        if(probaBlonde < blonde.luckDie){
            blondeState =0
            console.log(blonde.name+" est mort sans mettre de dégats.")
            
        }else if(probaBlonde > blonde.luckAttack) {
            killer = killer - 10
            console.log(blonde.name+" a réussi à frapper le killer")
            
        }else if( probaBlonde == 3){
            killer = killer - 15
            blondeState = 0
            console.log(blonde.name+" est mort mais a réussi à faire très mal au killer")
            
        }
    }
    if(athleticState != 0){
        let probaAthletic = Math.floor((Math.random()*11) +0);
        if(probaAthletic < athleticMan.luckDie){
            athleticState =0
            console.log(athleticMan.name+" est mort sans mettre de dégats.")
            
        }else if(probaAthletic > athleticMan.luckAttack) {
            killer = killer - 10
            console.log(athleticMan.name+" a réussi à frapper le killer")
            
        }else if( probaAthletic == 3){
            killer = killer - 15
            athleticState = 0
            console.log(athleticMan.name+" est mort mais a réussi à faire très mal au killer")
            
        }
    }
    if(smartState != 0){
        let probaSmart = Math.floor((Math.random()*11) +0);
        if(probaSmart < smartGirl.luckDie){
            smartState =0
            console.log(smartGirl.name+" est mort sans mettre de dégats.")
            
        }else if(probaSmart > smartGirl.luckAttack) {
            killer = killer - 10
            console.log(smartGirl.name+" a réussi à frapper le killer")
            
        }else if( probaSmart == 3){
            killer = killer - 15
            smartState = 0
            console.log(smartGirl.name+" est mort mais a réussi à faire très mal au killer")
            
        }
    }
    if (killer <= 0){
        console.log("Les survivants ont éliminé le tueur !")
        if(handsomeState ==1){
            console.log(handsomeBoy.name+" à survécu !")
            
        }
        if(nerdState == 1){
            console.log(nerd.name+ " à survécu !")
            
        }
        if(smartState == 1){
            console.log(smartGirl.name+" à survécu !")
            
        }
        if(athleticState == 1){
            console.log(athleticMan.name+" à survécu !")
            
        }
        if(blondeState == 1){
            console.log(blonde.name+" à survécu !")
            
        }
        break
    }
    if(handsomeState == 0 && nerdState == 0 && smartState == 0 && athleticState== 0 && blondeState == 0){
        console.log("Le killer a tué tous les survivants")
        break
    }
    
    
}
