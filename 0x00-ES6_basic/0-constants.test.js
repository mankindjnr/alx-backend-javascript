// 0-constants.test.js
import { taskFirst } from './0-constants.js';

test('taskFirst should return the expected string', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});
