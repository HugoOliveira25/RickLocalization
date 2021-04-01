using RickLocalization.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RickLocalization.Domain.Interfaces.ReadingRepository
{
    public interface IHistoricReadingRepository
    {
        public Task<List<Historic>> GetHistoric(int id);
    }
}
