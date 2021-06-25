import 'reflect-metadata';
import * as dotenv from "dotenv";
import { create, start } from "./server";

dotenv.config();

const server = create();

start(server);
