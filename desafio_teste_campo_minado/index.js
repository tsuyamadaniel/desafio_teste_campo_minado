function criarTabuleiro(rows = 18, cols = 14, bombas = []) {
    if (rows !== 18 || cols !== 14) {
        throw new Error('Tabuleiro deve ser 18 x 14');
    }

    if (bombas.length !== 40) {
        throw new Error('Deve haver 40 bombas');
    }

    const chaves = bombas.map(([linha, coluna]) => `${linha},${coluna}`);

    if (new Set(chaves).size !== 40) {
        throw new Error('Bombas duplicadas');
    }

    if (bombas.some(([linha, coluna]) =>
        linha < 0 || linha >= rows || coluna < 0 || coluna >= cols
    )) {
        throw new Error('Bomba fora do tabuleiro');
    }

    return { rows, cols, bombas };
}

function vizinhos(linha, coluna) {
    const resultado = [];

    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr !== 0 || dc !== 0) {
                resultado.push([linha + dr, coluna + dc]);
            }
        }
    }

    return resultado;
}

function contarBombas(tabuleiro, linha, coluna) {
    if (
        linha < 0 || linha >= tabuleiro.rows ||
        coluna < 0 || coluna >= tabuleiro.cols
    ) {
        throw new Error('Coordenada inválida');
    }

    return vizinhos(linha, coluna).filter(([r, c]) =>
        tabuleiro.bombas.some(([br, bc]) => br === r && bc === c)
    ).length;
}

function revelar(tabuleiro, linha, coluna) {
    if (tabuleiro.bombas.some(([r, c]) => r === linha && c === coluna)) {
        return 'BOMBA';
    }

    return contarBombas(tabuleiro, linha, coluna);
}

module.exports = {
    criarTabuleiro,
    contarBombas,
    revelar
};
