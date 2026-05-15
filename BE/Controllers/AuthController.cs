using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApiProject.Data;
using MyApiProject.Models;

namespace MyApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        // REGISTER
        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            var checkUser = await _context.Users
                .FirstOrDefaultAsync(x => x.Username == user.Username);

            if (checkUser != null)
            {
                return BadRequest("Username already exists");
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Register success"
            });
        }

        // LOGIN
        [HttpPost("login")]
        public async Task<IActionResult> Login(User user)
        {
            var checkUser = await _context.Users
                .FirstOrDefaultAsync(x =>
                    x.Username == user.Username &&
                    x.Password == user.Password);

            if (checkUser == null)
            {
                return BadRequest("Wrong username or password");
            }

            return Ok(new
            {
                message = "Login success",
                user = checkUser
            });
        }
    }
}