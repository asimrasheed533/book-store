const express = require("express");
const router = express.Router();
const Order = require("../model/order");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, cityTown, number, email, products } = req.body;

    const newOrder = new Order({
      firstName,
      lastName,
      cityTown,
      number,
      email,
      products,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      data: newOrder,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json({
      message: "Orders retrieved successfully",
      data: orders,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order retrieved successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { firstName, lastName, cityTown, number, email, products } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, cityTown, number, email, products },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order deleted successfully",
      data: deletedOrder,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
