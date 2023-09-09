# GrpcTodos
GRPC todos app, dotnet server &amp; dotnet client &amp; react client

---react client-----------
npx create-react-app grpc-todos
cd grpc-todos
npm install --save google-protobuf
npm install --save grpc-web
npm start

---install protoc---------
brew install protobuf
npm i -g protoc-gen-js
npm i -g protoc-gen-grpc-web


---generate api----------
-create protos folder inside react src folder(src/protos)
-copy *.proto files from backend to react folder(src/protos) folder

-execute protocol to generate grpc api files
protoc -I=. protos/*.proto --js_out=import_style=commonjs,binary:src --grpc-web_out=import_style=typescript,mode=grpcwebtext:src

-disable eslint each file manually or create build script
add to end of files
/* eslint-disable */


---run envoy proxy--------
Edit envoy config file(backend and fronted ports)
docker-compose up -d
