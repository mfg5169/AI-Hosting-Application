/**@type {import("drizzle-kit").Config} */

export default {
    schema: "./utils/schema.tsx",
    dialect:'postgresql',
    dbCredentials: {
        url: "postgresql://Gen-AI_owner:xBd2PhQ6yERu@ep-snowy-resonance-a5t2jt2t.us-east-2.aws.neon.tech/Gen-AI?sslmode=require",
    }
}