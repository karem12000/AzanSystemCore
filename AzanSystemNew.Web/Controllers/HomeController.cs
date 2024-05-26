using AzanSystemNew.Web.BLL;
using Microsoft.AspNetCore.Mvc;

namespace AzanSystemNew.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DefaultValuesBll _defaultValuesBll;

        public HomeController(ILogger<HomeController> logger, DefaultValuesBll defaultValuesBll)
        {
            _logger = logger;
            _defaultValuesBll = defaultValuesBll;
        }

        public IActionResult Index()
        {
            return View();
        }

        //public IActionResult Privacy()
        //{
        //    return View();
        //}

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public IActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}


    }
}
