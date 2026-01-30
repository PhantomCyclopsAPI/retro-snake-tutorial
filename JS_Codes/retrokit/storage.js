const NAMESPACE = 'retroIndex';

export function save(key, value) {
  try {
    localStorage.setItem(`${NAMESPACE}:${key}`, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function load(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(`${NAMESPACE}:${key}`);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function remove(key) {
  localStorage.removeItem(`${NAMESPACE}:${key}`);
}
