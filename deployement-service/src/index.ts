import { createClient, commandOptions } from "redis";
const subscriber = createClient();

subscriber.connect(); //localhost :2463

async function main() {
  while (1) {
    const response = await subscriber.brPop(
      commandOptions({ isolated: true }),
      "build-queue",
      0
    );
    console.log("response", response);
  }
}
main();
