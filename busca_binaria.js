function pesquisa_binaria(lista, item) {
    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio <= fim) {
        // Encontrar o meio do array
        let meio = Math.floor((inicio + fim) / 2);
        if (lista[meio] == item) {
            return meio; // Elemento encontrado, retornar o indice;
        } else if (lista[meio] < item) {
            // Se o item for maior, descartar a metade da esquerda
            inicio = meio + 1;
        } else {
            // Se o item for menor, descartar a metade da direita
            fim = meio - 1;
        }
    }
    return -1; // Retorna -1 se o elemento não for encontrado
}

const minha_lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const item = 9;

const resultado = pesquisa_binaria(minha_lista, item);
console.log(resultado + 1);
