import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
head: Cell = new Cell(2, 0);
tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
direction: Direction = "Right";

  setDirection(newDirection: Direction) {
    if(this.direction === "Right" && newDirection === "Left") return;
    if(this.direction === "Left" && newDirection === "Right") return;
    if(this.direction === "Up" && newDirection === "Down") return;
    if(this.direction === "Down" && newDirection === "Up") return;
    this.direction = newDirection;
  }

  move() {
  const oldHead = new Cell(this.head.x, this.head.y)
   switch (this.direction) {
    case "Right":
      this.head = new Cell(this.head.x + 1, this.head.y);
      break;
    case "Down": 
      this.head = new Cell(this.head.x, this.head.y + 1);;
      break;
    case "Left": 
      this.head = new Cell(this.head.x - 1, this.head.y);;
      break;
    case "Up": 
      this.head = new Cell(this.head.x, this.head.y - 1);;
      break;
    default:
      break;
  }
  this.tail.push(oldHead);  
  this.tail.shift();
  }

  grow() {
    // ja isAppleInside === true, ieslēgt Counter(3), kas 3x 
    // ptur this.tail.shift()
  }

  getHead(): Cell {
    return this.head
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    // ja galva ietriecas astē
    // if(this.head.x, this.head.y) === [...this.tail.x, this.tail.y] return
    return false;
  }
}
