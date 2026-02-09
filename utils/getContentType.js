export function getContentType(ext) {

  const types = {
    ".js": "text/javascript",
    ".css": "text/css",
    "json": "text/json",
    ".png": "text/png",
    ".jpg": "text/jpeg",
    ".jpeg": "text/jpeg",
    ".gif": "text/gif",
    ".svg": "text/svg+xml"
  }
  return types[ext.toLowerCase()] || "text/html"
}