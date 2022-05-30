export default function handleError(error) {
  return { success: false, errorMessage: error.message };
}
