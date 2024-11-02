async function getFormData(request) {
  return Object.fromEntries((await request.formData()).entries());
}

export default getFormData;
