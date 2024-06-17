This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Build the only client app:

```bash
yarn build
```

Lint:

```bash
yarn lint
```

Typescript check:

```bash
yarn typecheck
```

Prettier:

```bash
yarn prettier
```

_Temporary deploy to SFTP GDSuite:_

```bash
yarn deploy
```

Test:

```bash
yarn test
```

Run all the checks before commit (it is also connted to the pre-commit script)

```bash
yarn ci
```

## Run the development app

Add these lines in you /etc/hosts:

```bash
sudo /etc/hosts
```

Insert `127.0.0.1 dev.youmeals.it`

`Open https://dev.youmeals.it:8081`

## Run the production app

```bash
yarn build
```

Open the `ymv2/` from a live server or copy to a static web server.

You can also temporary build and deploy to a 'test for production' folder in the gdsuite web server and open:

[https://www.gdsuite.it/ymv2/](https://www.gdsuite.it/ymv2/)
