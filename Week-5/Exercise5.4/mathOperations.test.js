const mathOperations = require('./mathOperations');

test('two plus two', () => {
    const value = mathOperations.sum(2, 2);
    expect(value).toBe(4);
});

test('two point four plus eight point 6', () => {
    const value = mathOperations.sum(2.4 , 8.8);
    expect(value).toBeCloseTo(11.2);
});


test('two minus two', () => {
    const value = mathOperations.diff(2, 2);
    expect(value).toBe(0);
});

test('two point four minus eight point 6', () => {
    const value = mathOperations.diff(2.4 , 8.8);
    expect(value).toBeCloseTo(-6.4);
});


test('two multiply two', () => {
    const value = mathOperations.product(2, 2);
    expect(value).toBe(4);
});

test('two point four multiply eight point 6', () => {
    const value = mathOperations.product(2.4 , 8.8);
    expect(value).toBeCloseTo(21.12);
});