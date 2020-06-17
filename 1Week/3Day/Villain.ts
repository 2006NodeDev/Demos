import { KnownSuperPower } from './KnownSuperPower'
import { SuperSpeed } from './SuperPower';

//use it to define a complex type for an object
interface IVillain {
    numberOfHenchman:number
    evilLaugh:boolean
    superPower:KnownSuperPower
    coolHair:boolean
    evilLair:string
    monolouge:(heroName:string)=>void
}

let joker:IVillain = {
    coolHair:true,
    evilLair:'Arkham Asylum',
    evilLaugh:true,
    numberOfHenchman:100,
    monolouge:(heroName:string) => {
        console.log(`HAHAHAHA ${heroName}! YOU'LL NEVER CATCH ME!`);
        
    },
    superPower:new SuperSpeed()

}

console.log(joker);

joker.monolouge('BatMan')

