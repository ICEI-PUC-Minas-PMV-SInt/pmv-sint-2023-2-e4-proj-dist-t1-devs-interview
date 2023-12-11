using InterviewAPI.Controllers.InterviewAPI.Controllers;
using InterviewAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace Test.Interviw.xUnit
{
    public class MarvelNamesTest
    {

        private readonly HttpClient _client;

        public  MarvelNamesTest()
        {
            _client = new HttpClient();
            _client.BaseAddress = new Uri("http://interviewapi2.azurewebsites.net/API/");
        }

        [Fact]
        public async Task GetMarvelNames_ReturnsListOfNames()
        {
            // Arrange
            var requestUri = "marvel-heroes-names"; 
            // Act
            var response = await _client.GetAsync(requestUri);
            response.EnsureSuccessStatusCode(); 

            var content = await response.Content.ReadAsStringAsync();

            
            var characterNames = JObject.Parse(content)["data"].ToObject<List<string>>();

            // Assert
            Assert.NotNull(characterNames); 
            Assert.NotEmpty(characterNames); 

            
            Assert.Contains("Steve Rogers", characterNames);
            Assert.Contains("Tony Stark", characterNames);

        }
    }
}

  

