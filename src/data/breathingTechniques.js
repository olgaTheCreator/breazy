export const breathingTechniques = [
  {
    name: "water",
    inhaleExhale: [
      { duration: 4, step: "inhale" },
      { duration: 0, step: "hold" },
      { duration: 6, step: "exhale" },
      { duration: 0, step: "hold" },
    ],
    shortDescription:
      "longer exhale breathing is specifically used to calm down",
    id: 1,
  },
  {
    name: "moon",
    inhaleExhale: [
      { duration: 4, step: "inhale" },
      { duration: 7, step: "hold" },
      { duration: 8, step: "exhale" },
      { duration: 0, step: "hold" },
    ],
    shortDescription: "helps falling asleep in a shorter period of time",
    id: 2,
  },
  {
    name: "wind",
    inhaleExhale: [
      { duration: 4, step: "inhale" },
      { duration: 4, step: "hold" },
      { duration: 4, step: "exhale" },
      { duration: 4, step: "hold" },
    ],
    shortDescription: "square breathing heighens performance and concentration",
    id: 3,
  },
  {
    name: "flame",
    inhaleExhale: [
      { duration: 1, step: "inhale" },
      { duration: 0, step: "hold" },
      { duration: 1, step: "exhale" },
      { duration: 0, step: "hold" },
    ],
    shortDescription:
      '"breath of fire" improves energy levels through vigorous inhales and exhales',
    id: 4,
  },
];
