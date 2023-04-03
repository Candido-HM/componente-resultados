window.addEventListener('load', () => {

    fetch('data.json')
    .then(reponse => reponse.json())
    .then(data => {
        const reaction = data[0];
        const img_reaction = document.querySelector('.img-reaction');
        const info_reaction = document.querySelector('.text-reaction');
        const score_reaction = document.querySelector('.score-reaction');
        img_reaction.style.backgroundImage = `url(${reaction.icon})`
        info_reaction.textContent = `${reaction.category}`;
        score_reaction.textContent = `${reaction.score}`

        const memory = data [1];
        const img_memory = document.querySelector('.img-memory');
        const info_memory = document.querySelector('.text-memory');
        const score_memory = document.querySelector('.score-memory');
        img_memory.style.backgroundImage = `url(${memory.icon})`;
        info_memory.textContent = `${memory.category}`
        score_memory.textContent = `${memory.score}`

        const verbal = data[2];
        const img_verbal = document.querySelector('.img-verbal');
        const info_verbal = document.querySelector('.text-verbal');
        const score_verbal = document.querySelector('.score-verbal');
        img_verbal.style.backgroundImage = `url(${verbal.icon})`;
        info_verbal.textContent = `${verbal.category}`;
        score_verbal.textContent = `${verbal.score}`;

        const visual = data[3];
        const img_visual = document.querySelector('.img-visual');
        const info_visual = document.querySelector('.text-visual');
        const score_visual = document.querySelector('.score-visual');
        img_visual.style.backgroundImage = `url(${visual.icon})`;
        info_visual.textContent = `${visual.category}`;
        score_visual.textContent = `${visual.score}`;
        
    })
    .catch(error => console.error(error));
})