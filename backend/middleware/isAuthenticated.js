import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    // Check if token exists in cookies
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    // Verify the token and decode the userId
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach userId to the request object
    req.id = decoded.userId;
    
    // Proceed to the next middleware/route
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Invalid token or error occurred." });
  }
};

export default isAuthenticated;
