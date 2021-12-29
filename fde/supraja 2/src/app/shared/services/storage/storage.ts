import { IStorage } from "./IStorage";
import { Observable, of } from "rxjs";

export abstract class Storage implements IStorage {
  constructor() {}
  setItem(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }
  getItem(key: string) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
    }
  }
  removeItem(key: string) {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    } else {
    }
  }
  clearAll() {
    localStorage.clear();
  }
}
