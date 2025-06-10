import { body, validationResult } from "express-validator";
const validate = async (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                return next();
            }
            return res.status(422).json({ erros: errors.array() });
        }
    };
};
const signUpValidator = [
    body("name").notEmpty().withMessage("please, provide a name!"),
    body("email").trim().isEmail().withMessage("please, provide an email!"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("should contain at least six chars!"),
];
//# sourceMappingURL=validators.js.map