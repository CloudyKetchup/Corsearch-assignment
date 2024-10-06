export const register = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => console.log('Service Worker registered successfully with scope:', registration.scope))
        .catch(error => console.error('Service Worker registration failed:', error));
    });
  }
}

export const unregister = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => registration.unregister())
      .catch(error => console.error('Error during service worker unregistration:', error));
  }
}
