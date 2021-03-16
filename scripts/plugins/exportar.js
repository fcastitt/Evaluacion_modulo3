$(document).ready(function () {

    var tableId = 'tablaVisitas';
    var ExportButtons = document.getElementById(tableId);

    var instance = new TableExport(ExportButtons, {
        formats: ['txt', 'csv', 'xls'],
        ignoreCols: 5,   //Para ignorar una columna Chequeo de asesoria  posiciones de 0-5
        exportButtons: false
    });
    // **** jQuery **************************
    //    $(ExportButtons).tableExport({
    //        formats: ['xls'],
    //        exportButtons: false
    //    });
    // **************************************

    var TXT = instance.CONSTANTS.FORMAT.TXT;
    var CSV = instance.CONSTANTS.FORMAT.CSV;
    var XLS = instance.CONSTANTS.FORMAT.XLS;

    //                                          // "id"  // format
    var exportDataTXT = instance.getExportData()[tableId][TXT];
    var exportDataCSV = instance.getExportData()[tableId][CSV];
    var exportDataXLS = instance.getExportData()[tableId][XLS];

    // get filesize
    var bytesTXT = instance.getFileSize(exportDataTXT.data, exportDataTXT.fileExtension);
    var bytesCSV = instance.getFileSize(exportDataCSV.data, exportDataCSV.fileExtension);
    var bytesXLS = instance.getFileSize(exportDataXLS.data, exportDataXLS.fileExtension);

    console.log('filesize (TXT):', bytesTXT + 'B');
    console.log('filesize (CSV):', bytesCSV + 'B');
    console.log('filesize (XLS):', bytesXLS + 'B');

    var TXTbutton = document.getElementById('exportarTXT');
    TXTbutton.addEventListener('click', function (e) {
        //                   // data             // mime                 // name                 // extension
        instance.export2file(exportDataTXT.data, exportDataTXT.mimeType, exportDataTXT.filename, exportDataTXT.fileExtension);
    });

    var CSVbutton = document.getElementById('exportarCSV');
    CSVbutton.addEventListener('click', function (e) {
        //                   // data             // mime                 // name                 // extension
        instance.export2file(exportDataCSV.data, exportDataCSV.mimeType, exportDataCSV.filename, exportDataCSV.fileExtension);
    });

    var XLSbutton = document.getElementById('exportarXLS');
    XLSbutton.addEventListener('click', function (e) {
        //                   // data             // mime                 // name                 // extension
        instance.export2file(exportDataXLS.data, exportDataXLS.mimeType, exportDataXLS.filename, exportDataXLS.fileExtension);
    });

});