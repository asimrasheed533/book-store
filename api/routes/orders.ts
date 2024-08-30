import { Hono } from "hono";
import prisma from "../lib/prisma";

const orders = new Hono();

export default orders;
