if (window.location.hash) {
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.classList.add('no-animation')
    })
}

function checkOnceInViewport(sectionId, callback) {
    const section = document.getElementById(sectionId);
    let hasSeen = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasSeen) {
                hasSeen = true;
                observer.disconnect();
                callback(section);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
}

// Usage
checkOnceInViewport('quiz', (section) => {
    console.log('Section was seen once!');
    document.querySelector('.backToQuiz').classList.add("seen")
    document.querySelector('.backToTop').classList.add("sibling-seen")
});

const forms = document.querySelectorAll('form')

if (forms) {
    forms.forEach(form => {
        form.addEventListener('submit', async function (e) {
            e.preventDefault()

            document.querySelector('.loader').style.display = "block"

            let formData = new FormData(form)

            if (e.submitter) {
                formData.append(e.submitter.name, e.submitter.value)
            }

            const res = await fetch(form.action, {
                method: 'POST',
                body: new URLSearchParams(formData)
            })
            if (res.ok) {
                const responseData = await res.json()

                console.log(responseData)
                quizState = responseData

                document.querySelector('.loader').style.display = "none"
            }
        })
    })
}

console.log(quizState)