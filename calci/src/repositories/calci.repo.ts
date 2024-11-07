export const additionRepo = (num1: number, num2: number) => {
    try {
        return num1 + num2;

    } catch (error) {
        console.log(error);
        return "Internal server error";
    }
}

export const substractionRepo = (num1: number, num2: number) => {
    try {
        return num1 - num2;

    } catch (error) {
        console.log(error);
        return "Internal server error";
    }
}

export const productRepo = (num1: number, num2: number) => {
    try {
        return num1 * num2;

    } catch (error) {
        console.log(error);
        return "Internal server error";
    }
}

export const divisonRepo = (num1: number, num2: number) => {
    try {
        return num1 / num2;

    } catch (error) {
        console.log(error);
        return "Internal server error";
    }
}