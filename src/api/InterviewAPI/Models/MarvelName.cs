using System.ComponentModel.DataAnnotations;

namespace InterviewAPI.Models
{
    public class MarvelName
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
