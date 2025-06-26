const investmentsData = [
    { nome: "Tesouro Selic", tipo: "Renda Fixa", rentabilidade: "10.75%" },
    { nome: "CDB Banco X", tipo: "Renda Fixa", rentabilidade: "11.00%" },
    { nome: "Fundo Imobiliário Y", tipo: "Renda Variável", rentabilidade: "9.50%" },
    { nome: "Ações PETR4", tipo: "Renda Variável", rentabilidade: "15.00%" },
    { nome: "Tesouro Prefixado", tipo: "Renda Fixa", rentabilidade: "10.00%" },
    { nome: "LCI Bradesco", tipo: "Renda Fixa", rentabilidade: "9.80%" },

];

const filterInput = document.getElementById("filtro-investimentos");
const tableBody = document.querySelector("#tabela-investimentos tbody");

function renderTableRows(data) {
    tableBody.innerHTML = '';

    if (data.length === 0) {
        const noResultsRow = document.createElement("tr");
        const noResultsCell = document.createElement("td");
        noResultsCell.colSpan = 3;
        noResultsCell.textContent = "Nenhum resultado encontrado.";
        noResultsCell.style.textAlign = "center";
        noResultsRow.appendChild(noResultsCell);
        tableBody.appendChild(noResultsRow);
        return;
    }

    data.forEach(investment => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = investment.nome;
        row.appendChild(nameCell);

        const typeCell = document.createElement("td");
        typeCell.textContent = investment.tipo;
        row.appendChild(typeCell);

        const profitabilityCell = document.createElement("td");
        profitabilityCell.textContent = investment.rentabilidade;
        row.appendChild(profitabilityCell);

        tableBody.appendChild(row);
    });
}

filterInput.addEventListener("input", () => {
    const searchTerm = filterInput.value.trim().toLowerCase();

    let filteredData = [];

    if (searchTerm === "") {
        filteredData = investmentsData;
    } else {
        filteredData = investmentsData.filter(investment =>
            investment.nome.toLowerCase().includes(searchTerm)
        );
    }

    renderTableRows(filteredData);
});

document.addEventListener("DOMContentLoaded", () => {
    renderTableRows(investmentsData);
}); 
