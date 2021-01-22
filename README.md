# CRUD TRY


## **Introduction**

__*This was created during my time as a student at Code Chrysalis. Created in 1 day.*__ This repository uses Express and Typeorm/PostgresSQL for server and database. Providing CRUD API to GET/POST/PATCH/DELETE for a pre-set database schema. 

There are three tables(entities) prepared per below.

1. Family - Only has House Name of a Family
2. Parents - Only has Parent's Information with relation to Family Table (Many to One)
3. Child - Only has Children's Information with relation to Family and Parents Table (Many to One)

Please check the CRUD API features below, but before you can use the Quick Start Guide to prepare a database with set of data to play with.

## **Quick Start**

0. ```git clone``` - clone to local repository using the git clone command
1. ```yarn install``` -  install dependencies in package.json
2. check ".env" config file. perform changes if necessary
3. ```yarn migrate``` - prepared a migration file. The command will create Family/Parents/Child tables in database.
4. ```yarn seed``` - prepared a seed file. The command will insert set of data into Family/Parents/Child tables.
5. ```yarn dev``` - starts the connection with server and database


## **Documenting In Progress**
- Information on each Table's property and value (data types).
- Other commands details such as ```yarn rollback```, ```yarn makeMigrations```...

## **API Features**
- Starting Point "Greeting Message" will be Logged - http://localhost:3000/ 
```
GOOD JOB!!!
```

- Retrieve All House Name - GET/ http://localhost:3000/family
```
[
    {
        "id": "4810845c-ea09-40d2-8511-e6b30fd74a35",
        "familyName": "Obama"
    },
    {
        "id": "7a421ccd-0fe6-442f-ad16-62eb1b6916d2",
        "familyName": "Emperor"
    },
    {
        "id": "dfa33fca-6cb8-49eb-a0f1-d876f20f62b7",
        "familyName": "Beckham"
    }
]
```
- Retrieve All Parent's Information - GET/ http://localhost:3000/parents
```
[
    {
        "id": "fe09b016-6069-434b-82af-a07343433bb9",
        "firstName": "Barack",
        "lastName": "Obama",
        "age": 59,
        "dob": "1961-08-04T00:00:00.000Z"
    },
    {
        "id": "7d3eaff2-65d5-4742-a746-c07799963032",
        "firstName": "Naruhito",
        "lastName": "Emperor",
        "age": 60,
        "dob": "1960-02-23T00:00:00.000Z"
    }
]
```
- Retrieve All Children's Information - GET/ http://localhost:3000/child
```
[
    {
        "id": "f70fa879-fe8e-4856-8ae4-03542dc72d1c",
        "firstName": "Malia",
        "lastName": "Obama",
        "age": 22,
        "dob": "1998-07-04T00:00:00.000Z"
    },
    {
        "id": "0cdc8cc9-c604-4f63-a4be-f85a415f4aa2",
        "firstName": "Natasha",
        "lastName": "Obama",
        "age": 22,
        "dob": "2001-06-10T00:00:00.000Z"
    },
    {
        "id": "7e10296c-6798-4c85-baf2-bb28a30f160f",
        "firstName": "Aiko",
        "lastName": "Emperor",
        "age": 18,
        "dob": "2001-12-01T00:00:00.000Z"
    }
]
```
- Retrieve All Family Member Information by House Name - GET/ http://localhost:3000/family/:familyName
```
Sample - GET/ http://localhost:3000/family/Beckham
```
```
Sample Reponse

[
    {
        "id": "cab533d1-4dcb-4dee-9cdf-b2633500c43a",
        "firstName": "David",
        "lastName": "Beckham",
        "age": 45,
        "dob": "1975-05-02T00:00:00.000Z"
    },
    {
        "id": "5715f795-ba67-4189-a8ae-5b54a96a4552",
        "firstName": "Brooklyn",
        "lastName": "Beckham",
        "age": 21,
        "dob": "1999-03-04T00:00:00.000Z"
    },
    {
        "id": "9ea90785-8a44-4870-82ca-81189f4899a6",
        "firstName": "Romeo",
        "lastName": "Beckham",
        "age": 18,
        "dob": "2002-09-01T00:00:00.000Z"
    },
    {
        "id": "e3e2f66e-5774-4166-b6e7-f36e8784f970",
        "firstName": "Harper",
        "lastName": "Beckham",
        "age": 9,
        "dob": "2011-07-10T00:00:00.000Z"
    },
    {
        "id": "1ee8e37b-98af-4042-93ab-70f292435754",
        "firstName": "Cruz",
        "lastName": "Beckham",
        "age": 15,
        "dob": "2005-02-20T00:00:00.000Z"
    }
]
```

- Create a House Name - POST/ http://localhost:3000/family + Body Required

Sample Body
```
{
    "familyName": "Trump"
}
```
- Create a Parent's Information - POST/ http://localhost:3000/parents + Body Required

Sample Body - Must Fill Every Property and Value.
```
{
    "firstName": "Donald",
    "lastName": "Trump",
    "age": 74,
    "dob": "1946-06-14",
    "familyName": "Trump"
}
```
- Create a Child's Information - POST/ http://localhost:3000/child + Body Required

Sample Body - Must Fill Every Property and Value.
```
{
    "firstName": "Ivanka",
    "lastName": "Trump",
    "age": 39,
    "dob": "1981-10-30",
    "familyName": "Trump",
    "parents": {
        "firstName": "Donald",
        "lastName": "Trump"
    }
}
```
- Update a Parent's Information - PATCH/ http://localhost:3000/parents + Query + Body Required

Query Template - Input Matching firstName and lastName of the Updating Parent
```
http://localhost:3000/parents?firtName=<value>&lastName=<value>
```
Sample Body - Existing Properties can be Updated. Non-Existing Property cannot be Updated.
```
{
    "dob": "1946-06-14"
}
```
- Update a Child's Information - PATCH/ http://localhost:3000/child + Query + Body Required

    - Same Format as Updating the Parent' Information Except to be Careful of Change the Endpoint.

- Remove Whole Family - DELETE/ http://localhost:3000/family/:familyName + Body Required

Sample Endpoint
```
http://localhost:3000/family/Trump
```
Response  -  When Successfully Processed
```
A Family Has Been Removed!!
```

## **Reference**
- Using "Typeorm" package for Database connection/communication.
- Using "Express" package for Server connection/handling requests.
