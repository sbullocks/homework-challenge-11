// setup app to listen for port 3001.
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');