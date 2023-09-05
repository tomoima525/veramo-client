import { getAgent } from "./setup.js";

async function main() {
  const agent = await getAgent();
  const result = await agent.verifyCredential({
    credential: {
      credentialSubject: {
        you: "Rock",
        id: "did:ethr:goerli:0x69D49390a5748454F28611EbC90D0f5a2d679556",
      },
      issuer: {
        id: "did:ethr:goerli:0x0299ddfc7cf8a13fb501f74558716f29b58c2b0a51defa1d76e4ff6cccdd7343f9",
      },
      type: ["VerifiableCredential"],
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://veramo.io/contexts/profile/v1",
      ],
      issuanceDate: "2023-09-05T16:12:43.000Z",
      proof: {
        type: "JwtProof2020",
        jwt: "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vdmVyYW1vLmlvL2NvbnRleHRzL3Byb2ZpbGUvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJ5b3UiOiJSb2NrIn19LCJzdWIiOiJkaWQ6ZXRocjpnb2VybGk6MHg2OUQ0OTM5MGE1NzQ4NDU0RjI4NjExRWJDOTBEMGY1YTJkNjc5NTU2IiwibmJmIjoxNjkzOTMwMzYzLCJpc3MiOiJkaWQ6ZXRocjpnb2VybGk6MHgwMjk5ZGRmYzdjZjhhMTNmYjUwMWY3NDU1ODcxNmYyOWI1OGMyYjBhNTFkZWZhMWQ3NmU0ZmY2Y2NjZGQ3MzQzZjkifQ.sCuCL8Gw-EYslbICWi-TUihccPXxgs1J7fXKZfrJflMDBRm5Dx_YxqEeVoJrubxhLxmLlWsgQlduY6Lz8CMSYg",
      },
    },
  });
  console.log(`Credential verified`, result);
}

main().catch(console.log);
