**GET /api/quizzes?search=css**
## Estrutura:
```
export interface Root {
  data: Daum[]
}

export interface Daum {
  id: string
  title: string
  questions: Question[]
}

export interface Question {
  idQuestion: string
  description: string
  correctAnswer: number
  options: string[]
}

```

## Exemplo de resposta: 
```
{
    "data": [
        {
            "id": "1.1",
            "title": "CSS",
            "questions": [
                {
                    "idQuestion": "css1",
                    "description": "Para remover o sublinhado de um link, podemos usar:",
                    "correctAnswer": 1,
                    "options": [
                        "{underscore : none;}",
                        "a{text-decoration: none;}",
                        "a{underline : none;}",
                        "ctrl+c ctrl+v do Stackoverflow"
                    ]
                },
                {
                    "idQuestion": "css2",
                    "description": "Para alterar a cor de fundo de um elemento, usamos:",
                    "correctAnswer": 3,
                    "options": [
                        "color-background: cyan;",
                        "Desligar o monitor",
                        "bg-color: cyan;",
                        "background-color: cyan;"
                    ]
                },
                {
                    "idQuestion": "css3",
                    "description": "Para importar um novo arquivo CSS, usamos?",
                    "correctAnswer": 0,
                    "options": [
                        "import('');",
                        "include css('')",
                        "aliexpress.buyCss",
                        "@import url('');"
                    ]
                },
                {
                    "idQuestion": "css4",
                    "description": "Para adicionar um efeito a um elemento quando o mouse passa sobre, usamos qual pseudo-classe?",
                    "correctAnswer": 0,
                    "options": [
                        ":hover{}",
                        ":active{}",
                        ":focus{}",
                        ":mouseOver"
                    ]
                },
                {
                    "idQuestion": "css5",
                    "description": "Para definir a largura máxima de um elemento, usamos:",
                    "correctAnswer": 3,
                    "options": [
                        "width-range:",
                        "max-content:",
                        "no-max",
                        "max-width:"
                    ]
                }
            ]
        }
    ]
}
```

## Consulta vazia:

**GET /api/quizzes?search=**

## Exemplo de resposta:

```
{
    "data": [
        {
            "id": "1.1",
            "title": "CSS",
            "questions": [
                {
                    "idQuestion": "css1",
                    "description": "Para remover o sublinhado de um link, podemos usar:",
                    "correctAnswer": 1,
                    "options": [
                        "{underscore : none;}",
                        "a{text-decoration: none;}",
                        "a{underline : none;}",
                        "ctrl+c ctrl+v do Stackoverflow"
                    ]
                },
                {
                    "idQuestion": "css2",
                    "description": "Para alterar a cor de fundo de um elemento, usamos:",
                    "correctAnswer": 3,
                    "options": [
                        "color-background: cyan;",
                        "Desligar o monitor",
                        "bg-color: cyan;",
                        "background-color: cyan;"
                    ]
                },
                {
                    "idQuestion": "css3",
                    "description": "Para importar um novo arquivo CSS, usamos?",
                    "correctAnswer": 0,
                    "options": [
                        "import('');",
                        "include css('')",
                        "aliexpress.buyCss",
                        "@import url('');"
                    ]
                },
                {
                    "idQuestion": "css4",
                    "description": "Para adicionar um efeito a um elemento quando o mouse passa sobre, usamos qual pseudo-classe?",
                    "correctAnswer": 0,
                    "options": [
                        ":hover{}",
                        ":active{}",
                        ":focus{}",
                        ":mouseOver"
                    ]
                },
                {
                    "idQuestion": "css5",
                    "description": "Para definir a largura máxima de um elemento, usamos:",
                    "correctAnswer": 3,
                    "options": [
                        "width-range:",
                        "max-content:",
                        "no-max",
                        "max-width:"
                    ]
                }
            ]
        },
        {
            "id": "1.2",
            "title": "Javascript",
            "questions": [
                {
                    "idQuestion": "js1",
                    "description": "Usamos try/catch para:",
                    "correctAnswer": 1,
                    "options": [
                        "Podemos usar essa estrutura quando queremos acessar elementos nativos do navegador.",
                        "Tratar instruções que possam gerar erros, e assim, lançar exceções.",
                        "Funciona como o if/else, verifica se uma operação foi executada.",
                        "Tenta pegar um invasor na página."
                    ]
                },
                {
                    "idQuestion": "js2",
                    "description": "Qual definição de array está incorreta?",
                    "correctAnswer": 0,
                    "options": [
                        "var frutas = (array)list('maça', 'uva');",
                        "var errei = 'maça','uva';",
                        "var frutas = new Array('maça', 'uva');",
                        "var frutas = ['maça', 'uva'];"
                    ]
                },
                {
                    "idQuestion": "js3",
                    "description": "Para finalizar o loop atual e prosseguir para a próxima iteração, usamos:",
                    "correctAnswer": 1,
                    "options": [
                        "exit;",
                        "break;",
                        "continue;",
                        "zéFini;"
                    ]
                },
                {
                    "idQuestion": "js4",
                    "description": "Para executarmos uma operação a cada 1 segundo, podemos usar:",
                    "correctAnswer": 1,
                    "options": [
                        "sleep(1000, ()=>{/* Minha operação */})",
                        "setInterval(() => { /*Minhaoperação*/ }, 1000);",
                        "function() : 100 {/*Minha operação */}",
                        "holdMybeer(() => {, 1000);"
                    ]
                },
                {
                    "idQuestion": "js5",
                    "description": "Para obtermos o valor de um atributo de um elemento, usamos:",
                    "correctAnswer": 1,
                    "options": [
                        "element.get('atributo'); ",
                        "element.getAttribute('atributo');",
                        "getAttribute(element, 'atributo');",
                        "Pesquisar no google."
                    ]
                }
            ]
        },
        {
            "id": "1.3",
            "title": "HTML",
            "questions": [
                {
                    "idQuestion": "html1",
                    "description": "Qual tag abaixo pertence a um menu de navegação?",
                    "correctAnswer": 1,
                    "options": [
                        "<menu-item>",
                        "<nav>",
                        "<item>",
                        "<Vasco-da-Gama>"
                    ]
                },
                {
                    "idQuestion": "html2",
                    "description": "Como deve ser declarado um título da página?",
                    "correctAnswer": 0,
                    "options": [
                        "<title>Título aqui</title>",
                        "<title title='titulo'>",
                        "<html title='Título aqui'></html>",
                        "<libertadores></libertadores>"
                    ]
                },
                {
                    "idQuestion": "html3",
                    "description": "Qual a forma correta de se criar um link?",
                    "correctAnswer": 2,
                    "options": [
                        "<link rel='Link' value='Link aqui'>",
                        "<zelda born='link'></zelda>",
                        "<a href='link'>link aqui</a>",
                        "<span href='link'>Link aqui</span>"
                    ]
                },
                {
                    "idQuestion": "html4",
                    "description": "Como devemos chamar um script JS?",
                    "correctAnswer": 1,
                    "options": [
                        "<script src='link script'>",
                        "<script src='link script'></script>",
                        "Pelo nome",
                        "link rel='script' href='link'>"
                    ]
                },
                {
                    "idQuestion": "html5",
                    "description": "Qual a forma correta de se criar uma lista?",
                    "correctAnswer": 1,
                    "options": [
                        "Ok google! Crie uma lista.",
                        "<ul> <li></li> </ul>",
                        "<li> <item></item> </li>",
                        "<list> <item></item> </list>"
                    ]
                }
            ]
        }
    ]
}
```