const sum = require('./sum')

test('soma de dois valores', ()=>{
    const resultado = sum(2, 5)
    expect(resultado).toBe(7)
})