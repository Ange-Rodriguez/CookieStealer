<div align="center">

# CookieStealer

![Learn goal](https://img.shields.io/badge/Learn-XSS%20(Cross%20Site%20Scripting)-blueviolet) ![Minimum PHP Version](https://img.shields.io/badge/PHP--version-%3E%3Dv7.4-blue) ![](https://img.shields.io/npm/v/concurrently) ![Status](https://img.shields.io/badge/Status-Work%20in%20progress-yellow)

This repository is just an example how to grab cookies through xss for educational purposes.
</div>

## Disclamer
I'm not responsible for your actions. The code provided here is for educational purpose only. If you find a web site with code injection vulnerability, inform them.

## How to run
Simply, you must have to enter the following commands:
```
# To install dependencies
npm install

# To run the servers
npm run server
```
Two servers will be runned :
- **Victim server** (on port 8000)
- **Attacker server** (on port 3000)

The cookies of all users who are on the **victim server** will be redirected on the **attacker server**. This XSS script have the particularity to not send the cookies everytime but only when cookies are updated. That's protect the attacker server of a storage overflow.
