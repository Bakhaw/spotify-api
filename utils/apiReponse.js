export function apiResponse({ error, items, status }) {
  const response = {
    error,
    items,
    status,
  };

  return response;
}
