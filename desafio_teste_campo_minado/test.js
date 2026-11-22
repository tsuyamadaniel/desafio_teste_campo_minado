const test = require('node:test');
const assert = require('node:assert/strict');

const {
    criarTabuleiro,
    contarBombas,
    revelar
} = require('./index');

const bombas = Array.from({ length: 40 }, (_, indice) => [
    Math.floor(indice / 14),
    indice % 14
]);

test('Tabuleiro padrão e 40 bombas', () => {
    const tabuleiro = criarTabuleiro(18, 14, bombas);

    assert.equal(tabuleiro.rows, 18);
    assert.equal(tabuleiro.cols, 14);
    assert.equal(tabuleiro.bombas.length, 40);
});

test('Rejeita dimensões, quantidade incorreta, duplicadas e coordenadas fora', () => {
    assert.throws(() => criarTabuleiro(10, 10, bombas));
    assert.throws(() => criarTabuleiro(18, 14, bombas.slice(0, 39)));
    assert.throws(() => criarTabuleiro(18, 14, [...bombas.slice(0, 39), bombas[0]]));
    assert.throws(() => criarTabuleiro(18, 14, [...bombas.slice(0, 39), [18, 0]]));
});

test('Conta vizinhos e bordas', () => {
    const tabuleiro = {
        rows: 18,
        cols: 14,
        bombas: [[0, 0], [0, 1], [1, 0]]
    };

    assert.equal(contarBombas(tabuleiro, 1, 1), 3);
    assert.equal(contarBombas(tabuleiro, 0, 0), 2);
});

test('Revelar sinaliza bomba ou número', () => {
    const tabuleiro = {
        rows: 18,
        cols: 14,
        bombas: [[0, 0]]
    };

    assert.equal(revelar(tabuleiro, 0, 0), 'BOMBA');
    assert.equal(revelar(tabuleiro, 1, 1), 1);
});

test('Coordenada inválida é rejeitada', () => {
    const tabuleiro = {
        rows: 18,
        cols: 14,
        bombas: []
    };

    assert.throws(() => contarBombas(tabuleiro, -1, 0));
});
