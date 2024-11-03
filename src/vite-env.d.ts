/// <reference types="vite/client" />
import 'vite';

declare module 'vite' {
  interface ServerOptions {
    configureServer?: (server: any) => void; // Adjust the type as necessary
  }
}