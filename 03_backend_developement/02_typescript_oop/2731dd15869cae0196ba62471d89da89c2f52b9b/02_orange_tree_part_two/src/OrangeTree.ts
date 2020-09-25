import { Tree } from "./Tree";
// Code your class here.
class OrangeTree extends Tree {
  oranges: string[];
  constructor(age: number, oranges: string[] = []) {
    super(age);
    this.oranges = oranges;
  }
  ageOneYear(): void {
    if (this.alive) {
      this.age = this.age + 1;
      this.growOranges();
      this.alive = this. isAlive();
    }
  }
  isAlive(): boolean {
    const probability: number = Math.floor(Math.random() * Math.floor(2) + 1);
    if (this.age > 100) {
      return false;
    } else if (this.age >= 50 && this.age < 100) {
      if (probability === 0) {
        const prob: boolean = false;
        return false;
      } else {
        const prob: boolean = true;
        return this.alive;
      }
    } else if (this.age < 50) {
      return true;
    }
  }
  growOranges(): void {

    if (this.age >= 5 && this.age <= 10) {
        this.oranges= [];
      this.oranges.push(
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊"
      );
    }
    if (this.age >= 11 && this.age <= 20) {
        this.oranges= [];
      this.oranges.push(
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊"
      );
    }
    if (this.age >= 21 && this.age <= 40) {
        this.oranges= [];
      this.oranges.push("🍊", "🍊", "🍊", "🍊", "🍊");
    }
  }

  pickAnOrange(): void {
      if (this.oranges.length >0) {
          this.oranges.pop()
      }
    console.log("tree");
  }
}

export { OrangeTree };
