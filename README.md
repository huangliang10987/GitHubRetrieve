# GitHubRetrieve
Using the latest Angular and Bootstrap and the GitHub API to retrieve the most starred public Angular projects.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
nodejs
npm
angular
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
npm install
ng serve --port 3000
```
End with an example of getting some data out of the system or using it for a little demo


## Development Steps

### Initial

```
Download nvm and use nvm to install node, npm, and angular cli
ng new github-retrieve
cd github-retrieve
npm install --save @angular-devkit/core@0.0.29
npm install primeng font-awesome --save
npm install --save hoek@latest #Fix the hoek security issue
ng generate component project-list
ng generate component project-details
ng generate service retrieve-project
Change styles in angular-cli.json .
ng serve
```
### Coding
```
Code on retrieve-project service, implement retrieve data from github with criterias (name,page,private,per page)
Code on app component/module, import primeNG modules and implement routing for two components: list and details.
Code on project-list component, read data from service and display it in primeNG table with filter and pagenation.
Code on project-details component, read data from service and display it in primeNG card.
Add links to project-list.
Debug the app and enhance the CSS.
```

## Project Architecture 

### Entry Point

```
app.module.ts
app.component.ts
app-routing.ts
```

### Components

```
GitHub Retrieve Service: retrieve-project.service.ts Fetch angular project with GitHub API v3
Project List: project-list/project-list.component.ts Read data by the service and display in a primeNG list with filter and pagination. Click on each record to visit project details.
Project Details: project-details/project-details.component.ts Read data by the service and display the details in a primeNG card.
```

## Running the tests

N/A

### Break down into end to end tests

```
N/A
```

### And coding style tests

N/A

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Angular](https://angular.io/) - The web framework used
* [PrimeNG](https://www.primefaces.org/primeng/) - The collection of rich UI components used
* [NPM](https://www.npmjs.com/) - Package Manager

## Contributing

N/A

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/). 

## Authors

* **Liang Huang** - *Initial work* - [Liang Huang](https://github.com/huangliang10987)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* TBC
