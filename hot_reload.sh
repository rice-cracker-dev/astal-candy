#!/usr/bin/env bash

reload() {
	pkill -15 gjs
	bun run build && gjs -m dist/main.js &
}

reload

while inotifywait -e close_write -r . --exclude '(node_modules|dist)'; do
	reload
done
