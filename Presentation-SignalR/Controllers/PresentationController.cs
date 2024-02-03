using Microsoft.AspNetCore.Mvc;
using Presentation_SignalR.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Presentation_SignalR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PresentationController : ControllerBase 
    {
        private readonly IPresentationRoomService _presentationRoomService;
        public PresentationController() { }
        // GET: api/<PresentationController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PresentationController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PresentationController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PresentationController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PresentationController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
