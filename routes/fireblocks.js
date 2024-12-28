const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

// Mock Fireblocks function
const createMockVaultAccount = (customerRefId) => {
  return new Promise((resolve) => {
    resolve({
      id: "mock-wallet-id",
      customerRefId,
      createdAt: new Date().toISOString(),
    });
  });
};

router.post("/create-wallet", async (req, res) => {
  try {
    const { customerRefId } = req.body;

    // Replace Fireblocks call with a mock implementation
    const wallet = await createMockVaultAccount(customerRefId);

    res.status(201).json({ wallet });
  } catch (error) {
    console.error("Error creating wallet:", error);
    res.status(500).json({ error: "Error creating wallet" });
  }
});

module.exports = router;
