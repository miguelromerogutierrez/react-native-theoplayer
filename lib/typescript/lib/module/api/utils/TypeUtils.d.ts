/// <reference types="node" />
export function fromObjectToString(obj: any): string;
export function fromObjectToBase64String(obj: any): string;
export function fromObjectToUint8Array(obj: any): Buffer;
export function fromStringToBase64String(str: any): string;
export function fromStringToUint8Array(str: any): Buffer;
export function fromStringToObject(str: any): any;
export function fromBase64StringToUint8Array(str: any): Buffer;
export function fromUint8ArrayToBase64String(array: any): string;
export function fromUint8ArrayToString(array: any): string;
export function fromUint8ArrayToObject(array: any): any;
import { Buffer } from "buffer";
