import express from "express";

import {
  google,
  signOut,
  signup,
  singin,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", singin);
router.post("/google", google);
router.get("/signout", signOut);

export default router;
