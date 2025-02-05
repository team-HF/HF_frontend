import { createContext } from 'react';
import { SocketProps } from './socket.interface';

export const SocketContext = createContext<SocketProps | null>(null);
