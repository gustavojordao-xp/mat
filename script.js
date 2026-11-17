// Arquivo: script.js (Interatividade, Linha do Tempo e Matemática 2)
document.addEventListener('DOMContentLoaded', () => {
    // Cálculo de Torque Mecânico: τ = F × d
    function calcularTorque(forcaNewtons, distanciaMetros) {
        return (forcaNewtons * distanciaMetros).toFixed(1) + ' N·m';
    }

    // Cálculo de Orçamento da Oficina (Matemática Financeira)
    function calcularOrcamento(custoPecas, horasTecnicas, margemPercentual) {
        const lucroPecas = custoPecas * (margemPercentual / 100);
        const maoDeObra = horasTecnicas * 140;
        return custoPecas + lucroPecas + maoDeObra;
    }

    console.log('Portal Mecânico Automotivo - Turma 3º B carregado!');
});
