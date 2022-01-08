CLEAN_LIST += package-lock.json
CLEAN_LIST += node_modules
CLEAN_LIST += dist
.phony: all init build run clean
all: init build
init: package-lock.json
package-lock.json: package.json
	npm install
build: init
	tsc
run: build
	npm run main
clean:
	@$(foreach item,$(CLEAN_LIST),echo "rm -rf $(item)";rm -rf $(item);)
