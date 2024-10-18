# Steps to follow

1. Navigate to `sample-lib` folder
2. Install deps using `yarn install`
3. Use `yarn build` and `yalc publish` to publish the package
4. Navigate to `nextjs-project` folder
5. Use `yalc add sample-lib` in `nextjs-project` to make the published package available
6. Install deps using `yarn install`
7. Start the environment using `yarn dev`
8. Navigate to http://localhost:3000/example_with_lib to see the error
9. Navigate to http://localhost:3000/example_without_lib to see it working
10. Use `export ANALYZE=true` and restart the dev server so you can inspect webpack bundles
