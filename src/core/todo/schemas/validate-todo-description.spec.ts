import { validateTodoDescription } from './validate-todo-description';

describe('validateTodoDescription (unit)', () => {
  test('must return errors whe the description length is less than 4', () => {
    const description = 'abc';
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([
      'Descrição precisa ter mais de 3 caracteres',
    ]);
    expect(result.success).toBe(false);
  });

  test('must return success when the description length is more than 3 ', () => {
    const description = 'abcd';
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([]);
    expect(result.success).toBe(true);
  });
});
