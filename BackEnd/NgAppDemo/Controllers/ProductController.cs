using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NgAppDemo.Batabase;
using NgAppDemo.Models;

namespace NgAppDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Product
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var dataList = await _context.Products
                .AsQueryable()
                .Include(c => c.ProductType)
                .ToListAsync();
            var jsonData = dataList.Select(c => new
            {
                c.Id,
                c.Name,
                c.Description,
                c.Price,
                c.ProductTypeId,
                
                ProductType = new {c.ProductType.Id, c.ProductType.Name, c.ProductType.Description }

            });
            return Ok(jsonData);
        }

        // GET: api/Product/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }


        [HttpGet("GetProductByTypeId/{id:int}")]
        public async Task<ActionResult<List<Product>>> GetProductByTypeId(int id)
        {
            var dataList = await _context.Products.Include(pt=>pt.ProductType).Where(c=>c.ProductTypeId==id).ToListAsync();

            if (dataList == null)
            {
                return NotFound();
            }

            var jsonData = dataList.Select(c => new
            {
                c.Id,
                c.Name,
                c.Description,
                c.Price,
                c.ProductTypeId,

                ProductType = new { c.ProductType.Id, c.ProductType.Name, c.ProductType.Description }

            });
            return Ok(jsonData);
        }


        // PUT: api/Product/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        // POST: api/Product
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        // DELETE: api/Product/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return product;
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
