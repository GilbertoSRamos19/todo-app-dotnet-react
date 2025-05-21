// C:\Users\betod\todo-app-dotnet-react\TodoApp\TodoApp.Api\Data\ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;
using TodoApp.Api.Models;

namespace TodoApp.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Exemplo de configuração adicional (opcional)
            // modelBuilder.Entity<TodoItem>().Property(t => t.Title).IsRequired();
        }
    }
}