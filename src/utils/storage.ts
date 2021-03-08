export function setLocalStorage(key: string, value: any): void {
  const str = window.JSON.stringify(value);
  window.localStorage.setItem(key, str);
}

export function getLocalStorage(key: string): any {
  let json: string | null;
  json = window.localStorage.getItem(key);
  if (json) json = window.JSON.parse(json);

  return json;
}
