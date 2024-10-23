export default function Mensagem() {
  const msgRapida = () => {
    console.log("Bom dia!");
    // assicrona, de execução imediata
  };

  const teste = () => {
    setTimeout(() => {
      console.log(
        "Essa mensagem irá aparecer após 7 segundos!, sou o setTimeout"
      );
    }, 7000);

    // O setTimeout é usado para executar uma função uma única vez após um intervalo de tempo especificado. Ele recebe dois parâmetros:
    //A função que você quer executar.
    //O tempo (em milissegundos);
  };

  const repetindoMsg = () => {
    const intervalo = setInterval(() => {
      console.log(
        "Eu sou o setInterval e essa mensagem será exibida a cada 3 segundos!"
      );
    }, 3000);
    //O setInterval é usado para executar uma função repetidamente em um intervalo de tempo especificado, até que seja interrompido. Ele também recebe dois parâmetros:
    //A função que você quer executar.
    //O intervalo de tempo (em milissegundos) entre cada execução.

    setTimeout(() => {
      //O clearInterval é usado para parar a execução
      clearInterval(intervalo);
      console.log("parando o setInterval");
    }, 9000);
  };
  return (
    <section>
      <h1>Vamos aprender sobre:</h1>
      <button onClick={msgRapida}>Mensagem assicrona</button>
      <button onClick={teste}>mensagem com setTimeout</button>
      <button onClick={repetindoMsg}>
        Mensagem repetida com o setInterval
      </button>
    </section>
  );
}
