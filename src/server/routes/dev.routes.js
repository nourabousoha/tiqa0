import { Router } from 'express';
import * as DevController from '../controllers/dev.controller';
const router = new Router();

// Get all Devs
router.route('/devs').get(DevController.getDevs);

// Get one post by devid
router.route('/devs/:devid').get(DevController.getDev);

// Add a new Dev
//router.route('/devs').post(DevController.addDev);
// register a new dev
router.route('/devs').post(DevController.register);
// Delete a dev by devid
router.route('/devs/:devid').delete(DevController.deleteDev);

export default router;
