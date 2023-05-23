import "reflect-metadata";
import express from "express";
// @ts-ignore
import helmet from "helmet";
import * as http from "http";
import { ApolloServer } from "apollo-server";
import datasource from "./db";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolver/CountryResolver";



const start = async (): Promise<void> => {
  await datasource.initialize();
  const app = express();
  app.use(helmet({ contentSecurityPolicy: false }));
  // const httpServer = http.createServer(app);

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      // ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
    // context: ({ req, res }) => {
    //   return { req, res };
    // },
  });


  await server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });

  app.listen(5001, () => {
    console.log("listening on port 5001");
  });
};

void start();
