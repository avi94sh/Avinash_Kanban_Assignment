// Simulate a backend API with latency and 20% failure
export const mockApiCall = () =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject() : resolve();
    }, 1200); // 1.2s delay for demo
  });
