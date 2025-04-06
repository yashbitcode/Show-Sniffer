import { Client, Databases, Query } from "appwrite";
import conf from "../conf/conf";

class DatabaseService {
    client = new Client();
    database;

    constructor() {
        this.client.setEndpoint("https://cloud.appwrite.io/v1").setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client);
    }

    async createBookmark(userId, id, bm) {
        try {
            const result = await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
                {UserId: userId, AllBM: bm},
            );

            return result;
        }
        catch(e) {
            return null;
        }
    }

    async getAllBookmarks(userId) {
        try {
            const result = await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("UserId", userId)
                ]
            );

            const baseBM = {};
            const peopleBM = {};

            result.documents.forEach(({AllBM}) => {
                const {id, info} = JSON.parse(AllBM);

                if(info.media_type !== "person") baseBM[id] = info;
                else peopleBM[id] = info;
            });

            return [baseBM, peopleBM];
        }
        catch(e) {
            return null;
        }
    }

    async deleteBookmark(docId) {
        try {
            const result = await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                docId
            );

            return result;
        }
        catch(e) { 
            return null;
        }
    }
};

const databaseSer = new DatabaseService();
export default databaseSer;