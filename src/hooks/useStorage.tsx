export const useStorage = () => {
  return {
    set: (name: string, value: string) => localStorage.setItem(name, value),
    get: (name: string) => localStorage.getItem(name),
  };
};
