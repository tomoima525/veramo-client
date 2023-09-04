import { getAgent } from "./setup.js";

async function main() {
  const agent = await getAgent();
  // const identifier = await agent.didManagerGet({
  //   did: "did:web:veramo-alb-1100286602.us-west-2.elb.amazonaws.com",
  // });
  const identifier = await agent.didManagerGetByAlias({
    alias: "default",
    provider: "did:ethr:goerli",
  });

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://veramo.io/contexts/profile/v1",
      ],
      type: ["VerifiableCredential"],
      issuer: { id: identifier.did },
      issuanceDate: new Date().toISOString(),
      credentialSubject: {
        id: "did:ethr:goerli:0x69D49390a5748454F28611EbC90D0f5a2d679556",
        you: "Rock",
      },
    },
    proofFormat: "jwt",
  });
  console.log(`New credential created`);
  console.log(JSON.stringify(verifiableCredential, null, 2));
}
main().catch(console.error);

/**
 * Expected output:
{
  "credentialSubject": {
    "you": "Rock",
    "id": "did:web:testId"
  },
  "issuer": {
    "id": "did:web:veramo-alb-1100286602.us-west-2.elb.amazonaws.com"
  },
  "type": [
    "VerifiableCredential"
  ],
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://veramo.io/contexts/prifile/v1"
  ],
  "issuanceDate": "2023-09-03T05:05:03.000Z",
  "proof": {
    "type": "JwtProof2020",
    "jwt": "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vdmVyYW1vLmlvL2NvbnRleHRzL3ByaWZpbGUvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJ5b3UiOiJSb2NrIn19LCJzdWIiOiJkaWQ6d2ViOnRlc3RJZCIsIm5iZiI6MTY5MzcxNzUwMywiaXNzIjoiZGlkOndlYjp2ZXJhbW8tYWxiLTExMDAyODY2MDIudXMtd2VzdC0yLmVsYi5hbWF6b25hd3MuY29tIn0.h0grIWYs2XWMM6vjU9Qvi49pr-g7kepDEdtjTqrWY3LsywUXHitDEitZNPfBXm0E_9Q4LJMcEoe9qDspEMcCBA"
  }
}
 */
