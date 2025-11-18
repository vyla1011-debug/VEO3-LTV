// src/presets.js

export const characters = {
  luma: {
    name: "Luma",
    description: `
12-year-old tribal girl; tan skin; long black hair in two braids; white paint stripes on cheeks and arms; green leaf crop-top; short grass skirt; barefoot; calm, gentle and rarely smiles.
`.trim()
  },

  capybara: {
    name: "Capybara",
    description: `
Small white capybara with fluffy fur, cute and curious. Moves slowly with innocent reactions.
`.trim()
  },

  chiLan: {
    name: "Chi Lan",
    description: `
Vietnamese countryside woman wearing simple daily clothes. Lives in an old thatch house with paper-flower gate and mango tree.
`.trim()
  },

  miDen: {
    name: "Mi Đen",
    description: `
Chubby girl with messy pink hair, black teeth, awkward expression. Wears loose cartoon T-shirt and oversized shorts.
`.trim()
  },

  tuanRung: {
    name: "Tuấn Rụng",
    description: `
Chubby 6th-grade boy with only bottom teeth. Funny gummy smile, uneven haircut, tight school uniform.
`.trim()
  }
};

export const scenePresets = {
  lanHouse: `
Old thatch house with paper-flower gate, wide yard, mango tree, wooden bed and water jar.
`.trim(),

  jungle: `
Dense tropical jungle with fog and morning sun.
`.trim(),

  schoolYard: `
Vietnamese schoolyard with trees, concrete ground and bicycles.
`.trim()
};

export const voicePresets = {
  chiLan_mientay: `
Vietnamese Southern female voice, friendly tone.
`.trim(),

  narrator_soft: `
Calm English narrator voice, warm tone.
`.trim(),

  miDenVoice: `
Vietnamese girl voice, lazy childish tone.
`.trim(),

  tuanRungVoice: `
Vietnamese boy voice with lisp due to missing upper teeth.
`.trim()
};
