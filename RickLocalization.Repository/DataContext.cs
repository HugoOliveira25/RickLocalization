using Microsoft.EntityFrameworkCore;
using RickLocalization.Domain.Models;

namespace RickLocalization.Repository
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {

        }
        public DbSet<Historic> Historic { get; set; }
    }
}
