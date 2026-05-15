import conf from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

// https://appwrite.io/docs/references/cloud/server-nodejs/databases#updateDocument

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredimage, status, userid }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
          userid,
        },
      );
    } catch (error) {
      console.log("Appwrite service:: createPost :: Error ", error);
    }
  }
  async updatePost(slug, { title, content, featuredimage, status }) {
    try {
      return (
        await this.databases.
        updateDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          slug,
          {
            title,
            content,
            featuredimage,
            status,
          },
        )
      );
    } catch (error) {
      console.log("Appwrite service:: updatePost :: Error ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
      return true;
    } catch (error) {
      console.log("Appwrite service:: DeletePost :: Error ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      console.log("Appwrite service:: getPost :: Error ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log("Appwrite service:: getPosts :: Error ", error);
    }
  }

  // File upload services
  //https://appwrite.io/docs/references/cloud/client-web/storage#createFile

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log("Appwrite service:: filupload :: Error ", error);
    }
  }

  //delete files

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service:: deleteFile :: Error ", error);
      return false;
    }
  }


  // File preview

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
  }
  // 1. Try this first: getFileView (No transformations) as in free preview doesnot work . 
getFileView(fileId) {
    return this.bucket.getFileView(
        conf.appwriteBucketId,
        fileId
    );
}


}

const service = new Service();
export default service;
