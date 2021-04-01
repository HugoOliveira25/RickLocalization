using Microsoft.EntityFrameworkCore;
using RickLocalization.Domain.CommandHandler;
using RickLocalization.Domain.Interfaces.WritingRepository;
using RickLocalization.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RickLocalization.Repository.WritingRepository
{
    public class HistoricWritingRepository : IHistoricWritingRepository
    {
        private readonly IDbContextFactory<DataContext> _contextFactory;

        public HistoricWritingRepository(IDbContextFactory<DataContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }

        public async Task<Historic> AddTravel(Historic entity)
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                var historicDb = context.Historic.Add(entity);
                await context.SaveChangesAsync();
                return historicDb.Entity;
            }
        }
    }
}
