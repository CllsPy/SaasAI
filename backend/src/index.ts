import app from "./app.js";
import { connectToDataBase } from "./db/connection.js";

const PORT = process.env.PORT
// contections and listeners

connectToDataBase().then(() => {
  app.listen(PORT, () => {
  console.log(`Open and Connected to DB`);
})
}).catch(err=>console.log(err))

