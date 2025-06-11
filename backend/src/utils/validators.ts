
import { Request, Response, NextFunction } from "express"; // <-- IMPORTAÇÃO CORRETA
import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }

        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }

        return res.status(422).json({ erros: errors.array () });
    }
}

export const signupValidator = [
    body("name").notEmpty().withMessage("please, provide a name!"),
    body("email").trim().isEmail().withMessage("please, provide an email!"),
    body("password").trim().isLength({ min: 6 }).withMessage("should contain at least six chars!"),

];
