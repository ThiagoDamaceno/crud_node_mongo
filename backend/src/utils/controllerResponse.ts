function controllerResponse (response: any | Error) {
  if (response instanceof Error) {
    return {
      error: response.message
    }
  }

  return {
    data: response
  }
}

export { controllerResponse }
