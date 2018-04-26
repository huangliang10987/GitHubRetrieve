# GitHubRetrieve
Using the latest Angular and Bootstrap and the GitHub API to retrieve the most starred public Angular projects.

#Development Steps
Download nvm and use nvm to install node, npm, and angular cli
ng new github-retrieve
cd github-retrieve
npm install --save  @ng-bootstrap/ng-bootstrap 
npm install --save @angular-devkit/core@0.0.29
ng generate component project-list
ng generate component project-details
ng generate service retrieve-project
ng serve