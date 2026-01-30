import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({message: "Token missing"});
    }
    const token = authHeader.split(" ")[1]; //Bearer token
     try {
        console.log("jwt secret - ", process.env.JWT_SECRET);
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
     } catch (err) {
        return res.status(401).json({message: "Invalid token"})
     }
}

export default authMiddleware;