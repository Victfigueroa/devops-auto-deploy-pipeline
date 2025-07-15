const getWelcomeMessage = require('./app.js');

test('debería retornar el mensaje de bienvenida correcto', () => {
  expect(getWelcomeMessage()).toBe('¡Este sitio fue validado, fusionado y desplegado automáticamente!');
});

test('Autor del proyecto debe ser Víctor Figueroa', () => {
  const autor = 'Víctor Figueroa';
  expect(autor).toMatch(/Víctor Figueroa/);
});
