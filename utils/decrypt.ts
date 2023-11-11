import Cryptr from "cryptr";

const cryptr = new Cryptr("secret");

export function decryptText(secret: string) {
  return cryptr.decrypt(secret);
}