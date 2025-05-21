// C:\Users\betod\todo-app-dotnet-react\TodoApp\TodoApp.Api\Models\TodoItem.cs
using System;
using System.ComponentModel.DataAnnotations;

namespace TodoApp.Api.Models
{
    public class TodoItem
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "Title cannot be longer than 100 characters.")]
        public string? Title { get; set; }

        public string? Description { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public bool IsCompleted { get; set; }
    }
}