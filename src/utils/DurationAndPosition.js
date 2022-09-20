const positionToDuration = (position, height) => {
  return Math.floor((1 - position / height) * 30);
};
const durationToPosition = (duration, height) => {
  return Math.floor((1 - duration / 30) * height);
};
export { positionToDuration, durationToPosition };
