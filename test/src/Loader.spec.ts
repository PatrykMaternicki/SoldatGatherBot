import Loader from '../../src/Loader';

describe("Testing loading config", () => {
    test("When enviroment is develop, config should be undefined", () => {
        expect(Loader.getConfig('develop')).toEqual(undefined);
    });
    test("When enviroment is dev, config should be JSON type", () => {
        expect(typeof Loader.getConfig('dev')).toBe('object');
    });
});