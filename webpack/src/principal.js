import Pessoa from './pessoa' //padrão módulo do ecmascript
import './modulos/moduloA' //quando o webpack le, tem que ter import explícito

const atendente = new Pessoa
console.log(atendente.cumprimentar())