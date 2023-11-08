using InterviewAPI.Data;
using InterviewAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace InterviewAPI.Controllers;

[ApiController]
[Route("api/marvel-heroes-names")]
public class MarvelNamesController : ControllerBase
{
    private readonly MyDbContext _context;

    public MarvelNamesController(MyDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<object> GetMarvelNames()
    {
        var HeroNames = _context.MarvelNames.Select(HeroNames => HeroNames.Name).ToList();
        var result = new { data = HeroNames };
        return Ok(result);
    }

}
