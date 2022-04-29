using Microsoft.AspNetCore.Mvc;
using MyWorkspace.LibraryA;

namespace MyWorkspace.MyApi.Controllers;

[ApiController]
[Route("[controller]")]
public class NumberController : ControllerBase
{
    private readonly ILogger<NumberController> _logger;

    public NumberController(ILogger<NumberController> logger)
    {
        _logger = logger;
    }

    [HttpGet("IsOddNumber/{num}")]
    public bool IsOddNumber(int num)
    {
        return Class1.IsOddNumber(num);
    }
}
