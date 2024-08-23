import { Router } from "express";

const router = Router();

//Send email
router.get("/send-email", (req, res) => {
  res.send("Send automated email");
});

export default router;
