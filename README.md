# Node Calculator

A Node.js calculator module (add, subtract, multiply, divide, modulus) with Jest unit tests and a Jenkins pipeline. Built as a CI/CD exercise.

## Functions

`calculator.js` exports `add`, `subtract`, `multiply`, `divide`, and `modulus`. `divide` throws `Cannot divide by zero` when the divisor is 0.

## Getting Started

```bash
npm install
npm test
```

## Jenkins Pipeline

The `Jenkinsfile` defines a parameterised pipeline (`BRANCH_NAME`, `BUILD_ENV`, `STUDENT_NAME`) with these stages:

1. Install Dependencies
2. Build
3. Unit Test (runs only when `BUILD_ENV` is `dev`)
4. Deploy (simulated)

It needs a Jenkins agent on Windows (the steps use `bat`) and a NodeJS tool named `NodeJS`.

## Tech Stack

Node.js, Jest, Jenkins
