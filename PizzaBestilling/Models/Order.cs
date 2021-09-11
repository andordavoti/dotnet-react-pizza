﻿using System;
namespace PizzaBestilling.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string PizzaType { get; set; }
        public string PizzaStyle { get; set; }
        public int Quantity { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}