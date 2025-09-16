# Overview
Sorter function to place packages in the appropriate stack based on a set of conditions. 

# Rules
Sorting of packages is based on:

1. Cubic volume (in cm) of **≥ 1,000,000** → Goes to **SPECIAL**
2. Dimension length **≥ 150 cm** → Goes to **SPECIAL**
3. Package mass **≥ 20 kg** → Goes to **SPECIAL**

When a package is considered both **heavy** (condition 3) and **bulky** (condition 1 or 2) → Goes to **REJECTED**  

Otherwise, the package is sorted to **STANDARD**.

# How to Run the Test
1. Download this repo (place in a directory of your choosing on your machine) and ensure prerequisites exist (requires at least Node.js v20 since it uses the native test framework).  
   Install Node.js (v20+) -> https://nodejs.org/en/download/current

2. In the root directory of this folder (either in your IDE terminal or something like command prompt), run
    > npm run test

3. If you want to see the coverage also you need to install the dependencies (ie. uses c8 for coverage), run:
   > npm install

   Then run:
   > npm run coverage

4. If you want to see the coverage and have auto fix of styling + enforcement of styling, (assumes you ran npm install already) run:
    > npm run fixcoverage

Note: if you have any issues with standard (#4), then be sure to run this command first from any terminal:

> npm install -g standard
