const subscribers = new Set();
let animationFrame;
let ticking = false;

export const addAnimation = (callback) => {
  subscribers.add(callback);
  if (!ticking) {
    ticking = true;
    animationFrame = requestAnimationFrame(animate);
  }
};

export const removeAnimation = (callback) => {
  subscribers.delete(callback);
  if (subscribers.size === 0 && ticking) {
    cancelAnimationFrame(animationFrame);
    ticking = false;
  }
};

const animate = (time) => {
  subscribers.forEach((callback) => callback(time));
  if (ticking) {
    animationFrame = requestAnimationFrame(animate);
  }
};

export const stopAnimationLoop = () => {
  if (ticking) {
    cancelAnimationFrame(animationFrame);
    ticking = false;
  }
};
