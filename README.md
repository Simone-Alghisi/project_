# projectSe2group06

![Deploy & Tests](https://github.com/Simone-Alghisi/projectSe2group06/workflows/Deploy/badge.svg)

## Get started with projectSe2group06

Clone the repository on your machine

```bash=
git clone https://github.com/Simone-Alghisi/projectSe2group06.git
```

Move inside the `projectSe2group06` folder

```bash=
cd projectSe2group06
```

Install npm dependencies and transpile the TypeScript code

```bash=
npm install
```

Create the `.env` containing the environment variables defined in the `.env.sample` file.

An example of the file is the following

```bash=
PORT=8080
MONGODB_URI=mongodb://[username:password@]127.0.0.1:27017/db
MONGODB_TEST_URI=mongodb://[test_username:test_password@]127.0.0.1:27017/db_test
JWT_SECRET=<jwt access token secret>
JWT_REFRESH_SECRET=<jwt refresh token secret>
```

## Run the application

Run the following command inside the `projectSe2group06` folder

```bash=
npm run start
```

## Test

Tests are implemented using [Mocha](https://mochajs.org/) test framework.

Notice that, at the moment, tests will affect the database specified by the `MONGODB_URI` contained in the `.env` file

They can be run using the following command

```bash=
npm run test
```

## Typedoc

If you have not done it yet, install npm dependecies

```bash=
npm install
```

Generate the documentation

```bash=
npm run typedoc
```

The documentation will be available in the `doc` folder generated by Typedoc.

## Project structure

```
projectSe2group06
├── lib
│   ├── app.ts
│   ├── common
│   │   ├── interfaces
│   │   │   ├── configureRoutes.interface.ts
│   │   │   ├── crudController.interface.ts
│   │   │   └── crudService.interface.ts
│   │   ├── middlewares
│   │   │   └── common.middleware.ts
│   │   ├── models
│   │   │   └── common.model.ts
│   │   ├── routes
│   │   │   └── common.routes.ts
│   │   └── services
│   │       └── mongoose.service.ts
│   ├── controllers
│   │   ├── class.controller.ts
│   │   ├── communication.controller.ts
│   │   ├── grade.controller.ts
│   │   ├── login.controller.ts
│   │   ├── user.controller.ts
│   │   └── yourself.controller.ts
│   ├── middlewares
│   │   ├── class.middleware.ts
│   │   ├── communication.middleware.ts
│   │   ├── grade.middleware.ts
│   │   ├── jwt.middleware.ts
│   │   ├── login.middleware.ts
│   │   └── user.middleware.ts
│   ├── models
│   │   ├── class.model.ts
│   │   └── user.model.ts
│   ├── routes
│   │   ├── class.route.ts
│   │   ├── communication.route.ts
│   │   ├── grade.route.ts
│   │   ├── login.route.ts
│   │   ├── user.route.ts
│   │   └── yourself.route.ts
│   └── services
│       ├── class.service.ts
│       ├── communication.service.ts
│       ├── grade.service.ts
│       ├── user.service.ts
│       └── yourself.service.ts
├── oas3.yaml
├── package-lock.json
├── package.json
├── Procfile
├── public
│   ├── classes.html
│   ├── communications.html
│   ├── communicationsProfessor.html
│   ├── communicationsStudent.html
│   ├── css
│   │   └── style.css
│   ├── editClass.html
│   ├── editUser.html
│   ├── forbidden.html
│   ├── grades.html
│   ├── gradesStudent.html
│   ├── home.html
│   ├── homeProfessor.html
│   ├── homeStudent.html
│   ├── index.html
│   ├── insertClass.html
│   ├── insertCommunications.html
│   ├── insertGrades.html
│   ├── insertUser.html
│   ├── js
│   │   ├── classes.js
│   │   ├── common.js
│   │   ├── commonProfessor.js
│   │   ├── commonStudent.js
│   │   ├── communications.js
│   │   ├── communicationsProfessor.js
│   │   ├── communicationsStudent.js
│   │   ├── deleteClass.js
│   │   ├── deleteUser.js
│   │   ├── editClass.js
│   │   ├── editGrade.js
│   │   ├── editUser.js
│   │   ├── grades.js
│   │   ├── gradesStudent.js
│   │   ├── homeProfessor.js
│   │   ├── index.js
│   │   ├── insertClass.js
│   │   ├── insertCommunications.js
│   │   ├── insertGrades.js
│   │   ├── insertUser.js
│   │   ├── main.js
│   │   ├── plugins
│   │   │   └── datatables.js
│   │   ├── users.js
│   │   ├── viewCommunication.js
│   │   ├── viewCommunicationProfessor.js
│   │   └── viewCommunicationStudent.js
│   ├── serverError.html
│   ├── users.html
│   ├── viewCommunication.html
│   ├── viewCommunicationProfessor.html
│   └── viewCommunicationStudent.html
├── README.md
├── spec
│   ├── app.spec.ts
│   ├── common
│   │   └── routes
│   │       └── common.routes.spec.ts
│   ├── controllers
│   │   ├── class.controller.spec.ts
│   │   ├── communication.controller.spec.ts
│   │   ├── grade.controller.spec.ts
│   │   ├── login.controller.spec.ts
│   │   └── user.controller.spec.ts
│   ├── models
│   │   ├── class.model.spec.ts
│   │   └── user.model.spec.ts
│   ├── routes
│   │   ├── communication.route.spec.ts
│   │   ├── grade.route.spec.ts
│   │   ├── login.route.spec.ts
│   │   └── user.route.spec.ts
│   └── spec_helper.ts
└── tsconfig.json
```

## Team 

|  Name    |  Surname   |     Github          | 
| :-----:  | :--------: | :-----------------: | 
| Emanuele | Beozzo     | `emanuelebeozzo`    | 
| Massimo  | Rizzoli    | `massimo-rizzoli`   | 
| Samuele  | Bortolotti | `samuelebortolotti` | 
| Simone   | Alghisi    | `Simone-Alghisi`    | 
