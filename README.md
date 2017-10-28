## Foo

An opinionated git cli for OSS.

### How to install

```js
npm install -g foo | yarn add foo
```

* **push** push your local branch to GH, regardless of remote.
* **delete** delete local branches
* **remote** add a new remote
* **new** create a new branch
* **update** update a branch
* **squash** squash local commits


### Checkout

```js
foo checkout
foo co
```

1. w/ PR ID
2. w/ a URL
3. @username/branch



```bash
foo co 4381
foo co #4381
foo co https://github.com/devtools-html/debugger.html/pull/4381
foo co @Fischer-L/4369-incorrect-line-out-of-scope
foo co @Fischer-L:4369-incorrect-line-out-of-scope
```
