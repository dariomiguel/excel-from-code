import XlsxPopulate from "xlsx-populate";

//Con promesas
// XlsxPopulate.fromBlankAsync()
//     .then(workbook => {
//         workbook.sheet(0).cell("A1").value("Hello World!");
//         return workbook.toFileAsync("./salida.xlsx");
//     })

//Con Async-Await
async function main(){
    const workbook = await XlsxPopulate.fromBlankAsync();
    workbook.sheet(0).cell("A1").value("Hello World 2!!");
    workbook.toFileAsync("./salida2.xlsx");
}

main();