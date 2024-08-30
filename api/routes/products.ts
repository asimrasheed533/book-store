import { Hono } from "hono";
import prisma from "../lib/prisma";

const products = new Hono();

export default products;
