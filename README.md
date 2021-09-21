# Marmalade.ai Company Website

This repository holds the source code for Marmalade AI, Inc.'s company website. It is built with [Gatsby](https://www.gatsbyjs.com/), a website generator. We use [Tailwind CSS](https://tailwindcss.com/) for styling.

## Company Website

https://marmalade.ai

## Installation

- Clone repository.
- `npm install`
- `npm install -g gatsby-cli` (version 3.9.0 or newer)
- `npm run develop` to start the developer version of the site, which rebuilds automatically when you save changes to the source code.
- View site at http://localhost:8000/ when the development server is running.

### `vscode` set-up

We use several extensions to [vscode](https://code.visualstudio.com/Download) in our development environment for enforcing format conventions and for checking for common coding errors:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Code Formatter.
- [PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) Language Support.

## Development Workflow

- Whenever [package.json](./package.json) changes, you need to re-install packages:
  ```bash
  npm install
  ```
  to get the full set of dependencies.
- To run one of the `scripts` defined in [package.json](./package.json) from the command line:
  ```bash
  npm run [script_name]
  ```
  For example, to run the linter, letting it fix errors automatically:
  ```bash
  npm run lint:fix
  ```
- **Never** _push_ to `origin/master`. You should only _pull_ from `origin/master`.
- **Always** work on a branch and push _that_ branch to `origin` for merging to `master` branch on GitHub through a Pull Request. You should follow that process even if no one but you will review that Pull Request.
- On GitHub, only the person who created a Pull Request should `Merge` that Pull Request, because that person knows best when the Pull Request is complete and ready to be merged.

## License

Copyright &#169; 2021 [Marmalade.ai](https://marmalade.ai)

This source code is licensed under the [MIT License](./LICENSE). See the [LICENSE](./LICENSE) file for more details.
