using Microsoft.EntityFrameworkCore;

namespace InterviewAPI.Data
{


    public class MyDbContext : DbContext
    {
        public MyDbContext()
        {
        }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }
        
        public DbSet<Models.Theme> Themes { get; set; }
        public DbSet<Models.Question> Questions { get; set; }
        public DbSet<Models.MarvelName> MarvelNames { get; set; }

      
    }

}
