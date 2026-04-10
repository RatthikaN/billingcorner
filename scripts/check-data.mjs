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
  console.log("Checking records in 'checkout_leads' table...");
  
  try {
    console.log("--- Latest Checkout Leads ---");
    const checkoutRes = await pool.query("SELECT id, name, email, plan_name, total, created_at FROM checkout_leads ORDER BY created_at DESC LIMIT 5;");
    if (checkoutRes.rows.length === 0) {
      console.log("No checkout leads found.");
    } else {
      console.table(checkoutRes.rows);
    }

    console.log("\n--- Latest Dealer Applications ---");
    const dealerRes = await pool.query("SELECT id, name, email, phone, location, created_at FROM dealer_applications ORDER BY created_at DESC LIMIT 5;");
    if (dealerRes.rows.length === 0) {
      console.log("No dealer applications found.");
    } else {
      console.table(dealerRes.rows);
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  } finally {
    await pool.end();
  }
}

main();
