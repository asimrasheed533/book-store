import { Hono } from "hono";
import prisma from "../lib/prisma";

const users = new Hono();

export default users;
