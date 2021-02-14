// var wb = XLSX.utils.book_new();
// wb.Props = {
//     Title: "Putni nalog",
//     Subject: "",
//     Author: "Jugoslav Jeftenić",
//     CreatedDate: new Date(2020, 02, 01)
// };
// wb.SheetNames.push("Jugoslav");
// var ws_data = [['hello', 'world'], ['hello', 'world']];  //a row with 2 columns
// var ws = XLSX.utils.aoa_to_sheet(ws_data);
// wb.Sheets["Jugoslav"] = ws;

// console.log(ws);
// console.log(wb);

// var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
// function s2ab(s) {
//     var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
//     var view = new Uint8Array(buf);  //create uint8array as viewer
//     for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
//     return buf;
// }

// $("#generatexlsx").click(function () {
//     saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'Putni nalog-Jugoslav.xlsx');
// });




function btn_export() {
    var table1 = document.querySelector("#table1");
    var sheet = XLSX2.utils.table_to_sheet(table1);

    sheet["A2"].s = {
        font: {
            name: 'Arial',
            sz: 11,
            bold: true,
        },
        alignment: { horizontal: "center" }
    };

    sheet["A4"].s = {
        font: {
            name: 'Arial',
            sz: 12,
            bold: true,
        },
        alignment: { horizontal: "center" }
    };

    sheet["A6"].s = {
        fill: { fgColor: { rgb: 'ffccffcc' } },
        font: {
            name: 'Arial',
            sz: 12,
            bold: true,
        },
        border: {
            bottom: { style: 'thin' }
        }
    };

    sheet["B6"].s = {
        border: {
            bottom: { style: 'thin' }
        }
    };

    sheet["A8"].s = {
        fill: { fgColor: { rgb: 'ff99cc00' } },
        font: {
            name: 'Arial',
            sz: 10,
            bold: true,
        },
        alignment: { horizontal: "center" }
    };

    sheet["!cols"] = [{
        wpx: 60
    }, {
        wpx: 60
    }, {
        wpx: 60
    }, {
        wpx: 60
    }, {
        wpx: 120
    }, {
        wpx: 60
    }, {
        wpx: 60
    }, {
        wpx: 60
    }, {
        wpx: 60
    }, {
        wpx: 60
    }]; // cell column width

    openDownloadDialog(sheet2blob(sheet), 'putni nalog.xlsx');
}
