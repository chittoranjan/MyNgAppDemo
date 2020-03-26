using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NgAppDemo.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }

        public virtual List<SaleDetails> SaleDetailses { get; set; }

        [NotMapped]
        public virtual List<Product> Products { get; set; }

    }
}
