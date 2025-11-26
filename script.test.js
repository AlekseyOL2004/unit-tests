const Converter = require('./script'); 

describe('Converter', () => {

    test('Конвертація 2000 M в 2 KM', () => {
        const result = Converter('M', 'KM', 2000);
        expect(result).toBe(2);
    });

    test('Конвертація 1 M в 100 SM', () => {
        const result = Converter('M', 'SM', 1);
        expect(result).toBe(100);
    });

    test('Конвертація 2 M в 78.74 IN', () => {
        const result = Converter('M', 'IN', 2);
        expect(result).toBe(78.74);
    });
    
    test('Конвертація  2 F в 24 IN (приблизно)', () => {
        const result = Converter('F', 'IN', 2); 
        expect(result).toBeCloseTo(24, 0);
    });

    test('Конвертація при нульвому значенні (повертає 0)', () => {
        const result = Converter('KM', 'M', 0);
        expect(result).toBe(0);
    });

    test('Виклик помилки для невідомої одиниці', () => {
        expect(() => Converter('UNKNOWN', 'M', 1)).toThrow('Невідома одиниця виміру.');
    });
    
    test('Виклик помилки при відємному значенні', () => {
        expect(() => Converter('F', 'M', -1)).toThrow('Значення величини виміру не може бути відємним');
    });
});