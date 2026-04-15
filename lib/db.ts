import { Pool } from 'pg';

let pool: Pool;

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("Please set DATABASE_URL in your .env.local file");
}

// In Next.js development, we want to prevent creating multiple connections due to HMR
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: dbUrl,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  if (!(global as any).pgPool) {
    (global as any).pgPool = new Pool({
      connectionString: dbUrl,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
  pool = (global as any).pgPool;
}

export default pool;
