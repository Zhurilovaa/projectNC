import { Inject, Injectable } from "@angular/core";


export abstract class AbstractStorage implements Storage {

  readonly length: number;

  abstract clear(): void;

  abstract getItem(key: string): string | null;

  abstract key(index: number): string | null;

  abstract removeItem(key: string): void;

  abstract setItem(key: string, value: string): void;
}

/**
 * Session Storage
 */
export abstract class SessionStorage extends AbstractStorage {}

