/**
 * @file server.ts serves as the entry point to the app
 */
import express, {Request, Response} from "express";
import mongoose from "mongoose"

/**
 * Connects to the Mongo Database with db connection details from Environment Variables
 */
const connectDatabase = (): void => {
    // Connecting to DB
    let dbUri: string = process.env.MONGODB_PREFIX + "://" + process.env.MONGODB_USER
        + ":" + process.env.MONGODB_PASSWORD + "@" + process.env.MONGODB_HOST;
    if (process.env.MONGODB_PORT) {
        dbUri = dbUri + process.env.MONGODB_PORT;
    }
    console.log("Inferred DB_URI: " + process.env.MONGODB_PREFIX + "://" + process.env.MONGODB_USER
        + ":*****@" + process.env.MONGODB_HOST);

    mongoose.connect(dbUri)
        .catch((err: object) => {
            console.log(err);
        });
    mongoose.connection.once("open", () => {
        console.log("MongoDB connection established successfully");
    });
}

/**
 * Starts the Server and listens on the specified PORT
 * @param port {string | number} - the port the server will listen on
 */
const startServer = (port: string | number): void => {
    connectDatabase()
    const app = express();

    app.get("/up", (req: Request, res: Response) =>
        res.send("Server is Up!"));

    app.listen(port);
    console.info("Listening @ PORT ", port);
}

/**
 * Defines the Port number to be used by the server
 */
const PORT = 4000;

/**
 * Instructs the server to check for the 'PORT' environment variable, and to use
 * that if available. (Used by Heroku and Docker instances)
 */
startServer(process.env.PORT || PORT);
