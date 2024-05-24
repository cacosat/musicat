import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
                      
async function run() {
  try {
      // Connect to the Atlas cluster
        await client.connect();

        // Get the database and collection on which to run the operation
        const db = client.db("sample_mflix");
        const col = db.collection("users");

        // Create new documents                                                                                                                                         
        const userDocument = {
          // "_id":{"$oid":"59b99db4cfa9a34dcd7885b6"},
          "name":"test name 2",
          "email":"test2@test.com",
          "password":"test2_password"
        }

        // Insert the documents into the specified collection        
        const p = await col.insertOne(userDocument);

        // Find the document
        const filter = { "name": "test name" };
        const document = await col.findOne(filter);

        // Print results
        console.log("Document found:\n" + JSON.stringify(document));

      } catch (err) {
        console.log(err.stack);
    }

    finally {
      await client.close();
  }
}

run().catch(console.dir);

// const connectDB = async () => {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1); // Detiene el proceso si no se puede conectar a la base de datos
//   }
// };

// export default connectDB;
