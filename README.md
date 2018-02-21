<h1 align="center">Phraze</h1>

<p align="center">
A quick memorable pass phrase generator for HackCEWIT 2018.
</p>

## What is it?
Phraze is designed to be an easy way to generate pass phrases to be used in user credentials as opposed to passwords. The goal is to generate unique passphrases for all users that are easy to memorize but hard for machines to crack using various methods such as dictionary attacks and brute forcing. Phraze allows for different criteria to be set for generating different passphrases and will easily satisfy website password requirements.

## Built With
* :rocket: [Express](https://expressjs.com/) - a minimal Node.js web app framework.
* :heavy_check_mark: [Google OAuth 2.0](https://www.npmjs.com/package/passport-google-oauth2) - user authentication using passport.js for Google accounts.
* :cloud: [Cirrus](https://spiderpig86.github.io/Cirrus/) - a CSS framework for quickly prototyping apps.
* :key: [zxcvbn](https://github.com/dropbox/zxcvbn) - a low-budget password strength estimation.
* :ledger: [Mongoose](http://mongoosejs.com/) - an elegant mongodb object modeling framework for Node.js

## To-do:
* Encryption / Decryption
* Format average cracking time based on hours / days / years etc...
* Implement pages for user's generated pass phrases (limit 10 per page?)
* Implement limit on number of generated pass phrases (limit 50 - temporary?)
