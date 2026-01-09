import express from "express";
const router = express.Router();

/**
 * Hardcoded users (for demo / assignment)
 */
const USERS = [
  {
    username: "admin",
    password: "admin123",
    name: "Admin User"
  },
  {
    username: "user1",
    password: "user123",
    name: "John Doe"
  },
  {
    username: "user2",
    password: "user456",
    name: "Jane Smith"
  }
];

/**
 * LOGIN
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // using email field as username for simplicity
  const user = USERS.find(
    u => u.username === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid username or password"
    });
  }

  // fake token (sufficient for frontend auth)
  res.json({
    token: "demo-token-123",
    user: {
      name: user.name,
      username: user.username
    }
  });
});

export default router;
