import { FC, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../custom.css";

const NewOrders: FC = () => {
  const initialFormData = {
    pizzaType: "",
    pizzaStyle: "",
    quantity: "",
    fullName: "",
    address: "",
    email: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send request to backend, show user an error message if it fails, show success if it works
  };

  return (
    <div>
      <h3>New order</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-1rem">
          <Label for="pizzaType">Pizza Type:</Label>
          <Input
            type="select"
            name="pizzaType"
            id="pizzaType"
            required
            value={formData.pizzaType}
            onChange={handleChange}
          >
            <option>Pizza Margerita (NOK 100)</option>
            <option>Hawai Pizza (NOK 115)</option>
            <option>Gyros Pizza (NOK 125)</option>
          </Input>
        </FormGroup>

        <FormGroup tag="fieldset" className="mb-1rem">
          <Label for="pizzaStyle">Pizza Style:</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="pizzaStyle"
                required
                value={formData.pizzaStyle}
                onChange={handleChange}
              />{" "}
              American
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="pizzaStyle"
                required
                value={formData.pizzaStyle}
                onChange={handleChange}
              />{" "}
              Italian
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup className="mb-1rem">
          <Label for="quantity">Quantity:</Label>
          <Input
            type="number"
            name="quantity"
            id="quantity"
            placeholder="How many pizzas you want"
            required
            value={formData.quantity}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-1rem">
          <Label for="fullName">Full Name:</Label>
          <Input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Your full name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-1rem">
          <Label for="address">Address:</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="Your address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-1rem">
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="mb-1rem">
          <Label for="phoneNumber">Phone Number:</Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Your phone number"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default NewOrders;
