test('imprime Hola, Mundo', () => {
    console.log = jest.fn();
    require('./app');
    expect(console.log).toHaveBeenCalledWith('Hola, Mundo');
  });
  