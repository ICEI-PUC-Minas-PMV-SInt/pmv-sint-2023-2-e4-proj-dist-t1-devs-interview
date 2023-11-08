using InterviewAPI.Data;
using InterviewAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InterviewAPI.Controllers
{
    [Route("api/quizzes")]
    [ApiController]
    public class QuizzesController : ControllerBase
    {
        private readonly MyDbContext _context;

        public QuizzesController(MyDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult GetQuizzes(string? search)
        {
            var query = _context.Themes
                .Select(theme => new
                {
                    id = theme.Id.ToString(),
                    title = theme.Name,
                    questions = theme.Questions.Select(question => new
                    {
                        idQuestion = question.Id,
                        description = question.Description,
                        correctAnswer = question.CorrectAnswer,
                        options = JsonConvert.DeserializeObject<List<string>>(question.Options)
                    })
                });

            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(theme => theme.title.Contains(search));
            }

            var quizzes = query.ToList();

            var response = new
            {
                data = quizzes
            };

            return Ok(response);
        }
    }

}
