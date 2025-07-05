import api from "./api.js";

const ui = {
    async renderizarPets() {
        const listaDePets = document.getElementById('lista-pets');
        listaDePets.innerHTML = '';
        listaDePets.innerHTML = ''; // limpa antes de renderizar
        try {
            const pets = await api.buscarInfosDosPets();
            pets.forEach(ui.adicionarPetNaLista);
            // pets.forEach(pet => {
            //     const li = document.createElement('li');
            //     li.classList.add('li-pet');
            //     li.setAttribute('data-id', pet.id);
            //     li.innerHTML = `
            //         <div class="pet-especie">Espécie: ${pet.especie}</div>
            //         <div class="pet-nome">Nome: ${pet.nome}</div>
            //         <div class="pet-raca">Raça: ${pet.raca}</div>
            //     `;
            //     listaDePets.appendChild(li);
            // });
        } catch (error) {
            console.error("Erro ao obter pets: ", error);
            alert('Erro ao obter os pets. Tente novamente mais tarde.');
        };
    },

    async preencherForm(petId) {
        const pet = await api.buscarPetPorId(petId);
        document.getElementById('pet-id').value = pet.id;
        document.getElementById('pet-nome').value = pet.nome;
        document.getElementById('pet-especie').value = pet.especie;
        document.getElementById('pet-raca').value = pet.raca;
    },

    adicionarPetNaLista(pet) {
        const listaDePets = document.getElementById('lista-pets');
        const li = document.createElement('li');
        li.setAttribute("data-id", pet.id);
        li.classList.add("li-pet");

        const nomeDoPet = document.createElement('div');
        nomeDoPet.textContent = `Nome: ${pet.nome}`;
        nomeDoPet.classList.add("pet-nome");

        const especieDoPet = document.createElement('div');
        especieDoPet.textContent = `Espécie: ${pet.especie}`;
        especieDoPet.classList.add("pet-especie");

        const racaDoPet = document.createElement('div');
        racaDoPet.textContent = `Espécie: ${pet.raca}`;
        racaDoPet.classList.add("pet-raca");

        const botaoEditar = document.createElement('button');
        botaoEditar.classList.add("botao-editar");
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => ui.preencherForm(pet.id);

        const iconeEditar = document.createElement('img');
        iconeEditar.src = "assets/imagens/icone-editar.png";
        iconeEditar.alt = "Editar";
        botaoEditar.appendChild(iconeEditar);

        const botaoExcluir = document.createElement('button');
        botaoExcluir.classList.add("botao-Excluir");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.onclick = async () => {
            try {
                await api.deletarPet(pet.id);
                ui.renderizarPets();

            } catch (error) {
                console.error('Erro ao excluir o pet: ', error);
                alert('Erro ao excluir o pet. Tente novamente mais tarde.');
            };
        };

        const iconeExcluir = document.createElement('img');
        iconeExcluir.src = "assets/imagens/icone-excluir.png";
        iconeExcluir.alt = "Excluir";
        botaoExcluir.appendChild(iconeExcluir);

        li.appendChild(nomeDoPet);
        li.appendChild(especieDoPet);
        li.appendChild(racaDoPet);
        li.appendChild(botaoEditar);
        li.appendChild(botaoExcluir);
        listaDePets.appendChild(li);
    }
};

export default ui;