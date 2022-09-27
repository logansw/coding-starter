export default function getLocalStorage<T>(key: string): T | null {
  const value = localStorage.getItem(`${key}`);
  return value != null ? (JSON.parse(value) as T) : null;
}
