## For the first time

1. Pull the latest version of the repository

```bash
git pull
```

2. Install docker
3. Install pnpm

```bash
npm install -g pnpm
```

4. Remove the `node_modules` directory

```bash
rm -rf node_modules
```

5. Remove package-lock.json

```bash
rm package-lock.json
```

6. Run the following command to spin up the docker containers defined in the `docker-compose.yml` file

```bash
pnpm docker:up #(see package.json for the command definition)
```

7. Install dependencies

```bash
pnpm install
```

8. Run the following command to sync the schema defined in the `prisma/schema.prisma` file with the database

```bash
pnpm db:push #(see package.json for the command definition)
```

## Schema changes

1. Run the following command to generate the prisma client

```bash
pnpm generate #(see package.json for the command definition)
```

2. Run the following command to sync the schema defined in the `prisma/schema.prisma` file with the database

```bash
pnpm db:push #(see package.json for the command definition)
```
