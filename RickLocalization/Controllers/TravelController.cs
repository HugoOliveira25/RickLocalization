using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RickLocalization.Domain.Models;
using RickLocalization.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RickLocalization.API.Controllers
{
    [ApiController]
    [Route("v1/travel")]
    public class TravelController : ControllerBase
    {
        private readonly IDbContextFactory<DataContext> _contextFactory;

        public TravelController(IDbContextFactory<DataContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }

        [HttpPost]
        [Route("addtravel")]
        public async Task<ActionResult<Historic>> AddTravel([FromBody]Historic model)
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                context.Historic.Add(model);
                await context.SaveChangesAsync();
                return model;
            }

            
        }

    }
}
