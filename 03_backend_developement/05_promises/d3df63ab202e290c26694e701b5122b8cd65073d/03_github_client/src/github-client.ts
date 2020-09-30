import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string |number |boolean |null;
}

export class GithubClient {
  static getReposUrl() : Promise<string[]> {
    return fetch ("/users/:username").then((Response) => Response.json());
  }

  static getRepos() : Promise<string[]> {
    return fetch ("https://api.github.com/users/octocat/followers").then((Response) => Response.json());
  }
 

  static printRepos() {
  }

  
  static printRepository() {
  }
  
  static getProjectInformations() {
  }
}
