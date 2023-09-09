import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class IdModel extends jspb.Message {
  getId(): number;
  setId(value: number): IdModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdModel.AsObject;
  static toObject(includeInstance: boolean, msg: IdModel): IdModel.AsObject;
  static serializeBinaryToWriter(message: IdModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdModel;
  static deserializeBinaryFromReader(message: IdModel, reader: jspb.BinaryReader): IdModel;
}

export namespace IdModel {
  export type AsObject = {
    id: number,
  }
}

export class EmptyModel extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyModel.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyModel): EmptyModel.AsObject;
  static serializeBinaryToWriter(message: EmptyModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyModel;
  static deserializeBinaryFromReader(message: EmptyModel, reader: jspb.BinaryReader): EmptyModel;
}

export namespace EmptyModel {
  export type AsObject = {
  }
}

export class AddTodoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddTodoRequest;

  getPriority(): number;
  setPriority(value: number): AddTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTodoRequest): AddTodoRequest.AsObject;
  static serializeBinaryToWriter(message: AddTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTodoRequest;
  static deserializeBinaryFromReader(message: AddTodoRequest, reader: jspb.BinaryReader): AddTodoRequest;
}

export namespace AddTodoRequest {
  export type AsObject = {
    name: string,
    priority: number,
  }
}

export class UpdateTodoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateTodoRequest;

  getName(): string;
  setName(value: string): UpdateTodoRequest;

  getPriority(): number;
  setPriority(value: number): UpdateTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTodoRequest): UpdateTodoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTodoRequest;
  static deserializeBinaryFromReader(message: UpdateTodoRequest, reader: jspb.BinaryReader): UpdateTodoRequest;
}

export namespace UpdateTodoRequest {
  export type AsObject = {
    id: number,
    name: string,
    priority: number,
  }
}

export class TodosResponse extends jspb.Message {
  getTodosList(): Array<TodoModel>;
  setTodosList(value: Array<TodoModel>): TodosResponse;
  clearTodosList(): TodosResponse;
  addTodos(value?: TodoModel, index?: number): TodoModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodosResponse): TodosResponse.AsObject;
  static serializeBinaryToWriter(message: TodosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodosResponse;
  static deserializeBinaryFromReader(message: TodosResponse, reader: jspb.BinaryReader): TodosResponse;
}

export namespace TodosResponse {
  export type AsObject = {
    todosList: Array<TodoModel.AsObject>,
  }
}

export class TodoModel extends jspb.Message {
  getId(): number;
  setId(value: number): TodoModel;

  getName(): string;
  setName(value: string): TodoModel;

  getPriority(): number;
  setPriority(value: number): TodoModel;

  getStatus(): string;
  setStatus(value: string): TodoModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoModel.AsObject;
  static toObject(includeInstance: boolean, msg: TodoModel): TodoModel.AsObject;
  static serializeBinaryToWriter(message: TodoModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoModel;
  static deserializeBinaryFromReader(message: TodoModel, reader: jspb.BinaryReader): TodoModel;
}

export namespace TodoModel {
  export type AsObject = {
    id: number,
    name: string,
    priority: number,
    status: string,
  }
}

export class TodoDetailResponse extends jspb.Message {
  getId(): number;
  setId(value: number): TodoDetailResponse;

  getName(): string;
  setName(value: string): TodoDetailResponse;

  getPriority(): number;
  setPriority(value: number): TodoDetailResponse;

  getStatus(): string;
  setStatus(value: string): TodoDetailResponse;

  getCreatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedDate(value?: google_protobuf_timestamp_pb.Timestamp): TodoDetailResponse;
  hasCreatedDate(): boolean;
  clearCreatedDate(): TodoDetailResponse;

  getCreatedBy(): string;
  setCreatedBy(value: string): TodoDetailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoDetailResponse): TodoDetailResponse.AsObject;
  static serializeBinaryToWriter(message: TodoDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoDetailResponse;
  static deserializeBinaryFromReader(message: TodoDetailResponse, reader: jspb.BinaryReader): TodoDetailResponse;
}

export namespace TodoDetailResponse {
  export type AsObject = {
    id: number,
    name: string,
    priority: number,
    status: string,
    createdDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
  }
}

