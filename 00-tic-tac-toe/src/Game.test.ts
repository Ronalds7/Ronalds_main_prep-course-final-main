import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
 
  it("should place players value on clicked cell and change turn", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
   expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should not be able to change existing value", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(0)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
   expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("player should win the game if a row is filled", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("player should win the game if a column is filled", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(3)
    game.onClick(4)
    game.onClick(6)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "X", "O", "-",
      "X", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("player should win the game if a diagonal is filled", () => {
    const game = new Game();

    game.onClick(1)
    game.onClick(0)
    game.onClick(2)
    game.onClick(4)
    game.onClick(5)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "O", "X", "X",
      "-", "O", "X",
      "-", "-", "O"
    ]);
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });

  it("player should be able to restart game", () => {
    const game = new Game();

    game.onClick(1)
    game.onClick(0)
    game.onClick(2)
    game.onClick(4)
    game.onClick(5)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "O", "X", "X",
      "-", "O", "X",
      "-", "-", "O"
    ]);

    game.restart()

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("player should not be able to continue playing after win", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"      
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);

    game.onClick(8)

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
  });

  it("tie is when all fields are filled and there is no winner", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(2)
    game.onClick(4)
    game.onClick(3)
    game.onClick(5)
    game.onClick(7)
    game.onClick(6)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "X", "O", "O",
      "O", "X", "X"
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });
});
