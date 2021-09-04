// Includes an external .js file

// @include 'importImagesToNewLayerBaruRename.js'
// @include 'saveImageToJpgForRename.js'
// @include 'delete1Layer.js'

var textFile = new File(Folder.desktop+ '/namaFileLama.txt');
var listnamaFileLama = readText(textFile).split('\n');

var textFile = new File(Folder.desktop+ '/namaFileBaru.txt');
var listnamaFileBaru = readText(textFile).split('\n');

if (listnamaFileLama.length == listnamaFileBaru.length) {
	for (i in listnamaFileBaru) {
	
	importImagesToNewLayerBaruRename(listnamaFileLama[i]);
	saveImageToJpgForRename(listnamaFileBaru[i]);
	delete1Layer();
	}
	alert("DONE!\n\n" + "Banyak logo yang diexport: " + listnamaFileBaru.length)
	
	} else {
		alert("Tolong check lagi listnya.\n\nJumlah baris model number dan logo file tidak sama")
	}


function readText(file){  
     if (textFile.exists) {  
    textFile.encoding = "UTF8";  
    textFile.lineFeed = "unix";  
    textFile.open("r", "TEXT", "????");  
    var str = textFile.read();  
    textFile.close();  
    return str;  
    }  
}  