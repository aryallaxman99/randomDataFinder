import { Router } from "express";
import multer from "multer";
import finderController from '../controllers/finderController.js'
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

router.post("/send", upload.single("image"), finderController.sendRecords);
router.get("/search", finderController.getRecords);
router.put("/update", finderController.updateRecords);
router.delete("/delete/:id", finderController.deleteRecords);
export default router;
