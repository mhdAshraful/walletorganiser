
# --- BACKEND SETUP (NestJS) ---

```bash
npx @nestjs/cli new backend --package-manager pnpm --strict
cd backend/
```
Install Core Fintech Dependencies
- @nestjs/config: For managing secure environment variables (API Keys)
- prisma & @prisma/client: Industry standard ORM for type-safe database access (The Ledger)
- class-validator: For strict data validation (crucial for financial inputs)
- helmet: Sets security HTTP headers

```bash
pnpm install @nestjs/config @prisma/client class-validator class-transformer helmet
```
Install Simulation/Utility Dependencies
- stripe: To simulate connecting to a payment processor
- bcrypt: For hashing passwords (never store plain text)
- uuid: For generating unique Transaction IDs (idempotency keys)

```bash
pnpm install stripe bcrypt uuid
npm install --save-dev prisma @types/bcrypt @types/uuid
```
## Initialize Prisma (Creates the Database folder)

```bash
npx prisma init
```
