## Foo

An opinionated git cli for OSS.

* **push** push your local branch to GH, regardless of remote.
* **delete** delete local branches
* **remote** add a new remote
* **new** create a new branch
* **update** update a branch
* **squash** squash local commits


### Checkout

1. w/ PR ID
2. w/ a URL
3. @username/branch

```
foo checkout
foo co
```

```bash
foo co 4381
foo co #4381
foo co https://github.com/devtools-html/debugger.html/pull/4381
foo co @Fischer-L/4369-incorrect-line-out-of-scope
foo co @Fischer-L:4369-incorrect-line-out-of-scope
```
