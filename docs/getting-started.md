<p><a target="_blank" href="https://app.eraser.io/workspace/E97D5ql3WDChtuukeEnJ" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

## For the first time
- Pull the latest version of the repository
```bash
git pull
```
- install docker
- Install `pnpm` 
```bash
npm install -g pnpm
```
- Remove the `node_modules`  directory
```bash
rm -rf node_modules
```
- Remove `package-lock.json` 
```bash
rm package-lock.json
```
- Run the following command to spin up the docker containers defined in the `docker-compose.yml`  file
```bash
pnpm docker:up #(see package.json for the command definition)
```
- Install dependencies
```bash
pnpm install
```
- Run the following command to sync the schema defined in the `prisma/schema.prisma`  file with the database
```bash
pnpm db:push #(see package.json for the command definition)
```
- Get the env
- Run the server using
```bash
pnpm dev
```


## Schema changes
1. Run the following command to generate the Prisma client
```bash
pnpm db:generate #(see package.json for the command definition)
```
1. Run the following command to sync the schema defined in the `prisma/schema.prisma`  file with the database
```bash
pnpm db:push #(see package.json for the command definition)
```



<!--- Eraser file: https://app.eraser.io/workspace/E97D5ql3WDChtuukeEnJ --->