import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    connectionTimeoutMillis: 15_000,
    max: 25
});

export default pool;