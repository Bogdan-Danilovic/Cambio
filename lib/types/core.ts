export type RoomStatus =
  | 'lobby'
  | 'initial_peek'
  | 'playing'
  | 'last_round'
  | 'scoring'
  | 'finished';

export interface BasePlayer {
  id: string;
  name: string;
  isConnected: boolean;
  isHost?: boolean;
  isAI?: boolean;
}

export interface GameSettings {
  [key: string]: unknown;
}

export interface BaseRoom {
  code: string;
  status: RoomStatus;
  hostId: string;
  players: BasePlayer[];
  createdAt: number;
  expiresAt: number;
  settings: GameSettings;
}
