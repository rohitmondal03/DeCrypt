import Cryptr from "cryptr";

const cryptr = new Cryptr("secret");

export function decryptText(secret: string | undefined) {
  return secret ? cryptr.decrypt(secret) : null;
}