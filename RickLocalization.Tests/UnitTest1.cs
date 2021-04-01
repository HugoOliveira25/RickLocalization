using Moq;
using RickLocalization.Repository.WritingRepository;
using RickLocalization.Domain.CommandHandler;
using Xunit;
using RickLocalization.Domain.Models;
using RickLocalization.Handler;
using RickLocalization.Repository.ReadingRepository;
using System.Threading.Tasks;
using RickLocalization.Domain.Interfaces.WritingRepository;
using RickLocalization.Domain.Interfaces.ReadingRepository;

namespace RickLocalization.Tests
{
    public class UnitTest1
    {
        [Fact]
        public async void CommandAddTravelIsValid_Executed_Success()
        {
            var historicWritingRepository = new Mock<IHistoricWritingRepository>();
            var historicReadingRepository = new Mock<IHistoricReadingRepository>();

            var historicCommand = new HistoricCommand() { Id = 0, IdRickAndMorty = 1, Location = "Earth 137"};
            var entity = new Historic() { Id = historicCommand.Id, IdRickAndMorty = historicCommand.IdRickAndMorty, Location = historicCommand.Location };

            historicWritingRepository.Setup(p => p.AddTravel(It.IsAny<Historic>())).Returns(Task.FromResult(entity));

            var historicCommandHandler = new HistoricCommandHandler(historicReadingRepository.Object, historicWritingRepository.Object);

            var historicDb = await historicCommandHandler.AddTravel(historicCommand);

            historicWritingRepository.Verify(prop => prop.AddTravel(It.IsAny<Historic>()), Times.Once);
            Assert.NotNull(historicDb);
            Assert.Equal(entity.Location, historicDb.Location);

        }

        [Fact]
        public async void CommandGetHistoricIsValid_Executed_Success()
        {
            var historicWritingRepository = new Mock<IHistoricWritingRepository>();
            var historicReadingRepository = new Mock<IHistoricReadingRepository>();

            var historicCommand = new HistoricCommand() { Id = 0, IdRickAndMorty = 1, Location = "Earth 137" };
            var entity = new Historic() { Id = historicCommand.Id, IdRickAndMorty = historicCommand.IdRickAndMorty, Location = historicCommand.Location };

            historicWritingRepository.Setup(p => p.AddTravel(It.IsAny<Historic>())).Returns(Task.FromResult(entity));

            var historicCommandHandler = new HistoricCommandHandler(historicReadingRepository.Object, historicWritingRepository.Object);

            var historicDb = await historicCommandHandler.AddTravel(historicCommand);

            var historics = await historicCommandHandler.GetHistoric(historicDb.Id);

            historicReadingRepository.Verify(prop => prop.GetHistoric(It.IsAny<int>()), Times.Once);
            Assert.NotNull(historics);

        }
    }
}
