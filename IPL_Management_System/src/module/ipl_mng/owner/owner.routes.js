import { Router } from "express";
import * as Controller from "./owner.controller.js";

const router = Router();

//1. Create new owner

router.post("/", Controller.createOwner);


//2. Get all owners

router.get("/");


//3. get owner by id

router.get("/:id");


//4. update owner

router.put("/");


//5. delete owner

router.delete("/");