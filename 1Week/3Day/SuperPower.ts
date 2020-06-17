export abstract class SuperPower {// I hold all of the types of data required but you can't be me
    name:string
    description:string
    constructor(name:string,description:string){
        this.name = name
        this.description = description
    }
}

export class Teleportation extends SuperPower{//specific sets of data to implement the general form
    constructor(){
        //super is a keyword to call the parents constructor
        super('Teleportation', 'Vioalte physics to instantaneously travel between two points in space')
    }
}

export class SuperSpeed extends SuperPower{
    constructor(){
        super('Super Speed', 'Run real fast')
    }
}

export class TimeTravel extends SuperPower{
    constructor(){
        super('Time Travel', 'Violate physicis by moving forward or backwards through the flow of time')
    }
}




