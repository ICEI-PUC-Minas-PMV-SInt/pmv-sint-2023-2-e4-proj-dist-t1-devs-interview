using InterviewAPI.Data;
using InterviewAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace InterviewAPI.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Linq;

    namespace InterviewAPI.Controllers
    {
        [Route("api/question")]
        [ApiController]
        public class QuestionController : ControllerBase
        {
            private readonly MyDbContext _context; 
            public QuestionController(MyDbContext context)
            {
                _context = context;
            }

            [HttpGet("{questionId}")]
            public IActionResult GetQuestion(int questionId)
            {
                var question = _context.Questions.SingleOrDefault(q => q.Id == questionId);

                if (question == null)
                {
                    return NotFound();
                }

               
                var theme = _context.Themes.SingleOrDefault(t => t.Questions.Any(q => q.Id == questionId));

                var query = 1;
                switch(theme.Id)
                {
                    case 1:
                        query = question.Id - 2;
                        break;
                    case 2:
                       query = question.Id - 7;
                       break;
                    case 3:
                       query = question.Id - 12;
                       break;
                }

                if (theme == null)
                {
                    return NotFound();
                }

                var options = JsonConvert.DeserializeObject<List<string>>(question.Options);

                var nextQuestion = _context.Questions.SingleOrDefault(q => q.Id == questionId + 1);

                var nextThemeId = nextQuestion != null ? _context.Themes.SingleOrDefault(t => t.Questions.Any(q => q.Id == nextQuestion.Id)).Id : -1;

                var nextQuestionId = (nextQuestion == null || nextThemeId != theme.Id) ? (null) : (questionId + 1).ToString();

                var prevQuestion = _context.Questions.SingleOrDefault(q => q.Id == questionId - 1);

                var prevThemeId = prevQuestion != null ? _context.Themes.SingleOrDefault(t => t.Questions.Any(q => q.Id == prevQuestion.Id)).Id : -1;

                var prevQuestionId = (prevQuestion == null || prevThemeId != theme.Id) ? (questionId + 4).ToString() : (questionId - 1).ToString();



                var response = new
                {
                    data = new
                    {
                        idQuestion = question.Id.ToString(),
                        description = question.Description,
                        correctAnswer = question.CorrectAnswer,
                        options = options,
                        index = query,
                        quizId = $"{theme.Id}.{question.Id}",
                        quizTitle = theme.Name,
                        nextQuestionId = nextQuestionId, 
                        prevQuestionId = prevQuestionId
                    }
                };

                return Ok(response);
            }
        }
    }
}
