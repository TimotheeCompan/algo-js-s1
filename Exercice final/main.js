class character {
    constructor( name, hp ){
        this.name= name
        this.hp = hp
    }
}
let roger = new character("Roger",10)
let checkFeu= 31
var musics =["Money Trees","Anissa","I Wonder","GooseBumps","Humble"]
while(checkFeu > 0){
    let random =Math.floor((Math.random()*5) +0);
    checkFeu = checkFeu - 1
    console.log("Il reste "+checkFeu+" feux à passer.")
    console.log("Il reste "+roger.hp+" hp à Roger.")
    console.log(musics[random]+" passe à la radio." )
    if(musics[random]== "Anissa"){
        console.log("Roger perds pète son crâne et perds un point de vie !")
        console.log("Roger insulte le chauffeur et change de taxi.")
        roger.hp = roger.hp - 1
        
    }else{
        console.log("Roger apprécie la mélodie.")
    }
    if(roger.hp <= 0){
        console.log("Roger EXPLOSE")
        break
    }else if(roger.hp > 0 && checkFeu == 1){
        console.log("Roger à passé tous les feux, c'est vraiment le boss. ")
        break
    }
    
}