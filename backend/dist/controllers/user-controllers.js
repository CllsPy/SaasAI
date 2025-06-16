import User from "../models/User.js";
export const getAllUsers = async (req, res, next) => {
    try {
        //get all users
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return res.status(200).json({ message: "ERROR", cause: error.message });
        }
        return res.status(200).json({ message: "ERROR", cause: "Unknown error" });
    }
};
//# sourceMappingURL=user-controllers.js.map