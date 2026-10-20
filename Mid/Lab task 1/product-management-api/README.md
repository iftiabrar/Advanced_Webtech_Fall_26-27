# Product Management API – Lab Task 1

## Student Details
| SL | Name | Student ID | Section |
|----|------|-----------|---------|
| 2 | Abrar Faiaz Siddiquy | 23-51842-2 | E |

## Database Setup
1. Install PostgreSQL and create a database: `CREATE DATABASE product_management;`
2. Copy `.env.example` to `.env` and set `DB_PASSWORD` (and other DB values) for your machine.
3. Run migrations: `pnpm run migration:run`

## Installation & Run
```bash
pnpm install
pnpm run migration:run
pnpm start:dev
```
Server runs at `http://localhost:5000`

## Endpoints
### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| PATCH | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

### Employees
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get employee by ID |
| PATCH | /employees/:id | Update employee |
| DELETE | /employees/:id | Delete employee |
