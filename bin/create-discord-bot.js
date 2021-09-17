#!/usr/bin/env node

import cli from "../lib/index.js";

cli().catch(err => console.log(err.message || err));
