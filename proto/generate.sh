#! /bin/bash

PLUGIN_TS=./node_modules/.bin/protoc-gen-ts

PLUGIN_GRPC=../frontend/node_modules/.bin/grpc_tools_node_protoc_plugin

DIST_DIR_JS=../frontend/src/scripts/api
DIST_DIR_TS=../frontend/src/scripts/api
DIST_DIR_PY=../backend/app/api

protoc \
--ts_out=import_style=commonjs,binary:"${DIST_DIR_TS}"/ \
--python_out="${DIST_DIR_PY}"/ \
--plugin=protoc-gen-ts="${PLUGIN_TS}" \
-I ./ \
./questions.proto

# protoc \
# --js_out=import_style=commonjs,binary:"${DIST_DIR_JS}"/ \
# --ts_out=import_style=commonjs,binary:"${DIST_DIR_TS}"/ \
# --python_out="${DIST_DIR_PY}"/ \
# --grpc_out="${DIST_DIR}"/ \
# --plugin=protoc-gen-grpc="${PLUGIN_GRPC}" \
# --plugin=protoc-gen-ts="${PLUGIN_TS}" \
# -I ./ \
# ./questions.proto