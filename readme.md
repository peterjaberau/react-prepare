# to add a package in the example project without letting other project impacted:

pnpm add <package-name> --filter examples/my-project
pnpm install --filter ui-builder-react

pnpm add tailwindcss @tailwindcss/typography autoprefixer postcss tailwindcss-animate ts-morph ts-to-zod typescript -D --filter ui-builder-react
