import { Router } from "express";
import * as Controller from "./owner.controller.js";

const router = Router();

//1. Create new owner

router.post("/", Controller.createOwner);


//2. Get all owners

router.get("/", Controller.getAllOwners);


//3. get owner by id

router.get("/:id", Controller.getOwnerById);


//4. update owner

router.put("/", Controller.updateOwner);


//5. delete owner

router.delete("/", Controller.deleteOwner);


export default router;