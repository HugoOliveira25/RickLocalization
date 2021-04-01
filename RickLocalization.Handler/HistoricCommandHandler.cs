using AutoMapper;
using RickLocalization.Domain.CommandHandler;
using RickLocalization.Domain.Interfaces.Handler;
using RickLocalization.Domain.Interfaces.ReadingRepository;
using RickLocalization.Domain.Interfaces.WritingRepository;
using RickLocalization.Domain.Models;
using RickLocalization.Domain.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RickLocalization.Handler
{
    public class HistoricCommandHandler : IHistoricCommandHandler
    {
        private static IMapper _mapperEntityToViewModel;
        private static IMapper _mapperCommandToEntity;
        private readonly IHistoricReadingRepository historicReadingRepository;
        private readonly IHistoricWritingRepository historicWritingRepository;

        public HistoricCommandHandler(IHistoricReadingRepository historicReadingRepository, IHistoricWritingRepository historicWritingRepository)
        {
            var mapperEntityToViewModel = new MapperConfiguration(p => p.CreateMap<Historic, HistoricViewModel>());
            _mapperEntityToViewModel = mapperEntityToViewModel.CreateMapper();

            var mapperCommandToEntity = new MapperConfiguration(p => p.CreateMap<HistoricCommand, Historic>());
            _mapperCommandToEntity = mapperCommandToEntity.CreateMapper();

            this.historicReadingRepository = historicReadingRepository;
            this.historicWritingRepository = historicWritingRepository;
        }

        public async Task<Historic> AddTravel(HistoricCommand command)
        {
            var entity = _mapperCommandToEntity.Map<HistoricCommand, Historic>(command);
            return await historicWritingRepository.AddTravel(entity);

        }

        public async Task<List<HistoricViewModel>> GetHistoric(int id)
        {
            var historics = await historicReadingRepository.GetHistoric(id);

            return _mapperEntityToViewModel.Map<List<Historic>, List<HistoricViewModel>>(historics);
        }
    }
}
