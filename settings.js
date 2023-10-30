var lang = 0;
var ver = "v1.0.0_b1"
//默认语言设置
check()
function check(){
  if (navigator.language == "pt-BR") {
  setzh()
  }
    else if (navigator.language != "pt-BR") {
  seten()
  }
}

function setzh() {
  zh.style.color = "#fff";
  zh.style.background = "#0c6c3c";
  zh.innerHTML = "Português (Brasil, trabalho)"
  en.style.color = "#000";
  en.style.background = "#f5f5f5";
  en.innerHTML = "Inglês (Estados Unidos)"
  resph="O resultado será exibido aqui"
  title.innerHTML = "Ferramenta de pseudolocalização"
  title1.innerHTML = "Ferramenta de pseudolocalização - Versão "+ver +""
  bkhome.style.display = "block";
  bkhome.innerHTML = "Voltar para a página principal"
  what.innerHTML = "O que é pseudolocalização?"
  uplog.innerHTML = "Atualizar registro"
  pjhome.innerHTML = "Repositório do GitHub"
  exever.innerHTML = "Versão Windows (x64)"
  pstype.placeholder = "Para começar, digite algo e clique no botão Pseudolocalizar."
  psbtn.innerHTML = "Pseudolocalizar"
  hisbtn.innerHTML = "Ver histórico"
  chrbtn.innerHTML = "Caracteres disponíveis"
  opttxt.innerHTML = "Configurações:"
  prstxt.innerHTML = "Prefixo e sufixo:"
  prs0.innerHTML = "Não adicione prefixo ou sufixo"
  prs1.innerHTML = "[Colchetes + pontos de exclamação após o resultado (estilo Microsoft) !!!]"
  prs2.innerHTML = "[Colchetes + números cardinais em inglês após o resultado (estilo Android) (por exemplo: one two three)]"
  prs3.innerHTML = "[Colchetes + adição de dígitos após o resultado (ex.: 12345)]"
  prs4.innerHTML = "Personalizado"
  cuset.innerHTML = "Texto a ser adicionado repetidamente após o resultado: "
  cusnt.innerHTML = "Repita depois: (Nº de caracteres)"
  hashtxt.innerHTML = "[Abc12]Adicione um pseudo Hash ID (Identificador de Recurso) (uma sequência de letras + números com um determinado número de dígitos)"
  hashdit.innerHTML = "Nº de dígitos: "
  dbvtxt.innerHTML = "Nº de vogais que se repetem em um número específico de caracteres (opção padrão: 1): "
  dbv1.innerHTML = "1 (vogais duplicadas, padrão)"
  nctxt.innerHTML = "Substitua os dígitos 1 a 9 por dígitos circulados (por exemplo, ①②③)"
  clear.innerHTML = "Remover itens";
  whattxt.innerHTML = "Este recurso ainda não está implementado. Por favor, tente novamente em uma versão posterior."
}
function seten() {
  zh.style.color = "#000";
  zh.style.background = "#f5f5f5";
  zh.innerHTML = "Portuguese (Brazil, work)"
  en.style.color = "#fff";
  en.style.background = "#0c6c3c";
  en.innerHTML = "English (United States)"
  resph="Result will be displayed here"
  title.innerHTML = "Pseudolocalization Tool - Version 1.0.0 Beta 1"
  title1.innerHTML = "Pseudolocalization Tool version 1.0.0 Beta 1"
  bkhome.style.display = "none";
  what.innerHTML = "What is pseudolocalization?"
  uplog.innerHTML = "Update log"
  pjhome.innerHTML = "GitHub"
  exever.innerHTML = "Windows version"
  pstype.placeholder = "To get started, type something and click Pseudolocalize."
  psbtn.innerHTML = "Pseudolocalize"
  hisbtn.innerHTML = "History"
  chrbtn.innerHTML = "Character library"
  opttxt.innerHTML = "Options: "
  prstxt.innerHTML = "Prefix and suffix:"
  prs0.innerHTML = "Do not add prefix or suffix"
  prs1.innerHTML = "[Brackets + exclamation marks after the result (Microsoft style) !!!]"
  prs2.innerHTML = "[Brackets + English cardinal numbers after the result (Android Style) (e.g.: one two three)]"
  prs3.innerHTML = "[Brackets + add digits after the result (e.g.: 12345)]"
  prs4.innerHTML = "Custom"
  cuset.innerHTML = "Text to add repeatedly after the result: "
  cusnt.innerHTML = "Repeat after: (Characters)"
  hashtxt.innerHTML = "[Abc12]Add a pseudo Hash ID (Resource Identifier) (a string of letters + numbers with a certain number of digits)"
  hashdit.innerHTML = "Number of digits: "
  dbvtxt.innerHTML = "Vowel repeated times: "
  dbv1.innerHTML = "1 (Doubled vowels)"
  nctxt.innerHTML = "Replace digits 1-9 with circled digits ①-⑨"
  clear.innerHTML = "Clear"
  whattxt.innerHTML = "Coming soon!"
  logtxt.innerHTML = "";
}
