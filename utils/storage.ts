export const storage = {
  getItem: (name: string, jsonify: boolean = false) => {
    const item = window.localStorage.getItem(name);
    if (jsonify && item !== null) {
      return JSON.parse(item);
    } else {
      return item;
    }
  },
  setItem: (name: string, val: any, jsonify: boolean = false) => {
    if (jsonify) {
      window.localStorage.setItem(name, JSON.stringify(val));
    } else {
      window.localStorage.setItem(name, val);
    }
  },
  removeItem: (name: string) => window.localStorage.removeItem(name),
};
