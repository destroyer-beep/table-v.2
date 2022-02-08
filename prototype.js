function()
{
	SimpleElement.apply(this, arguments);

	this.transform.defaultWidth = 4292;
	this.transform.defaultHeight = 342;

  var GP41_wells = {
    "4A06": [1, 2, 3],
    "4A07": [1, 2, 3],
    "4A11": [1, 2, 3, 4],
    "4A16": [1, 2, 3, 4],
    "4A17": [1, 2, 3, 4],
    "4A18": [1, 2, 3, 4, 5],
    "4A14": [1, 2, 3, 4, 5],
    "4A15": [1, 2, 3, 4],
    "4A23": [1, 2, 3],
    "4A09": [1, 2, 3],
    "4A08": [1, 2, 3, 4],
    "4A05": [1, 2, 3, 4],
    "4A20": [1, 2, 3, 4],
    "4A25": [1, 2],
    "4A03": [1, 2, 3, 4],
    "4A24": [1, 2],
    "4A01": [1, 2, 3]
}

var GP41_branchs = ["4A06", "4A07", "4A11", "4A16", "4A17", "4A18", "4A14", "4A15", "4A23", "4A09", "4A08", "4A05", "4A20", "4A25", "4A03", "4A24", "4A01"];

var GP51_wells = {
    "5A10": [1, 2, 3, 4],
    "5A11": [1, 2, 3, 4, 5],
    "5A15": [1, 2, 3, 4],
    "5A16": [1, 2, 3, 4, 5],
    "5A17": [1, 2, 3, 4, 5],
    "5A23": [1, 2, 3, 4, 5],
    "5A05": [1, 2, 3, 4],
    "5A12": [1, 2, 3, 4],
    "5A22": [1, 2, 3, 4],
    "5A09": [1, 2, 3, 4],
    "5A14": [2, 3, 4],
    "5A21": [1, 2, 3, 4],
    "5A19": [1, 2, 3, 4],
    "5A06": [1, 2, 4],
    "5A24": [1, 2, 3],
    "5A25": [2, 3],
    "5A01": [1, 2, 3, 4],
    "5A03": [1, 2, 3, 4],
    "5A07": [1, 2, 3],
    "5A20": [1, 2, 3, 4],
    "5A02": [1, 2, 3, 4]
}

var GP51_branchs = ["5A10", "5A11", "5A15", "5A16", "5A17", "5A23", "5A05", "5A12", "5A22", "5A09", "5A14", "5A21", "5A19", "5A06", "5A24", "5A25", "5A01", "5A03", "5A07", "5A20", "5A02"];
var GP_41_table = document.getElementById('table-branchs-GP-41');
var GP_51_table = document.getElementById('table-branchs-GP-51');
var tableParameters = document.querySelectorAll('.parameters-item');


function renderTable(branchs, wells, parameters, table) {
  parameters.forEach(function(param) {
    if (param.id === "parameter-name") {
          branchs.forEach(function(item) {
            table.innerHTML += `
                  <div class="col-${item} table-col">
                    <div class="branch-item" id="branch-name-${item}">
                      ${item}
                    </div>
                  </div>
                `
      })
    } else if (param.id === "parameter-number") {
      branchs.forEach(function(item) {
        var branchCol = document.querySelector(`.col-${item}`);
        branchCol.innerHTML += `
          <div class="well-number-box well-number-box-${item}">
          </div>
        `

        wells[item].forEach(function(well) {
          var wellBox = document.querySelector(`.well-number-box-${item}`);
          wellBox.innerHTML += `
            <div class="well-number-${item}-${well}">${item}-${well}</div>
          `
        })
      })
    } else {
      branchs.forEach(function(branch) {
        var branchCol = document.querySelector(`.col-${branch}`);
        branchCol.innerHTML += `
          <div class="${param.id}-${branch}-box table-parameter-box">
          </div>
        `

        wells[branch].forEach(function(well) {
          var wellBox = document.querySelector(`.${param.id}-${branch}-box`);
          wellBox.innerHTML += `
            <div class="table-parameter-item"  id="${param.id}-${branch}-${well}">no</div>
          `
        })
      })
    }
  })
}

renderTable(GP51_branchs, GP51_wells, tableParameters, GP_51_table);

var parametersWellsList = document.querySelectorAll('.table-parameter-item');
parametersWellsList.forEach(function(item) {
  paramValue = new DynamicParameter(Type.Numeric, item.id);
  item.textContent = paramValue;
})
}
