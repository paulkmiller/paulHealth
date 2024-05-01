# Paul Health / Corporate Site

## Features

- Fetch data from the Contentful GraphQL API
- Create dynamic routes
- Utilize the Svelte component lifecycle
- Handle contact form submissions and create entries in Contentful

# Getting Started

```bash
npm install
npm run dev
```

If you need to setup a new Contentful environment:
```bash
npm run setup
```

# Building
```bash
npm run build
```

Preview the production build with `npm run preview`. 

# Migrating Environments in Contentful
In order to run migration commands, you will need the Contentful CLI. This will give you access to two commands in particular: `contentful space export` and `contentful space import`. You must first export the data from a given Environment before it is imported into another. The data is exported into a json file which you then must import to a target environment.

### Step 1. Prerequisites

Ensure you have the latest Node.js release.

### Step 2. Installation
```bash
npm install -g contentful-cli
```

### Step 3. Authentication
After installing the CLI, the user needs to authenticate with Contentful. This is done by logging in using a Contentful management API token. Ours can be found in .env.
```bash
contentful login --management-token YOUR_CONTENT_MANAGEMENT_TOKEN
```

### Example Export

```bash
contentful space export --space-id 'qhzqj9nbcut3' --environment-id 'master' --management-token 'CFPAT-ryhsB5kmms2HjNY-hIkMyRo2Yv1YsjoMxA-mPw95P-0'
```

### Example Import

```bash
contentful space import --space-id 'qhzqj9nbcut3' --environment-id 'dev' --management-token 'CFPAT-ryhsB5kmms2HjNY-hIkMyRo2Yv1YsjoMxA-mPw95P-0' --content-file 'path_to_your_exported_file'
```