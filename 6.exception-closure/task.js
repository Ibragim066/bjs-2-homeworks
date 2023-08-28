// Задача 1
function parseCount(value) {
    const valueParsed = Number.parseFloat(value);
    if (Number.isNaN(valueParsed)) {
        throw new Error("Невалидное значение")
    }
    return valueParsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error
    }
}

// Задача 2

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if (((firstSide + secondSide) <= thirdSide) ||
            ((firstSide + thirdSide) <= secondSide) ||
            ((secondSide + thirdSide) <= firstSide)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;

    }
    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(
            p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)
        )
        return Number(area.toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        const triangle = new Triangle(firstSide, secondSide, thirdSide)
        return triangle;
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            },
        }
    }
}

