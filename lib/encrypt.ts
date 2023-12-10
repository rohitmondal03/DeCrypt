import Cryptr from "cryptr";

const cryptr = new Cryptr("secret");

export function encryptText(text: string) {
  return cryptr.encrypt(text);
}