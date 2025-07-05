import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPets();

    const formPet = document.getElementById('pet-form');
    formPet.addEventListener('submit', manipularSubmissaoDoForm);
});

async function manipularSubmissaoDoForm(evento) {
    evento.preventDefault();

    const id = document.getElementById('pet-id').value;
    const nome = document.getElementById('pet-nome').value;
    const especie = document.getElementById('pet-especie').value;
    const raca = document.getElementById('pet-raca').value;

    try {
        if(id) {
            await api.editarPet({ id, nome, especie, raca });
        } else {
            await api.salvarPet({ nome, especie, raca });
        }
        ui.renderizarPets();

    } catch (error) {
        console.error('Erro ao salvar o pet: ', error);
        alert('Erro ao salvar o pet. Tente novamente mais tarde.');
    };
};

