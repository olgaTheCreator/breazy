const positionToDuration = (position, height) => {
  return Math.floor((1 - position / height) * 29);
};
const durationToPosition = (duration, height) => {
  return Math.round((duration / 29) * height);
};
export { positionToDuration, durationToPosition };
