export interface IStorage {
  setItem(key: string, item: any);
  getItem(key: string);
  removeItem(key: string);
  clearAll();
}
