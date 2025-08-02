import { RequestHandler } from "express";
import { AuthResponse, LoginRequest, SignupRequest } from "@shared/api";

// For demo purposes, we'll just return success for any login/signup
export const login: RequestHandler = (req, res) => {
  const { email, password }: LoginRequest = req.body;
  
  // Dummy validation - in real app this would check against database
  if (!email || !password) {
    const response: AuthResponse = {
      success: false,
      message: "Email and password are required"
    };
    return res.status(400).json(response);
  }

  // Return success with dummy intern data
  const response: AuthResponse = {
    success: true,
    intern: {
      id: "1",
      name: "Krishna Kumar",
      email: email,
      referralCode: "krishna2025",
      totalDonationsRaised: 15750,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      joinedDate: "2024-01-15"
    },
    message: "Login successful"
  };

  res.json(response);
};

export const signup: RequestHandler = (req, res) => {
  const { name, email, password }: SignupRequest = req.body;
  
  // Dummy validation
  if (!name || !email || !password) {
    const response: AuthResponse = {
      success: false,
      message: "Name, email and password are required"
    };
    return res.status(400).json(response);
  }

  // Return success with new intern data
  const referralCode = name.toLowerCase().replace(/\s+/g, '') + '2025';
  
  const response: AuthResponse = {
    success: true,
    intern: {
      id: String(Date.now()),
      name,
      email,
      referralCode,
      totalDonationsRaised: 0,
      joinedDate: new Date().toISOString().split('T')[0]
    },
    message: "Account created successfully"
  };

  res.json(response);
};
