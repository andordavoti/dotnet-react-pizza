using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaBestilling.Models;

namespace PizzaBestilling.Controllers
{
    [Route("[controller]/[action]")]
    public class OrderController : ControllerBase
    {
        private readonly OrderDB _orderDB;

        public OrderController(OrderDB orderDB)
        {
            _orderDB = orderDB;
        }

        [HttpPost]
        public async Task<bool> NewOrder([FromBody] Order newOrder)
        {
            try
            {
                _orderDB.Add(newOrder);
                await _orderDB.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }

        }

        public async Task<bool> RemoveOrder(int id)
        {
            try
            {
                var order = await _orderDB.Orders.FindAsync(id);
                _orderDB.Remove(order);
                await _orderDB.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }

        }

        public async Task<List<Order>> GetAll()
        {
            try
            {

                List<Order> orders = await _orderDB.Orders.ToListAsync();
                return orders;
            }
            catch
            {
                return null;
            }
        }
    }
}
