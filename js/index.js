import { Router } from "./router.js";

const router = new Router(); //instancia da classe router, com essa instancia eu consigo acessar os atributos e os metodos dentro da classe
router.add("/", "/pages/explore.html");
router.add("/universo", "/pages/universo.html"); //"pathname(nome no navegador", caminho onde esta o arquivo
router.add("/exploracao", "/pages/exploracao.html");

router.carregaPagina();

window.onpopstate = () => router.carregaPagina();
window.route = () => router.trocaPathnameDaUrl();
