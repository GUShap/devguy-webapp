// plugins/eventBus.ts
import { defineNuxtPlugin } from '#app';
import mitt from 'mitt';

type Events = {
  updateAboutSectionTop: number;
};

export default defineNuxtPlugin(() => {
  const emitter = mitt<Events>();
  return {
    provide: {
      eventBus: emitter,
    },
  };
});
