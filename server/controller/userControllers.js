import User from "../models/userModel.js"
import generateToken from "../utils/jwt.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user)

    if (!user) {
        return res.status(404).json({
            message: "user is not registerd please register and try again"
        })
    }
    // checking password

    if (password === user.password) {
        // console.log(password, user.password)
        const payload = {
            name: user.name,
            id: user._id,
        }
        const token = generateToken(payload)
        return res.status(200).json({
            message: "password done",
            data: {
                token,
            }
        })
    } else {
        return res.status(400).json({
            message: "password doesnt match"
        })
    }
}

export const register = async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    console.log(user)

    if (user) {
        return res.status(400).json({
            message: "user already exist , please login"
        })
    }
    const newUser = await User.create(req.body);
    res.status(201).json({
        message: 'user created',
        data: newUser,
    })
}