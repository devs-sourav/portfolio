import jwt from 'jsonwebtoken';

export const authMiddleware = (handler) => async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach the decoded user info to the request
    return handler(req, res);
  } catch (error) {
    console.error('Token verification error:', error);  // Log the error for debugging
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};
