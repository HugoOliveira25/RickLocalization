using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RickLocalization.Domain.Interfaces.ReadingRepository;
using RickLocalization.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RickLocalization.Repository.ReadingRepository
{
    public class HistoricReadingRepository : IHistoricReadingRepository
    {
        private readonly IDbContextFactory<DataContext> _contextFactory;

        public HistoricReadingRepository(IDbContextFactory<DataContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }

        public async Task<List<Historic>> GetHistoric(int id)
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                return await context.Historic.Where(x => x.IdRickAndMorty == id).ToListAsync();
            }

            
        }
    }
}
