abstract class Tree {
    age: number;
    height: number = 0;
    alive: boolean = true;

constructor(age: number) {
    this.age = age;
    let height = 0;
if (age >= 1 && age <= 9 ) {
    height = age * 25;
}
if (age >= 10 && age <= 20 ) {
    height = (age-9) * 10 +225;
}
if (age > 20 ) {
    height = 335;
}
this.height = height;
}
abstract isAlive(): boolean;
abstract ageOneYear(): void;

seed():void{
this.age = 0; 
this.height = 0;
this.alive = true;}
}
export {Tree};