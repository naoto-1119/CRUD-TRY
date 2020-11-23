import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import Family from "../entities/FamilyModel";
import Child from "../entities/ChildModel";
import Parents from "../entities/ParentsModel";

const familySeed = [
  {
    id: "c7b882fb-27e3-43e4-a809-430d72e21db2",
    familyName: "Maeda",
  },
  {
    id: "4810845c-ea09-40d2-8511-e6b30fd74a35",
    familyName: "Obama",
  },
  {
    id: "7a421ccd-0fe6-442f-ad16-62eb1b6916d2",
    familyName: "Emperor",
  },
  {
    id: "6810f76d-b6bc-4151-bd59-f7ddbe899177",
    familyName: "Akishinonomiya",
  },
  {
    id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
    familyName: "Beckham",
  },
];

const parentsSeed = [
  {
    id: "ffadc55b-ab0e-42ff-9214-7fe5eab600d8",
    firstName: "Naoto",
    lastName: "Maeda",
    age: 29,
    dob: "1991-11-19",
    family: {
      id: "c7b882fb-27e3-43e4-a809-430d72e21db2",
      familyName: "Maeda",
    },
  },
  {
    id: "fe09b016-6069-434b-82af-a07343433bb9",
    firstName: "Barack",
    lastName: "Obama",
    age: 59,
    dob: "1961-08-04",
    family: {
      id: "4810845c-ea09-40d2-8511-e6b30fd74a35",
      familyName: "Obama",
    },
  },
  {
    id: "7d3eaff2-65d5-4742-a746-c07799963032",
    firstName: "Naruhito",
    lastName: "Emperor",
    age: 60,
    dob: "1960-02-23",
    family: {
      id: "7a421ccd-0fe6-442f-ad16-62eb1b6916d2",
      familyName: "Emperor",
    },
  },
  {
    id: "66d95669-a465-4c2e-8b51-365034549278",
    firstName: "Fumihito",
    lastName: "Akishinonomiya",
    age: 54,
    dob: "1965-11-30",
    family: {
      id: "6810f76d-b6bc-4151-bd59-f7ddbe899177",
      familyName: "Akishinonomiya",
    },
  },
  {
    id: "cab533d1-4dcb-4dee-9cdf-b2633500c43a",
    firstName: "David",
    lastName: "Beckham",
    age: 45,
    dob: "1975-05-02",
    family: {
      id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
      familyName: "Beckham",
    },
  },
];

const childSeed = [
  {
    firstName: "Ena",
    lastName: "Maeda",
    age: 1,
    dob: "2019-09-17",
    parents: {
      id: "ffadc55b-ab0e-42ff-9214-7fe5eab600d8",
      firstName: "Naoto",
      lastName: "Maeda",
      age: 29,
      dob: "1991-11-19",
      family: {
        id: "c7b882fb-27e3-43e4-a809-430d72e21db2",
        familyName: "Maeda",
      },
    },
    family: {
      id: "c7b882fb-27e3-43e4-a809-430d72e21db2",
      familyName: "Maeda",
    },
  },
  {
    firstName: "Malia",
    lastName: "Obama",
    age: 22,
    dob: "1998-07-04",
    parents: {
      id: "fe09b016-6069-434b-82af-a07343433bb9",
      firstName: "Barack",
      lastName: "Obama",
      age: 59,
      dob: "1961-08-04",
      family: {
        id: "4810845c-ea09-40d2-8511-e6b30fd74a35",
        familyName: "Obama",
      },
    },
    family: {
      id: "4810845c-ea09-40d2-8511-e6b30fd74a35",
      familyName: "Obama",
    },
  },
  {
    firstName: "Natasha",
    lastName: "Obama",
    age: 22,
    dob: "2001-06-10",
    parents: {
      id: "fe09b016-6069-434b-82af-a07343433bb9",
      firstName: "Barack",
      lastName: "Obama",
      age: 59,
      dob: "1961-08-04",
      family: {
        id: "4810845c-ea09-40d2-8511-e6b30fd74a35",
        familyName: "Obama",
      },
    },
    family: {
      id: "4810845c-ea09-40d2-8511-e6b30fd74a35",
      familyName: "Obama",
    },
  },
  {
    firstName: "Aiko",
    lastName: "Emperor",
    age: 18,
    dob: "2001-12-01",
    parents: {
      id: "7d3eaff2-65d5-4742-a746-c07799963032",
      firstName: "Naruhito",
      lastName: "Emperor",
      age: 60,
      dob: "1960-02-23",
      family: {
        id: "7a421ccd-0fe6-442f-ad16-62eb1b6916d2",
        familyName: "Emperor",
      },
    },
    family: {
      id: "7a421ccd-0fe6-442f-ad16-62eb1b6916d2",
      familyName: "Emperor",
    },
  },
  {
    firstName: "Brooklyn",
    lastName: "Beckham",
    age: 21,
    dob: "1999-03-04",
    parents: {
      id: "cab533d1-4dcb-4dee-9cdf-b2633500c43a",
      firstName: "David",
      lastName: "Beckham",
      age: 45,
      dob: "1975-05-02",
      family: {
        id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
        familyName: "Beckham",
      },
    },
    family: {
      id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
      familyName: "Beckham",
    },
  },
  {
    firstName: "Romeo",
    lastName: "Beckham",
    age: 18,
    dob: "2002-09-01",
    parents: {
      id: "cab533d1-4dcb-4dee-9cdf-b2633500c43a",
      firstName: "David",
      lastName: "Beckham",
      age: 45,
      dob: "1975-05-02",
      family: {
        id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
        familyName: "Beckham",
      },
    },
    family: {
      id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
      familyName: "Beckham",
    },
  },
  {
    firstName: "Harper",
    lastName: "Beckham",
    age: 9,
    dob: "2011-07-10",
    parents: {
      id: "cab533d1-4dcb-4dee-9cdf-b2633500c43a",
      firstName: "David",
      lastName: "Beckham",
      age: 45,
      dob: "1975-05-02",
      family: {
        id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
        familyName: "Beckham",
      },
    },
    family: {
      id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
      familyName: "Beckham",
    },
  },
  {
    firstName: "Cruz",
    lastName: "Beckham",
    age: 15,
    dob: "2005-02-20",
    parents: {
      id: "cab533d1-4dcb-4dee-9cdf-b2633500c43a",
      firstName: "David",
      lastName: "Beckham",
      age: 45,
      dob: "1975-05-02",
      family: {
        id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
        familyName: "Beckham",
      },
    },
    family: {
      id: "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
      familyName: "Beckham",
    },
  },
];

export default class CreateBaseRows implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.createQueryBuilder().insert().into(Family).values(familySeed).execute();
    await connection.createQueryBuilder().insert().into(Parents).values(parentsSeed).execute();
    await connection.createQueryBuilder().insert().into(Child).values(childSeed).execute();
  }
}
