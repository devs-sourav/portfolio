import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  try {
    return jwt.sign(
      { id: user._id, username: user.username,role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
  } catch (error) {
    console.error('Error generating token:', error);
    throw new Error('Token generation failed');
  }
};
