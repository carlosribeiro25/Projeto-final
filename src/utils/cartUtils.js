// src/utils/cartUtils.js

export function generateSessionId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
