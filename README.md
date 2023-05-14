# everscale-block-explorer

### Tech Stack Used

1. NextJs
2. Typescript
3. Tailwindcss
4. GraphQL with Apollo client
5. Typescript Codegen
6. Shadcn UI taiwlind components


### Instruction to setup and launch the project

Step 1: clone the repo <br />

```bash
    git clone https://github.com/Aamirusmani1552/everscale-block-explorer
```
    
Step 2: Switch to `block-explorer` directory

```bash
    cd block-explorer
```

Step 3: Install the dependencies:

```bash
  npm install
```

Step 4: Create `.env.local` file and add the following environment variables

```JavaScript
    NEXT_PUBLIC_EVERCLOUD_MAINNET_URL=https://mainnet.evercloud.dev/<Your project Id>/graphql
    NEXT_PUBLIC_EVERCLOUD_DEVNET_URL=https://devnet.evercloud.dev/<Your Project Id>/graphql

```
Note: Don't forget to add `Project Id` from evercloud dashboard in the URLs. Visit evercloud.dev and go to dashboard. Now create an account there and by creating new project switch to the security tab. You will find `Project Id` and other related details there.

Step 5 Start the project. Type the command below:

```bash
  npm run dev
```

Note: If getting type undefined error, run the following command: 

```bash
  npm run codegen
```
and again run the commad in `step 4`
