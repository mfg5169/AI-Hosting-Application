import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import 'dotenv/config'; // Automatically loads .env files
import * as schema from './schema'


console.log(process.env)
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL!);

export const db = drizzle(sql, {schema});
