import { Request, Response } from "express";
import { additionRepo, divisonRepo, productRepo, substractionRepo } from "../repositories/calci.repo";

export const additionController = async (req: Request, res: Response) => {
    try {
        const { num1, num2 } = req.body;
        const maths = additionRepo(num1, num2);
        return res.status(200).json({
            data: maths
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};


export const substractionController = async (req: Request, res: Response) => {
    try {
        const { num1, num2 } = req.body;
        const maths = substractionRepo(num1, num2);
        return res.status(200).json({
            data: maths
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const productController = async (req: Request, res: Response) => {
    try {
        const { num1, num2 } = req.body;
        const maths = productRepo(num1, num2);
        return res.status(200).json({
            data: maths
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};


export const divisonController = async (req: Request, res: Response) => {
    try {
        const { num1, num2 } = req.body;
        const maths = divisonRepo(num1, num2);
        return res.status(200).json({
            data: maths
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};