using Presentation_SignalR.Hub;
using Presentation_SignalR.Model;
using Presentation_SignalR.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();
builder.Services.AddSingleton<IDictionary<Guid, PresentationRoom>>(IServiceProvider =>
new Dictionary<Guid, PresentationRoom>());
builder.Services.AddSingleton<IPresentationRoomService, PresentationRoomService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowHeaders",
        policy =>
        {
            //policy.AllowAnyHeader()
            //    .AllowAnyMethod()
            //    .WithOrigins("*")
            //    .AllowAnyOrigin()
            //    .AllowCredentials();
            policy.AllowAnyMethod().AllowAnyHeader().SetIsOriginAllowed(origin => true).AllowCredentials();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting();

app.UseCors("AllowHeaders");
app.UseHttpsRedirection();

app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    app.MapControllers();
    endpoints.MapHub<PresentationHub>("/presentation");
});
app.MapControllers();

app.Run();
