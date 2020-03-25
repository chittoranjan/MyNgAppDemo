using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NgAppDemo.Batabase;
using NgAppDemo.Models;

namespace NgAppDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductTypeController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ProductType
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductType>>> GetProductTypes()
        {
            var dataList = await _context.ProductTypes
                .AsQueryable()
                .Include(c => c.Products)
                .ToListAsync();

            var productList = dataList.Select(c=>c.Products);
            var products=new List<Product>();
            
            foreach (var product in productList)
            {
                
                foreach (var pro in product)
                {
                    
                    var obj = new Product()
                    {
                        Id = pro.Id,
                        Name = pro.Name,
                        Description = pro.Description,
                        Price = pro.Price,
                        ProductTypeId = pro.ProductTypeId

                    };
                    products.Add(obj);
                }
                
               
            }
           
            var jsonData = dataList.Select(c => new
            {
                c.Id,
                c.Name,
                c.Description,
                Products = c.Products =products,   
            });
            return Ok(jsonData);
        }

        // GET: api/ProductType/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductType>> GetProductType(int id)
        {
            var productType = await _context.ProductTypes.FindAsync(id);

            if (productType == null)
            {
                return NotFound();
            }

            return productType;
        }

        // PUT: api/ProductType/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductType(int id, ProductType productType)
        {
            if (id != productType.Id)
            {
                return BadRequest();
            }

            _context.Entry(productType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductType
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ProductType>> PostProductType(ProductType productType)
        {
            _context.ProductTypes.Add(productType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductType", new { id = productType.Id }, productType);
        }

        // DELETE: api/ProductType/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductType>> DeleteProductType(int id)
        {
            var productType = await _context.ProductTypes.FindAsync(id);
            if (productType == null)
            {
                return NotFound();
            }

            _context.ProductTypes.Remove(productType);
            await _context.SaveChangesAsync();

            return productType;
        }

        private bool ProductTypeExists(int id)
        {
            return _context.ProductTypes.Any(e => e.Id == id);
        }
    }
}
