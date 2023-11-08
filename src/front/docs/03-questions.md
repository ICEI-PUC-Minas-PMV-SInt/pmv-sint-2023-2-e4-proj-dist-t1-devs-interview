**GET /api/question/:questionId**

## Estrutura:
```
export interface Root {
  data: Data
}

export interface Data {
  idQuestion: string
  description: string
  correctAnswer: number
  options: string[]
  index: number
  quizId: string
  quizTitle: string
  nextQuestionId: string
  prevQuestionId: string
}


```

**GET /api/question/css1**

## Exemplo de resposta: 
```
{
    "data": {
        "idQuestion": "css1",
        "description": "Para remover o sublinhado de um link, podemos usar:",
        "correctAnswer": 1,
        "options": [
            "{underscore : none;}",
            "a{text-decoration: none;}",
            "a{underline : none;}",
            "ctrl+c ctrl+v do Stackoverflow"
        ],
        "index": 0,
        "quizId": "1.1",
        "quizTitle": "CSS",
        "nextQuestionId": "css2",
        "prevQuestionId": "css5"
    }
}
```
