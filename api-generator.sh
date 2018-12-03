#!/bin/sh

TMP_DIR=.TMP_$(date '+%Y%M%d%H%M%S')_$$
DOCKER_IMAGE=openapitools/openapi-generator-cli:latest

# Docker未インストール時、エラー
if type docker > /dev/null 2>&1; then :; else
  echo 'dockerコマンドが存在しません'
  exit 1
fi

# API定義ファイルを１つにマージ
(cd api && yarn && yarn build)

# ジェネレータ用Dockerイメージが存在しない場合、取得する
if [[ "$(docker images -q ${DOCKER_IMAGE} 2> /dev/null)" == "" ]]; then
  docker pull $DOCKER_IMAGE
fi

# APIクライアント生成
mkdir -p ${TMP_DIR}/client
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/api/api.yaml -g typescript-axios -o /local/${TMP_DIR}/client
if [ $? -ne 0 ]; then
  rm -rf ${TMP_DIR}
  exit 1
fi

rm -f app/src/api/*
cp ${TMP_DIR}/client/*.ts app/src/api
rm -rf ${TMP_DIR}/client

# APIサーバ生成
# TODO

# 後片付け
rm -rf ${TMP_DIR}
exit 0
