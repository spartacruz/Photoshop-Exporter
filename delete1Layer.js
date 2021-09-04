
function delete1Layer() {
	
var idDlt = charIDToTypeID( "Dlt " );
    var desc245 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref194 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref194.putEnumerated( idLyr, idOrdn, idTrgt );
    desc245.putReference( idnull, ref194 );
executeAction( idDlt, desc245, DialogModes.NO );
}