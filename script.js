function Converter(fromUnit, toUnit, value) {
    const units = {
        'M': 1,       
        'KM': 1000,   
        'SM': 0.01,
        'IN': 1 / 39.37, // Метрів в 1 дюймі (1 / 39.37)
        'F': 1 / 3.28    // Метрів в 1 футі (1 / 3.28)
    };
    if (!units[fromUnit] || !units[toUnit]) {
        throw new Error('Невідома одиниця виміру.');
    }
    if (value<0 || isNaN(Number(value))) {
        throw new Error('Значення величини виміру не може бути відємним');
    }
    const valueInMeters = value * units[fromUnit];
    const convertedValue = valueInMeters/units[toUnit];
    return convertedValue;
}
module.exports = Converter;