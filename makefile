REPORTER = landing

test:
	@NODE_ENV=test ./node_modules/.bin/mocha --reporter $(REPORTER) 

test-debug:
	@NODE_ENV=test ./node_modules/.bin/mocha debug --reporter $(REPORTER) 	

test-w:
	@NODE_ENV=test ./node_modules/.bin/mocha \
    --reporter $(REPORTER) \
    --growl \
    --watch

.PHONY: test test-w