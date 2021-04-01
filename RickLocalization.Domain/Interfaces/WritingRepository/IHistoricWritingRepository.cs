using RickLocalization.Domain.Models;
using System.Threading.Tasks;

namespace RickLocalization.Domain.Interfaces.WritingRepository
{
    public interface IHistoricWritingRepository
    {
        Task<Historic> AddTravel(Historic entity);
    }
}
