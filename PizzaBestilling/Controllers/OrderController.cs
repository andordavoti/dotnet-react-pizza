using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
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


        public bool NewOrder(Order newOrder)
        {
            try
            {
                _orderDB.Add(newOrder);
                _orderDB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }

        public List<Order> GetAll()
        {
            try
            {

                List<Order> orders = _orderDB.Orders.ToList();
                return orders;
            }
            catch
            {
                return null;
            }
        }
    }
}
