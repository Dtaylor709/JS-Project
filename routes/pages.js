import express from 'express';
import {
    aboutpeopleController,
    acknowledgementspeopleController,
    contactpeopleController,
    privacypeopleController,
} from '../controllers/pages.js';

const router = express.Router();

router.get('/about', aboutpeopleController);
router.get('/acknowledgements', acknowledgementspeopleController);
router.get('/contact', contactpeopleController);
router.get('/privacy', privacypeopleController);

export default router;
