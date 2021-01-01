vendor := vendor/autoload.php

## Install all dependencies (PHP and JS)
.PHONY: install
install:
	npm i

## Starts the dev server
.PHONY: server
server:
	npm run server