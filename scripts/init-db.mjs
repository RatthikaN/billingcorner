import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local from the root directory
dotenv.config({ path: path.join(__dirname, '../.env.local') });

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  console.log("Connecting to Database using URL:", process.env.DATABASE_URL?.replace(/:([^:@]+)@/, ':***@'));
  console.log("Initializing database schema...");
  
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS checkout_leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        plan_id VARCHAR(50) NOT NULL,
        plan_name VARCHAR(100) NOT NULL,
        base_price INT NOT NULL,
        discount INT NOT NULL,
        subtotal INT NOT NULL,
        gst INT NOT NULL,
        total INT NOT NULL,
        promo_code VARCHAR(50) DEFAULT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await pool.query(query);
    console.log("Successfully ensured 'checkout_leads' table exists!");

    const dealerQuery = `
      CREATE TABLE IF NOT EXISTS dealer_applications (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        location VARCHAR(255) NOT NULL,
        experience TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await pool.query(dealerQuery);
    console.log("Successfully ensured 'dealer_applications' table exists!");
  } catch (err) {
    console.error("Failed to initialize database:", err);
  } finally {
    await pool.end();
  }
}

main();
