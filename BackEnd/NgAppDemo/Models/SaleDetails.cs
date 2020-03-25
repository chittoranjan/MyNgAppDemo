using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NgAppDemo.Models
{
    public class SaleDetails
    {
        public int Id { get; set; }
        public int SaleId { get; set; }
        public int ProductId { get; set; }
        public double Discount { get; set; }
        public double Amount { get; set; }

        public Sale Sale { get; set; }
        public Product Product { get; set; }

    }
}
