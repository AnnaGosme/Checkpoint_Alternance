import db from "./src/db";
import Country from "./src/entity/Country";


async function seed(): Promise<void> {
    await db.initialize();
    //await db.getRepository(Country).delete({});

    await db.getRepository(Country).insert([
{
    name: "France",
    code: "FR",
    emoji: "🇫🇷"

}
])

    await db.destroy();
    console.log("done !");
}

seed().catch(console.error);