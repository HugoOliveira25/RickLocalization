using RickLocalization.Domain.CommandHandler;
using RickLocalization.Domain.Models;
using RickLocalization.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RickLocalization.Domain.Interfaces.Handler
{
    public interface IHistoricCommandHandler
    {
        public Task<List<HistoricViewModel>> GetHistoric(int id);

        public Task<Historic> AddTravel(HistoricCommand command);
    }
}
