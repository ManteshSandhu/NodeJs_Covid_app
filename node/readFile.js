const fs = require("fs");
const fsPromises = require('fs').promises
module.exports= {
    getFile1: async () => {return await fsPromises.readFile("schoolcovidsummary.json"); },
   getFile2: async () => {return await fsPromises.readFile("schoolcovidtesting.json");},
   getFile3: async () => {return await fsPromises.readFile("schoolpartnersactivecovid.json");},
   getFile4: async () => {return await fsPromises.readFile("cases_by_status_and_phu.json");},
   getFile5: async () => {return await fsPromises.readFile("ongoing_outbreaks.json");},
   }