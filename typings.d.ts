import {Tuple, DefaultMantineColor} from '@mantine/core';

declare namespace NodeJS {
  interface Module {
    hot?: {
      accept(path?: string, callback?: () => void): void;
      dispose(callback: () => void): void;
    };
  }
}

declare interface ExtendableEvent extends Event {
  waitUntil(fn: Promise<any>): void;
}