document.addEventListener("DOMContentLoaded", function () {
    // Função para abrir o modal
    function abrirModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
        }
    }

    // Função para fechar o modal
    function fecharModal(modal) {
        if (modal) {
            modal.close();
        }
    }

    // Evento para abrir o Modal de Nova Reserva (modal-1)
    document.querySelector(".btn-reserva").addEventListener("click", function () {
        abrirModal("modal-1");
    });

    // Evento para abrir o Modal da Caixa de Mensagem (modal-2)
    document.querySelector(".caixa-mensagem").addEventListener("click", function () {
        abrirModal("modal-2");
    });

    // Adiciona evento de fechar modal em todos os botões de fechar
    document.querySelectorAll(".modal-close").forEach((botao) => {
        botao.addEventListener("click", function () {
            const modal = this.closest("dialog");
            fecharModal(modal);
        });
    });
    // Fecha o modal ao clicar fora dele
    document.querySelectorAll("dialog").forEach((modal) => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                fecharModal(modal);
            }
        });
    });
});

