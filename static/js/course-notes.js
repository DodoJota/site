// course-notes.js

document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('videoPlayer');
    const notesTextarea = document.getElementById('notes-textarea');
    const saveButton = document.getElementById('save-notes');
    let notesLoaded = false; // Flag para garantir que as anotações sejam carregadas apenas uma vez

    // Função para carregar anotações do localStorage
    function loadNotes() {
        if (!notesLoaded) {
            const videoSrc = videoElement.currentSrc;
            const savedNotes = localStorage.getItem(videoSrc);
            if (savedNotes) {
                notesTextarea.value = savedNotes;
            } else {
                notesTextarea.value = '';
            }
            notesLoaded = true; // Marca as anotações como carregadas
        }
    }

    // Função para salvar anotações no localStorage
    function saveNotes() {
        const videoSrc = videoElement.currentSrc;
        const notes = notesTextarea.value;
        localStorage.setItem(videoSrc, notes);
        alert('Anotações salvas com sucesso!');
    }

    // Carregar anotações quando o vídeo está pronto para ser reproduzido
    videoElement.addEventListener('canplay', loadNotes);

    // Salvar anotações quando o botão é clicado
    saveButton.addEventListener('click', saveNotes);

    // Limpar anotações quando um novo vídeo é carregado
    videoElement.addEventListener('emptied', function() {
        notesTextarea.value = '';
        notesLoaded = false; // Reseta a flag quando um novo vídeo é carregado
    });
});