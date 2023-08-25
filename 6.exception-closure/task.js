// Задача 1
function parseCount(value) {
    const valueParsed = Number.parseFloat(value);;
    if (Number.isNaN(valueParsed)) {
        throw new Error("Невалидное значение")
    }
    return parseValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error
    }
}