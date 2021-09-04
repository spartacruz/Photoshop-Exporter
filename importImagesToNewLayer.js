//Function to import new images to an layer

function importImagesToNewLayer(namePhotoFile) {
	
	var idPlc = charIDToTypeID( "Plc " );
    var desc196 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    //desc196.putPath( idnull, new File( "C:\\Users\\yuri\\Desktop\\Yuri's work\\copyFileImageFromMagentoFolder\\photo_temp7\\" + namePhotoFile ) );
	desc196.putPath( idnull, new File( "/C/Users/yuri/Desktop/Yuri's work/copyFileImageFromMagentoFolder/photo_temp7/" + namePhotoFile ) );
    var idFTcs = charIDToTypeID( "FTcs" );
    var idQCSt = charIDToTypeID( "QCSt" );
    var idQcsa = charIDToTypeID( "Qcsa" );
    desc196.putEnumerated( idFTcs, idQCSt, idQcsa );
    var idOfst = charIDToTypeID( "Ofst" );
        var desc197 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc197.putUnitDouble( idHrzn, idPxl, 0.000000 );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc197.putUnitDouble( idVrtc, idPxl, 0.000000 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc196.putObject( idOfst, idOfst, desc197 );
	executeAction( idPlc, desc196, DialogModes.NO );
/*
// =======================================================
var idPlc = charIDToTypeID( "Plc " );
    var desc7 = new ActionDescriptor();
    var idIdnt = charIDToTypeID( "Idnt" );
    desc7.putInteger( idIdnt, 12 );
    var idnull = charIDToTypeID( "null" );
    desc7.putPath( idnull, new File( "/C/Users/yuri/Documents/Yuri's work/0. Assorted/_Brand/_Brand Edited/" + namePhotoFile ) );
    var idFTcs = charIDToTypeID( "FTcs" );
    var idQCSt = charIDToTypeID( "QCSt" );
    var idQcsa = charIDToTypeID( "Qcsa" );
    desc7.putEnumerated( idFTcs, idQCSt, idQcsa );
    var idOfst = charIDToTypeID( "Ofst" );
        var desc8 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc8.putUnitDouble( idHrzn, idPxl, 0.000000 );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc8.putUnitDouble( idVrtc, idPxl, 0.000000 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc7.putObject( idOfst, idOfst, desc8 );
executeAction( idPlc, desc7, DialogModes.NO );

// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc9 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref1.putProperty( idChnl, idfsel );
    desc9.putReference( idnull, ref1 );
    var idT = charIDToTypeID( "T   " );
        var ref2 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idTrsp = charIDToTypeID( "Trsp" );
        ref2.putEnumerated( idChnl, idChnl, idTrsp );
    desc9.putReference( idT, ref2 );
executeAction( idsetd, desc9, DialogModes.NO );

// =======================================================
var idCrop = charIDToTypeID( "Crop" );
    var desc11 = new ActionDescriptor();
    var idDlt = charIDToTypeID( "Dlt " );
    desc11.putBoolean( idDlt, true );
executeAction( idCrop, desc11, DialogModes.NO );

// =======================================================
var idsetd = charIDToTypeID( "setd" );
    var desc13 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref3 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref3.putProperty( idChnl, idfsel );
    desc13.putReference( idnull, ref3 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc13.putEnumerated( idT, idOrdn, idNone );
executeAction( idsetd, desc13, DialogModes.NO );
*/
}