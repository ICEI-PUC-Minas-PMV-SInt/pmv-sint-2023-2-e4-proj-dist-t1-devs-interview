using InterviewAPI.Controllers.InterviewAPI.Controllers;
using InterviewAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace Test.Interviw.xUnit
{
    public class QuestionTest
    {

        private readonly HttpClient _client;

        public QuestionTest()
        {
            _client = new HttpClient();
            _client.BaseAddress = new Uri("http://interviewapi2.azurewebsites.net/API/");
        }

        [Fact]
        public async Task GetQuestion_Returns_OkObjectResult_ForValidQuestionIdAsync()
        {
            // Arrange
            var validQuestionId = 2; 
            var requestUri = $"question/{validQuestionId}";
            // Act
            var response = await _client.GetAsync(requestUri);

            // Assert
            response.EnsureSuccessStatusCode(); 

            var content = await response.Content.ReadAsStringAsync();

            var responseObject = JObject.Parse(content);

            Assert.Equal("1", responseObject["data"]["correctAnswer"].ToString());
            Assert.Equal("Para remover o sublinhado de um link, podemos usar:", responseObject["data"]["description"].ToString());
            Assert.Equal("2", responseObject["data"]["idQuestion"].ToString());
          
        }
    }
}

  

