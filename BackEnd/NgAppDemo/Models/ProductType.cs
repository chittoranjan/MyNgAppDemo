using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NgAppDemo.Models
{
    public class ProductType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual List<Product> Products { get; set; }
    }
}
