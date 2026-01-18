export const HISTORY = [];

export function logRelease(entry) {
  HISTORY.push({ time: Date.now(), entry });
}
