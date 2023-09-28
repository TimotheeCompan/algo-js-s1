class pokemon {
    constructor( name, attack, defense, hp){
        this.name= name
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }
}
let dracaufeu = new pokemon("Dracaufeu",40,10,200)
let tortank = new pokemon("Tortank",20,20,230)
var luck= 0.5
while(tortank.hp > 0){
    var isluckyDracaufeu = Math.random()
    if (luck < isluckyDracaufeu){
       dracaufeu.attack = dracaufeu.attack + 20
       console.log("Dracaufeu utilise lance-flammes et effectue un coup critique !")
    }else{
        console.log("Dracaufeu utilise morsure")
    }
    tortank.hp= tortank.hp - (dracaufeu.attack - tortank.defense)
    console.log("Tortank est mtn a "+tortank.hp+"hp.")
    if(tortank.hp <= 0){
        console.log("Dracaufeu a remporté le combat")
        break
    }
    var isluckyTortank = Math.random()
    if (luck < isluckyTortank){
        tortank.attack =tortank.attack + 20
        console.log("Tortank utilise Hydro-canon et effectue un coup critique !")
    }else{
        console.log("Tortank utilise cascade")
    }
    dracaufeu.hp= dracaufeu.hp - (tortank.attack - dracaufeu.defense)
    console.log("Dracaufeu est mtn a "+dracaufeu.hp+"hp")
    if (dracaufeu.hp <= 0){
        console.log("Tortank a remporté le combat")
        break
    }
}



