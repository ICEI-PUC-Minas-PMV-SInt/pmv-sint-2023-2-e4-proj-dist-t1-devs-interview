using InterviewAPI.Controllers.InterviewAPI.Controllers;
using InterviewAPI.Data;
using InterviewAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace TestApi2Interview
{
    public class Tests
    {
        [TestFixture]
        public class QuestionControllerTests
        {
            private MyDbContext _context;
            private QuestionController _controller;

            [SetUp]
            public void Setup()
            {
                // Set up your mock or in-memory database for testing
                // Initialize your DbContext or mock the dependencies
                var options = new DbContextOptionsBuilder<MyDbContext>()
                    .UseInMemoryDatabase(databaseName: "TestDatabase")
                    .Options;

                _context = new MyDbContext(options);

                // Add test data to the in-memory database
                _context.Questions.Add(new Question
                {
                    Id = 9,
                    Description = "Para executarmos uma operação a cada 1 segundo, podemos usar:",
                    CorrectAnswer = 1,
                    Options = "[ \"sleep(1000, ()=>{/* Minha operação */})\", \"setInterval(() => { /*Minhaoperação*/ }, 1000);\", \"function() : 100 {/*Minha operação */}\", \"holdMybeer(() => {, 1000);\" ]"
                    // Add other properties accordingly
                });

                _context.SaveChanges();

                // Initialize the controller with the mocked dependencies
                _controller = new QuestionController(_context);
            }

            [Test]
            public void GetQuestion_WithValidId_ReturnsOkResult()
            {
                // Arrange
                int validQuestionId = 9;

                // Act
                var result = _controller.GetQuestion(validQuestionId);

                // Assert
                Assert.That(result, Is.TypeOf<Microsoft.AspNetCore.Mvc.OkObjectResult>());
            }

            // Add more test methods to cover different scenarios, error handling, etc.

            [TearDown]
            public void TearDown()
            {
                // Clean up resources after each test
                _context.Dispose();
            }
        }
    }
}