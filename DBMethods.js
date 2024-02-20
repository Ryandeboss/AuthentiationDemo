class DB {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  static async AddUser(client, userName, password) {
    try {
      const db = client.db("Auth");
      const collection = db.collection("user");

      // Create a new days object
      const newUser = new DB(userName, password);

      // Insert the newDay object into the database
      const result = await collection.insertOne(newUser);

      console.log("New user added:", result.insertedId);
      return result.insertedId; // Return the newly inserted document's _id
    } catch (err) {
      console.error("Error adding a new user:", err);
      throw err;
    }
  }
}

module.exports = DB;
