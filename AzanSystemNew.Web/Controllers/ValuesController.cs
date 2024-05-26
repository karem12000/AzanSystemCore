using AzanSystemNew.Web.BLL;
using AzanSystemNew.Web.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AzanSystemNew.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController(DefaultValuesBll defaultValuesBll) : ControllerBase
    {
        private readonly DefaultValuesBll _defaultValuesBll = defaultValuesBll;

        [HttpGet]
        public IActionResult GetSettings()
        {
            return Ok(_defaultValuesBll.GetValues());
        }


        // POST api/<ValuesController>
        [HttpPost]
        public IActionResult SaveSettings([FromBody] DefaultValues values)
        {
            return Ok(_defaultValuesBll.SaveValues(values));
        }


    }
}
