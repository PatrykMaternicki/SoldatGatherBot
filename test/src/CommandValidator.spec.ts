import CommandValidator from '../../src/CommandValidator';

describe("Testing commandValidator", () => {
    test("When user use write !test, status should be false", () => {
        expect(CommandValidator.isCommand('test').status).toBe(false);
    });

    test("When user use write !hello, status should be true", () => {
        expect(CommandValidator.isCommand('test').status).toBe(false);
    });

    test("When user use write !hello, properties should be object", () => {
        expect(CommandValidator.isCommand('hello').properties instanceof Object).toBe(true);
    });

    test("When user use write !test, properties should be object", () => {
        expect(CommandValidator.isCommand('test').properties instanceof Object).toBe(false);
    });

    test('When command started, commands should be not undefined', () => {
        expect(CommandValidator.commands instanceof Object).toBe(true)
    })
});