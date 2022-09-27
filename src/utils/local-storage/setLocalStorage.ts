export default function setLocalStorage<T>(key: string, value: T) {
  localStorage.setItem(`${key}`, JSON.stringify(value));
}
