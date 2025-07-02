import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    if (!process.env.JWT_SECRET) {
        throw new Error('Secret is missing!');
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    return token;
};
//# sourceMappingURL=token-manager.js.map