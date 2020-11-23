import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Family from "./entities/FamilyModel";
import Child from "./entities/ChildModel";
import Parents from "./entities/ParentsModel";
import { getRepository } from "typeorm";

const setupServer = () => {

  // enable http request
  const app = express();

  // creating repo for each entity
  const familyRepo = getRepository(Family);
  const childRepo = getRepository(Child);
  const parentsRepo = getRepository(Parents);

  // MiddleWare
  app.use(bodyParser.json());
  app.use(cors());

  // Entry Point
  app.get("/", (req, res) => {
    return res.send("GOOD JOB!!!");
  });

  // Get All Information
  app.get("/family", async (req, res) => {
    try {
      const allFamily = await familyRepo.find();
      console.log("test", allFamily);
      if (allFamily.length === 0) {
        return res.send("Not Found!!!");
      }
      return res.status(200).send(allFamily);
    } catch (err) {
      console.log(err);
    }
  });

  app.get("/child", async (req, res) => {
    try {
      const allChild = await childRepo.find();
      if (allChild.length === 0) {
        return res.send("Not Found!!!");
      }
      return res.status(200).send(allChild);
    } catch (err) {
      console.log(err);
    }
  });

  app.get("/parents", async (req, res) => {
    try {
      const allParents = await parentsRepo.find();
      if (allParents.length === 0) {
        return res.send("Not Found!!!");
      }
      return res.status(200).send(allParents);
    } catch (err) {
      console.log(err);
    }
  });

  // Get Information By ...
  app.get("/family/:familyName", async (req, res) => {
    try {
      const { familyName } = req.params;
      const parents = await parentsRepo
        .createQueryBuilder("parents")
        .leftJoinAndSelect(Family, "family", "family.id = parents.family")
        .where("family.familyName = :familyName", { familyName: familyName })
        .getMany();
      const child = await childRepo
        .createQueryBuilder("child")
        .leftJoinAndSelect(Family, "family", "family.id = child.family")
        .where("family.familyName = :familyName", { familyName: familyName })
        .getMany();
      const allFamilyMember = parents.concat(child);
      if (allFamilyMember.length === 0) {
        res.send("Not Found!!!");
      }
      res.status(200).send(allFamilyMember);
    } catch (err) {
      console.log(err);
    }
  });

  // Post Family/Parents/Child

  app.post("/parents", async (req, res) => {
    try {
      const { firstName, lastName, age, dob, familyName } = req.body;
      const newParents = new Parents();
      newParents.firstName = firstName;
      newParents.lastName = lastName;
      newParents.age = age;
      newParents.dob = dob;
      newParents.family = await familyRepo.findOne({ familyName: familyName });
      parentsRepo.save(newParents);
      res.status(201).send(newParents);
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/child", async (req, res) => {
    try {
      const { firstName, lastName, age, dob, familyName, parents } = req.body;
      const newChild = new Child();
      newChild.firstName = firstName;
      newChild.lastName = lastName;
      newChild.age = age;
      newChild.dob = dob;
      newChild.family = await familyRepo.findOne({ familyName: familyName });
      newChild.parents = await parentsRepo.findOne({ firstName: parents.firstName, lastName: parents.lastName });
      childRepo.save(newChild);
      res.status(201).send(newChild);
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/family", async (req, res) => {
    try {
      const { familyName } = req.body;
      const newFamily = new Family();
      newFamily.familyName = familyName;
      familyRepo.save(newFamily);
      res.status(201).send(newFamily);
    } catch (err) {
      console.log(err);
    }
  });

  // Update parents|child information using query params and update method
  app.patch("/parents", async (req, res) => {
    try {
      const { firstName, lastName } = req.query;
      const updatingValue = req.body;
      const updatingId = (await parentsRepo.findOne({ firstName: firstName, lastName: lastName })).id;
      const performUpdate = await parentsRepo.update({ firstName: firstName, lastName: lastName }, updatingValue);
      console.log("Updated Row :", performUpdate.affected);
      const updatedParent = await parentsRepo.find({ id: updatingId });
      res.send(updatedParent);
    } catch (err) {
      console.log(err);
    }
  });

  app.patch("/child", async (req, res) => {
    try {
      const { firstName, lastName } = req.query;
      const updatingValue = req.body;
      const updatingId = (await childRepo.findOne({ firstName: firstName })).id;
      const performUpdate = await childRepo.update({ firstName: firstName, lastName: lastName }, updatingValue);
      console.log("Updated Row :", performUpdate.affected);
      const updatedChild = await childRepo.find({ id: updatingId });
      res.send(updatedChild);
    } catch (err) {
      console.log(err);
    }
  });

  // Delete Family/Parents/Child

  app.delete("/family/:familyName", async (req, res) => {
    try {
      const { familyName } = req.params;
      const deletedFamily = await familyRepo.delete({ familyName: familyName });
      console.log(deletedFamily.affected);
      res.send("A Family Has Been Removed!!");
    } catch (err) {
      console.log(err);
    }
  })

  return app;
};

export default setupServer;
