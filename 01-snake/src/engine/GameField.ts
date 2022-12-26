import { Cell } from "./Cell";

export class GameField {
  /**
   * Called when level completed
   */
  apples: Cell[] = [new Cell(18, 16), new Cell(20, 16), new Cell(22, 16), new Cell(24, 16), new Cell(26, 16),]

  seed(): void {
    // ja isEmpty === true, tiek radīts jauns apples masīvs ar 5 šūnām (koordinātas random noteiktā intervālā)
  }

  getApples(): Cell[] {
    return this.apples;
  }

  isAppleInside(cell: Cell): boolean {
    // ja sakrīt ar galvu - remove apple
    return false;
  }

  removeApple(cell: Cell): void {
    // ja isAppleInside === true, izņemt tieši to šūnu no apples masīva
  }

  
  isEmpty(): boolean {
    // ja this.apples ir tukšs (undefined), tad === true
    return false;
  }
}
