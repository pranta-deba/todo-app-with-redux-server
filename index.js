require("dotenv").config();
import express from "express";

const app = express();

const port = process.env.PORT || 5000;