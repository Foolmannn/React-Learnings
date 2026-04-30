import conf from "../conf/config.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();

  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }
  // account creation 

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        // call another method :
        return this.login({email,password})
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  // login feature

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // getting current user 

  async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite getCurrentUser error",error);
        
    }
    return null;
  }

  // logout https://appwrite.io/docs/references/cloud/client-web/account

  async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite:: Logout error",error);
        
    }
  }
}

const authService = new AuthService();

export default authService;
