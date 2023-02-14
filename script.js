function Converter(){
    let cotacaoDolar = 5.06;
    let cotacaoEuro = 5.52;
    let cotacaoBitcoin = 116933.35;
    let cotacaoEthereum = 8011.61;
    

    let valorDesejado = document.getElementById('valorDesejado').value;


    let valorConvertidoDolar = valorDesejado * cotacaoDolar;
    let valorConvertidoEuro = valorDesejado * cotacaoEuro;
    let valorConvertidoBitcoin = valorDesejado * cotacaoBitcoin;
    let valorConvertidoEthereum = valorDesejado * cotacaoEthereum;


    
    document.getElementById('dolar').innerHTML = (`Valor convertido para o Dolar: $ ${valorConvertidoDolar.toFixed(2)}`);

    document.getElementById('euro').innerHTML = (`Valor convertido para o Euro: € ${valorConvertidoEuro.toFixed(2)}`);

    document.getElementById('bitcoin').innerHTML = (`Valor convertido para o Bitcoin: ₿ ${valorConvertidoBitcoin.toFixed(2)}`);

    document.getElementById('ethereum').innerHTML = (`Valor convertido para o Ehtereum: Ξ ${valorConvertidoEthereum.toFixed(2)}`);
    
}