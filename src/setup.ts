import { createAgent, IDIDManager } from "@veramo/core";
import { AgentRestClient } from "@veramo/remote-client";
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY as string;
const AGENT_OPEN_API = process.env.AGENT_OPEN_API as string;

export async function getAgent() {
  const response = await fetch(AGENT_OPEN_API);
  const openApiSchema = await response.json();
  console.log("api url", openApiSchema.servers[0].url);
  return createAgent<IDIDManager>({
    plugins: [
      new AgentRestClient({
        url: openApiSchema.servers[0].url as string,
        schema: openApiSchema,
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        enabledMethods: Object.keys(openApiSchema["x-methods"]),
      }),
    ],
  });
}
