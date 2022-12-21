import { Router } from "express";
import multer from "multer";
import recordcontroller from "../controllers/finderController.js";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, "./images");
  },
  filename: (req, file, next) => {
    next(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

const recordController = new recordcontroller();

router.post("/send", upload.single("image"), recordController.sendRecords);
router.get("/search", recordController.getRecords);
router.put("/update", recordController.updateRecords);
router.delete("/delete/:id", recordController.deleteRecords);
export default router;
