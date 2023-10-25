import { API } from "./config/index.js";
import { connect, close } from "./src/lib/db.js";
import server from "./src/server.js";

process.on("SIGINT", async () => {
  await close();
});

const startApi = async () => {
  try {
    await connect();
    server.listen(API.PORT, () => {
      console.log(`Server running on port: ${API.PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

startApi();
