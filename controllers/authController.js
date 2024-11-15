import { NextResponse } from 'next/server';  // Import NextResponse
import User from '@/models/userModel';
import { hashPassword } from '@/utils/hash';
import { generateToken } from '@/utils/generateToken';

export const registerUser = async (req) => {
  try {
    const { username, password, email, role } = await req.json();  // Added role in the request body
    console.log('Received data:', { username, password, email, role });

    // Validate email if it's provided
    if (email) {
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        console.log('Email already exists');
        return NextResponse.json(
          { message: 'Email already exists' },
          { status: 409 }
        );
      }
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('Username already exists');
      return NextResponse.json(
        { message: 'Username already exists' },
        { status: 409 }
      );
    }

    console.log('Creating new user...');
    // Hash the password and create a new user
    const hashedPassword = await hashPassword(password);
    console.log('Password hashed successfully');

    // Set default role to 'user' if not provided
    const userRole = role || 'user';  // Default to 'user' if role is not provided

    console.log('Assigned role:', userRole);  // Log the assigned role to verify

    const newUser = new User({
      username,
      password: hashedPassword,
      email: email || null,  // Allow email to be null if not provided
      role: userRole,  // Add the role to the new user
    });

    console.log('New user object:', newUser);  // Log the new user object

    // Save the new user to the database
    await newUser.save();
    console.log('User saved successfully');

    // Generate a token
    const token = generateToken(newUser);
    console.log('Token generated:', token);

    return NextResponse.json(
      { message: 'User registered successfully', token },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json(
      { message: 'Error registering user', error: error.message },
      { status: 500 }
    );
  }
};
