OUT=src
PROTO_API=protos/todos.proto

protoc -I=src $PROTO_API --js_out=import_style=commonjs,binary:$OUT --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT

GENERATED_FILES=src/protos/*
for f in $GENERATED_FILES
do
  echo "Processing $f file..."
  # take action on each file. $f store current file name
  cat $f > "${f}_temp"
  echo "/* eslint-disable */" > $f
  cat "${f}_temp" >> $f
  rm "${f}_temp"
done

#protoc -I=. protos/todos.proto --js_out=import_style=commonjs,binary:src --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT
