window.onload = function () {
    //mi történik, ha betöltődött az oldal
    drawPascal(10);
    
}

var drawPascal = function (sorSzam) {
    //itt történik a Pascal háromszög gomb elemeinek létrehozása és elhelyezése

    var pascalDiv = document.getElementById('pascal');
    for (var sor = 0; sor < 10; sor++) {

        var ujSorDiv = document.createElement('div');
        ujSorDiv.classList.add('sor');
        pascalDiv.appendChild(ujSorDiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujElemDiv = document.createElement('div');
            ujElemDiv.classList.add('elem');
            ujElemDiv.innerText =
                faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop));
            ujSorDiv.appendChild(ujElemDiv);
        }
    }
   
}

//új DOM elem létrehozása
var ujElem = document.createElement('div');
ujElem.classList.add('újosztáy');
ujElem.id = 'újID';
ujElem.innerText = '0';
ujElem.innerHTML = '<div>Hello!</div>';

var szuloElem = document.getElementById('szulo'); //szülő elem meghatározása
szuloElem.appendChild(ujElem);