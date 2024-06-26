
using AzanSystemNew.Web.BLL;
using ElectronNET.API;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
});
builder.Services.AddScoped<DefaultValuesBll>();
builder.WebHost.UseElectron(args);
builder.Services.AddElectron();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");


//app.MapControllerRoute(
//    name: "api",
//    pattern: "api",
//    defaults: new { controller = "Values", action = "SaveSettings" });

//{
//    var browserWindow = await Electron.WindowManager.CreateWindowAsync(new BrowserWindowOptions
//    {
//        Icon = "D:\\MTX-Projects\\AzanSystemCore\\AzanSystemNew.Web\\wwwroot\\img\\favicon.ico",
//        Width = 1300,
//        Height = 1200,
//        AutoHideMenuBar = true

//    });

//    browserWindow.Maximize();

//}


app.Run();
