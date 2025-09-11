import { makeNewTodo } from "./make-new-todo";

describe("makeNewTodo (unit)", () => {
  it("should create a new todo", () => {
    // AAA -> Arrange, Act, Assert
    // Arrange -> Criar as coisas que eu preciso
    const expectedTodo = {
      id: expect.any(String),
      description: "new todo",
      createdAt: expect.any(String),
    };

    // Act
    const newTodo = makeNewTodo("new todo");

    // Assert
    // toBe ===
    // toEqual toStrictEqual
    // Checando apenas a description
    expect(newTodo.description).toBe(expectedTodo.description);

    // Checando o objeto inteiro
    expect(newTodo).toStrictEqual(expectedTodo);
  });
});
