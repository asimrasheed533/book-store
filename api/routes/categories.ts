import { Hono } from "hono";
import prisma from "../lib/prisma";

const categories = new Hono();

export default categories;
