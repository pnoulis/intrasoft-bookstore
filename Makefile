#!/usr/bin/make

SHELL:=/usr/bin/bash
.DEFAULT_GOAL:=all
.DELETE_OR_ERROR:
.EXPORT_ALL_VARIABLES:
.SECONDEXPANSION:
.ONESHELL:

##################################################
# App dirs
##################################################
srcdir_top=.
srcdir_top_abs=$(realpath .)
srcdir=$(srcdir_top)/src
srcdir_abs=$(srcdir_top_abs)/src

##################################################
# Tools
##################################################
# node
node:=$(NVM_DIR)/versions/node/v21.0.0/bin/node
# vite
vite=$(srcdir_top)/node_modules/.bin/vite

##################################################
# IO
##################################################
out_client_log=$(srcdir_top)/client.log

all: build

dev:
	$(vite) serve --force &> >(tee $(out_client_log))

run: file?=tmp/scratch.js
run: $(file)
	@if [[ "$${file:-}" == "" ]]; then
	echo "Usage: 'make run file [args]'"
	exit 1
	fi
	extension="$${file##*.}"
	case $$extension in
	sh)
	$(SHELL) $(file) $(args)
	;;
	js | mjs)
	$(node) $(file) $(args)
	;;
	*)
	echo "Unrecognized extension: $$extension"
	echo "Failed to 'make $@ $^'"
	;;
	esac

.DEFAULT:
	@if [ ! -f "$<" ]; then
	echo "Missing file $${file:-}"
	exit 1
	fi

.PHONY: build # Build application
.PHONY: dev # Develop application
.PHONY: run # Executes files based on extension
