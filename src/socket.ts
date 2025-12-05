import {
  ServerRelationType,
  BasicRelationWithTasksType,
  TaskType,
  ServerRelationWithTasksAndPermissionsType,
} from './relations';
import { GetRelationsResponseType, DeleteRelationParamsType } from './relationsApi';
import { UserType } from './users';
import { Server, Socket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';

// Socket data interface (attached to each socket connection)
export type SocketData = Pick<UserType, 'id' | 'email'>;

export type AckResponse<TData> =
  | {
      success: true;
      data: TData;
    }
  | {
      success: false;
      error: string;
    };

// Server to Client Events (what server emits to client)
export interface ServerToClientEvents {
  'relations:change_name': (payload: ServerRelationType) => void;
  'relations:delete': (payload: [boolean, string][]) => void;

  'relations:share': (payload: ServerRelationWithTasksAndPermissionsType[]) => void;

  'task:join': (payload: { data: ServerRelationWithTasksAndPermissionsType }) => void;
  'task:create': (payload: { data: TaskType }) => void;

  'task:edit': (payload: { edited_task: TaskType }) => void;
  'task:remove': (payload: { remove_tasks: TaskType[] }) => void;

  error: (data: { message: string }) => void;
}
export type ClientToServerRelatiosChangeName = { id: string; name: string };
export type ClientToServerRelatiosShare = {
  task_relations: BasicRelationWithTasksType | BasicRelationWithTasksType[];
  user_shared_with: string;
};

// Client to Server Events (what client emits to server)
export interface ClientToServerEvents {
  'relations:get_relations': (
    callback: (res: AckResponse<GetRelationsResponseType[]>) => void
  ) => void;

  'relations:change_name': (
    payload: ClientToServerRelatiosChangeName,
    callback: (res: AckResponse<GetRelationsResponseType>) => void
  ) => void;

  'relations:delete': (
    payload: DeleteRelationParamsType,
    callback: (res: AckResponse<[boolean, string][]>) => void
  ) => void;

  'relations:share': (
    payload: ClientToServerRelatiosShare,
    callback: (res: AckResponse<ServerRelationWithTasksAndPermissionsType[]>) => void
  ) => void;

  'task:join': (
    payload: {
      relation_id: string;
    },
    callback: (res: AckResponse<ServerRelationWithTasksAndPermissionsType>) => void
  ) => void;
  'task:create': (
    payload: {
      new_task: TaskType;
    },
    callback: (res: AckResponse<TaskType | TaskType[]>) => void
  ) => void;
  'task:edit': (
    payload: {
      edited_task: TaskType;
    },
    callback: (res: AckResponse<TaskType>) => void
  ) => void;
  'task:remove': (
    payload: {
      remove_tasks: TaskType[];
    },
    callback: (res: AckResponse<TaskType[]>) => void
  ) => void;
}

export interface InterServerEvents {
  ping: () => void;
}
export type ServerType = Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;
export type SocketType = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;
export type SocketClientType = ClientSocket<ServerToClientEvents, ClientToServerEvents>;
