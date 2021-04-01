using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RickLocalization.Domain.CommandHandler;
using RickLocalization.Domain.Interfaces.Handler;
using RickLocalization.Domain.Models;
using RickLocalization.Domain.ViewModels;
using RickLocalization.Repository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RickLocalization.API.Controllers
{
    [ApiController]
    [Route("v1/historic")]
    public class HistoricController : ControllerBase
    {
        private readonly IHistoricCommandHandler historicCommandHandler;

        public HistoricController(IHistoricCommandHandler historicCommandHandler)
        {
            this.historicCommandHandler = historicCommandHandler;
        }


        [HttpGet]
        [Route("gethistoric/{id:int}")]
        public async Task<ActionResult<List<HistoricViewModel>>> GetHistoric(int id)
        {
            var historics = await historicCommandHandler.GetHistoric(id);
            return Ok(historics);
        }

        [HttpPost]
        [Route("addtravel")]
        public async Task<ActionResult> AddTravel([FromBody] HistoricCommand command)
        {
            var historic = await historicCommandHandler.AddTravel(command);
            return Ok(historic);


        }
    }
}
