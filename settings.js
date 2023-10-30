var lang = 0;
var ver = "v1.0.0_b2"
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
  whattxt.innerHTML = "A pseudolocalização é um método de teste de software usado para testar aspectos de internacionalização de software. Em vez de traduzir o texto do software para um idioma estrangeiro, como no processo de localização, os elementos textuais de uma aplicação são substituídos por uma versão alterada do idioma original. <br> Além das ferramentas utilizadas internamente pela Microsoft, outras ferramentas de internacionalização agora incluem opções de pseudolocalização. Essas ferramentas incluem Alchemy Catalyst da Alchemy Software Development, SDL Passolo da SDL e Globalyst da g11n. Essas ferramentas incluem capacidade de pseudo-localização, incluindo a capacidade de visualizar caixas de diálogo pseudo-localizadas renderizadas e automatizar o próprio processo de teste. Embora ferramentas como o Globalyst concluam todo o processo de criação de construção pseudolocalizada e automatizem o teste, isso também pode ser feito executando um script de pseudolocalização personalizado nos recursos de texto extraídos e testando-o manualmente. <br> Há uma variedade de recursos gratuitos de pseudolocalização na Internet que criarão versões pseudolocalizadas de formatos de localização comuns, como strings iOS, Android xml, Gettext po e outros. Esses sites permitem que os desenvolvedores carreguem arquivos de strings em um site e baixem o arquivo pseudolocalizado resultante."
}
function seten() {
  zh.style.color = "#000";
  zh.style.background = "#f5f5f5";
  zh.innerHTML = "Portuguese (Brazil, work)"
  en.style.color = "#fff";
  en.style.background = "#0c6c3c";
  en.innerHTML = "English (United States)"
  resph="Result will be displayed here"
  title.innerHTML = "Pseudolocalization Tool - Version 1.0.0 Beta 2"
  title1.innerHTML = "Pseudolocalization Tool version 1.0.0 Beta 2"
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
  whattxt.innerHTML = "Pseudolocalization (or pseudo-localization) is a software testing method used for testing internationalization aspects of software. Instead of translating the text of the software into a foreign language, as in the process of localization, the textual elements of an application are replaced with an altered version of the original language. <br> Besides the tools used internally by Microsoft, other internationalization tools now include pseudolocalization options. These tools include Alchemy Catalyst from Alchemy Software Development, SDL Passolo from SDL and Globalyst from g11n. Such tools include pseudo-localization capability, including ability to view rendered Pseudo-localized dialogs and automating the testing process itself. While tools like Globalyst complete the whole process of creating pseudolocalised build and automate the testing, it can also be done by running a custom made pseudolocalization script on the extracted text resources and manually testing it. <br> There are a variety of free pseudolocalization resources on the Internet that will create pseudolocalized versions of common localization formats like iOS strings, Android xml, Gettext po, and others. These sites allow developers to upload strings file to a Web site and download the resulting pseudolocalized file."
  logtxt.innerHTML = "";
}
