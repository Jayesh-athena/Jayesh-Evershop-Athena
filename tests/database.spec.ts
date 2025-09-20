import { test, expect } from "@playwright/test";
import{ Client} from "pg";
import dotenv from "dotenv"
 
dotenv.config();
test("database testing",async()=>{
 
const client=new Client({
 
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSLMODE === "disable"? false:true,
})
 
await client.connect();
 
const result= await client.query(`SELECT  name
  FROM public.product_description;`);
 
const count= await client.query(`SELECT COUNT(*) FROM public.product_description;`);
 
console.log("product count:",count.rows[0].count);
 
const productname= result.rows.map(row=>row.name);
 
console.log(productname);
 
});