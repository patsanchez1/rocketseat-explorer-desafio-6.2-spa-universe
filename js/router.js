export class Router {
  routes = {};

  /* 
    routes = {
      "/": "/pages/explore.html",
      "/universo": "/pages/universo.html",
      "/exploracao": "/pages/explore.html"
    };
  */

  //"pathname(nome no navegador", caminho onde esta o arquivo
  //função responsável por fazer o De Para das rotas, adiciona o pathname dentro do atributo routes da classe mostrando o arquivo que tem que abrir
  add(pathName, page) {
    this.routes[pathName] = page;
  }

  carregaPagina() {
    //Pegar qual pathname estou
    const pathname = window.location.pathname; // /universo

    // Pega o caminho da pagina que vai ser carregado...
    // '/pages/universo.html'
    const pagePath = this.routes[pathname];

    // Carregando e atualizando na tela a página
    fetch(pagePath)
      .then((data) => data.text())
      .then((html) => {
        const bodyBackgroundId = pathname.replace("/", "");
        document.getElementById("root").innerHTML = html;
        document.querySelector("body").setAttribute("id", bodyBackgroundId);
      });
  }

  // trocar o pathname da url
  trocaPathnameDaUrl(event) {
    event = event || window.event;
    event.preventDefault(); //o padrão é redirecionar para a página quando eu clicar (neste caso estou falando para não redirecionar) desabilitou a mudança automática da página

    // Muda o pathname da url sem atualizar a página
    window.history.pushState({}, "", event.target.href);

    this.carregaPagina();
  }
}
