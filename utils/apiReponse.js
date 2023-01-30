export function apiResponse({ data, error, status }) {
  const response = {
    data,
    error,
    status,
  };

  return response;
}
