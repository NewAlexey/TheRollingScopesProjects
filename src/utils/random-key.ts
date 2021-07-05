export default function getID(): string {
  return `_${Math.random().toString(36).substr(2, 9)}`;
}
