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
                conf.appwriteBookmarksCollectionId,
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
                conf.appwriteBookmarksCollectionId,
                [
                    Query.equal("UserId", userId)
                ]
            );

            const baseBM = {};
            const peopleBM = {};

            result.documents.forEach(({AllBM}) => {
                const {id, info, docId} = JSON.parse(AllBM);

                if(info.media_type !== "person") baseBM[id] = {info: info, docId: docId};
                else peopleBM[id] = {info: info, docId: docId};
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
                conf.appwriteBookmarksCollectionId,
                docId
            );

            return result;
        }
        catch(e) { 
            return null;
        }
    }

    async createSearch(userId, id, name, recomm, context) {
        try {
            const result = await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteAISearchesCollectionId,
                id,
                {
                    UserId: userId, 
                    Name: name, 
                    Recommendations: recomm, 
                    id: id, 
                    Context: context
                },
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