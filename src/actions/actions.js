export const showAbout = () => {
  return {
    type: "SHOW_ABOUT",
    payload: { display: 'about' }
  }
}

export const showInterest = () => {
  return {
    type: "SHOW_INTEREST",
    payload: { display: 'core' }
  }
}

export const showFast = () => {
  return {
    type: "SHOW_FAST",
    payload: { display: 'fast' }
  }
}