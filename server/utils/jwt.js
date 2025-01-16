import jwt from 'jsonwebtoken'

const payload = {
    name: "divyanshu",
    id: 5147187,
}

function generateToken() {
    return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '1h' })
}


export default generateToken