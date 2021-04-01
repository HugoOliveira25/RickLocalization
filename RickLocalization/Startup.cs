using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using RickLocalization.Domain.Interfaces.Handler;
using RickLocalization.Domain.Interfaces.ReadingRepository;
using RickLocalization.Domain.Interfaces.WritingRepository;
using RickLocalization.Handler;
using RickLocalization.Repository;
using RickLocalization.Repository.ReadingRepository;
using RickLocalization.Repository.WritingRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RickLocalization
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNameCaseInsensitive = false;
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
            });

            //services.AddDbContext<DataContext>(options => options.UseInMemoryDatabase("Database"));
            services.AddDbContextFactory<DataContext>(options => options.UseInMemoryDatabase("Database"));
            services.AddScoped<DataContext, DataContext>();
            services.AddScoped<IHistoricCommandHandler, HistoricCommandHandler>();
            services.AddScoped<IHistoricReadingRepository, HistoricReadingRepository>();
            services.AddScoped<IHistoricWritingRepository, HistoricWritingRepository>();

            services.AddControllers();

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(options => options.WithOrigins("http://localhost:4200")
             .AllowAnyMethod()
             .AllowAnyHeader());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
