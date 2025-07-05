const URL_BASE = "http://localhost:3000/pets";

const api = {
    async buscarInfosDosPets() {
        try {
            // const resposta = await fetch(`${URL_BASE}`);
            // return await resposta.json();

            const resposta = await axios.get(`${URL_BASE}`);
            return await resposta.data;
        } catch (error) {
            alert('Erro ao buscar os dados');
            throw error;
        };
    },

    async salvarPet(pet) {
        try {
            // const resposta = await fetch(`${URL_BASE}`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(pet)
            // });

            // return await resposta.json();

            const resposta = await axios.post(`${URL_BASE}`, pet);
            return await resposta.data;

        } catch (error) {
            alert('Erro ao salvar o pet. Tente novamente mais tarde.');
            throw error;
        };
    },

    async buscarPetPorId(id) {
        try {
            // const resposta = await fetch(`${URL_BASE}/${id}`);
            // return await resposta.json();

            const resposta = await axios.get(`${URL_BASE}/${id}`);
            return await resposta.data;

        } catch (error) {
            alert('Erro ao buscar o pet. Tente novamente mais tarde.');
            throw error;
        };
    },

    async editarPet(pet) {
        try {
            // const resposta = await fetch(`${URL_BASE}/${pet.id}`, {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(pet)
            // });
            // return await resposta.json();

            const resposta = await axios.put(`${URL_BASE}/${pet.id}`, pet);
            return await resposta.data;

        } catch (error) {
            alert('Erro ao editar o pet. Tente novamente mais tarde.');
            throw error;
        }
    },

    async deletarPet(id) {
        try {
            // const resposta = await fetch(`${URL_BASE}/${id}`, {
            //     method: "DELETE"
            // });

            const resposta = await axios.delete(`${URL_BASE}/${id}`);

        } catch (error) {
            alert('Erro ao excluir o pet. Tente novamente mais tarde.');
            throw error;
        };
    }
};

export default api;