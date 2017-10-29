## Foo

An opinionated git cli for OSS.

### How to install

```js
npm install -g foo | yarn global add foo
```

### Checkout

Gets a remote branch. This will add a remote origin if it does not exist, fetches it and checkouts the specified PR branch.

```bash
foo checkout <id|url|branch>
foo co <id|url|branch>
```
- `id` - The pull request id e.g `4381` or `#4381`
- `url` - The pull request url e.g `https://github.com/devtools-html/debugger.html/pull/4381`
- `branch` - The username and branch e.g `@[user]/[branch]` or `@[user]:[branch]`

## Todo
* **push** push your local branch to GH, regardless of remote.
* **delete** delete local branches
* **remote** add a new remote
* **new** create a new branch
* **update** update a branch
* **squash** squash local commits
