import Dice1 from "../assets/1.png";
import Dice2 from "../assets/2.png";
import Dice3 from "../assets/3.png";
import Dice4 from "../assets/4.png";
import Dice5 from "../assets/5.png";
import Dice6 from "../assets/6.png";
export function numberToImage(number){
    let dice;
    if(number==1){
        dice=Dice1
    }
    if(number==2){
        dice=Dice2
    }
    if(number==3){
        dice=Dice3
    }
    if(number==4){
        dice=Dice4
    }
    if(number==5){
        dice=Dice5
    }
    if(number==6){
        dice=Dice6
    }
    return dice
    

}