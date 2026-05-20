const subscribers = new Set();
let animationFrame;
let ticking = false;

const animate = (time) => {
  subscribers.forEach((callback) => callback(time));
  if (ticking) {
    animationFrame = requestAnimationFrame(animate);
  }
};

const startLoop = () => {
  if (!ticking && subscribers.size > 0 && !document.hidden) {
    ticking = true;
    animationFrame = requestAnimationFrame(animate);
  }
};

const stopLoop = () => {
  if (ticking) {
    cancelAnimationFrame(animationFrame);
    ticking = false;
  }
};

// Listen for tab visibility changes to pause rendering when hidden
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopLoop();
    } else {
      startLoop();
    }
  });
}

export const addAnimation = (callback) => {
  subscribers.add(callback);
  startLoop();
};

export const removeAnimation = (callback) => {
  subscribers.delete(callback);
  if (subscribers.size === 0) {
    stopLoop();
  }
};

export const stopAnimationLoop = stopLoop;
