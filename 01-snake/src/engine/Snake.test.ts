import { Snake } from "./Snake";
import { Cell } from "./Cell";

describe("Snake", () => {
  it("should take three cells at the beginning", () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);
  });

  it("should move right", () => {
    const snake = new Snake();

    snake.move()

    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("should move down", () => {
    const snake = new Snake();

    snake.setDirection("Down")
    snake.move()

    expect(snake.getDirection()).toEqual("Down");
    expect(snake.getHead()).toEqual(new Cell(2, 1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("should move left", () => {
    const snake = new Snake();

    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Left")
    snake.move()

    expect(snake.getDirection()).toEqual("Left");
    expect(snake.getHead()).toEqual(new Cell(1, 1));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)]);
  });

  it("should move up", () => {
    const snake = new Snake();

    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Left")
    snake.move()
    snake.setDirection("Up")
    snake.move()

    expect(snake.getDirection()).toEqual("Up");
    expect(snake.getHead()).toEqual(new Cell(1, 0));
    expect(snake.getTail()).toEqual([new Cell(2, 1), new Cell(1, 1)]);
  });

});
