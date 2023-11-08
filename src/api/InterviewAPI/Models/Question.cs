using System.ComponentModel.DataAnnotations;

namespace InterviewAPI.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public int CorrectAnswer { get; set; }
        public string Options { get; set; }
    }
}
