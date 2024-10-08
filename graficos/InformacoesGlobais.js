const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizaDadosGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    const total_pessoas_mundo = (dados.total_pessoas_mundo)/1e9;
    const total_pessoas_conctadas = (dados.total_pessoas_conectadas)/1e9;
    const tempo_medio = dados.tempo_medio;
    console.log(dados);

    const paragrafo = document.createElement ('p');
    paragrafo.classList.add('graficos-texto');
    const container = document.getElementById('graficos-container')
    paragrafo.innerHTML = `No mundo tem <span> ${total_pessoas_mundo} bilhões </span> de habitantes, dos quais <span> ${total_pessoas_conctadas} bilhões </span> estão conectados em alguma rede social por um tempo médio de <span> ${tempo_medio} horas </span>.`
    container.appendChild(paragrafo);

}

vizualizaDadosGlobais();