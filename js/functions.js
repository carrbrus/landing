"use strict";

let fetchFakerData =  (url) => {

    return fetch(url)
        .then(response => {

            // Verificar si la respuesta es exitosa (status 200-299)
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            return response.json();

        })
        .then(data => {

            // Respuesta exitosa
            return {
                success: true,
                body: data
            };

        })
        .catch(error => {

            return {
                success: false,
                error: `Error en la petición: ${error.message}`
            };

        });
}

export { fetchFakerData }

const renderCards = (items) => {
    const container = document.getElementById("skeleton-container");
    if (!container) return;
    container.innerHTML = ""; // Limpiar contenido previo

    items.slice(0, 3).forEach(item => {
        const card = `
            <div class="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow space-y-4">
                <div class="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span class="text-2xl font-bold text-gray-400 dark:text-gray-600">📚</span>
                </div>
                <div class="text-xl font-semibold text-gray-900 dark:text-white">${item.title}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">Autor: ${item.author} | Género: ${item.genre}</div>
                <div class="text-gray-700 dark:text-gray-300 text-sm">${item.content}</div>
            </div>
        `;
        container.innerHTML += card;
    });
};

export { renderCards };