import { Level } from "./levels";

export class Cell {
  isOpen: boolean = false;
  mines: number = 0;
  isBomb: boolean = false;
  isFlag: boolean = false;
  isUnsure: boolean = false;
}

let grid: Cell[][] = new Array;
let bombsLocation: Cell[] = new Array;
let aroundBombs: Cell[] = new Array;
let isTense = false;
let isLost = false;
let isWon = false;
let isQuestionMarksEnabled = false;
let minesLeft: number;

export class Minesweeper {
  private level: Level;

  constructor(level: Level) {
    this.level = level;
  }

  columnsCount(): number {
    return this.level.columns;
  }

  getCells(): Cell[][] {
    if(grid[0] === undefined){
      grid = new Array;
      for(let i = 0; i < this.level.rows; i++){
        grid.push(new Array())
      }
      for(let i = 0; i < this.level.columns; i++){
        let j = 0;
        do{
          grid[i].push(new Cell())
          j++;
        } while (j < this.level.columns)
      }
    }
    return new Array;
  }

aroundTheBombs(x: number, y: number){
  console.log(`${x+1} ${y+1}`)
  if(x - 1 !=- 1 && y - 1 !=- 1 && x + 1 != 10 && y + 1 != 10){
    grid[x-1]{y-1}.mines += 1;
  }
}

findTheBombsInGrid(x: number, y: number){
  let boolX = false;
  let boolY = false;
  let bombX = 0;
  let bombY = 0;
  for(let i = 0; i < this.level.columns; i++){
    if(grid[x][i].isBomb){
      boolX = true;
      bombY = i;
      break;
    }
  
} for(let i = 0; i < this.level.columns; i++){
  if(grid[i][y].isBomb){
    boolY = true;
    bombX = i;
    break;
  }
}
bombsLocation.forEach(val => val.isFlag = true)
}
  onLeftMouseDown(x: number, y: number) {
    if(!this.isLost){
      if(grid[x][y].isBomb){
        this.isLost = true;
        grid[x][y].isOpen = true;
     } else {
      this.isTense = true;
      grid[x][y].isOpen = true;
      this.findTheBombsInGrid(x, y)
     }
    }
  }

  onLeftMouseUp(x: number, y: number) {
    this.isTense = false;
  }

  onRightMouseUp(x: number, y: number) {
    if(this.isQuestionMarksEnabled){
      if(grid[x][y].isOpen = false) {
        if(grid[x][y].isFlag === false && grid[x][y].isUnsure === false){
          grid[x][y].isFlag = true;
          minesLeft--;
        } else if(grid[x][y].isFlag === true) {
          grid[x][y].isFlag = false;
          grid[x][y].isUnsure = true;
          minesLeft++;
        } else if(grid[x][y].isUnsure === true){
          grid[x][y].isUnsure = false;
        } 
      } else {}
      } else {
        if(grid[x][y].isUnsure = true){
          grid[x][y].isUnsure = false;
        }
        if(grid[x][y].isOpen === false){
          if(grid[x][y].isFlag === false){
            grid[x][y].isFlag = true;
            minesLeft--
          } else {
            grid[x][y].isFlag = false;
            minesLeft++;
          }
        }
      }
    }
  

  isTense(): boolean {
    return true;
  }

  timePassed(): number {
    return 999;
  }

  minesLeftCount() {
    return minesLeft;
  }

  reset() {
    this.isLost = false;
    grid = new Array;
    bombsLocatrion = new Array;
  }

  currentLevel(): Level {
    return this.level;
  }

  selectLevel(level: Level) {
    bombsLocation = new Array;
    grid = new Array;
    this.level = level;
  }

  isLost(): boolean {
    return false;
  }

  isWon(): boolean {
    return false;
  }

  isQuestionMarksEnabled(): boolean {
    return false;
  }

  toggleQuestionMarksEnabled() {}
}
