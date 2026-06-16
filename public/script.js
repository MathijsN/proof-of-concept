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

            if (!form.hasAttribute('data-enhanced')) {
                return
            }

            e.preventDefault()

            const closestLoader = e.submitter.querySelector('.loader')

            if (closestLoader) {
                closestLoader.style.display = "block"
            }

            let formData = new FormData(form)

            if (e.submitter) {
                formData.append(e.submitter.name, e.submitter.value)
            }

            const res = await fetch(form.action, {
                method: 'POST',
                body: new URLSearchParams(formData)
            })


            if (res.ok) {
                const responseData = await res.text()
                const parser = new DOMParser()
                const responseDOM = parser.parseFromString(responseData, 'text/html')

                const newState = responseDOM.querySelector('[data-enhanced="' + form.getAttribute('data-enhanced') + '"]')

                form.outerHTML = newState.outerHTML

                if (closestLoader) {
                    closestLoader.style.display = "none"
                }
            }
        })
    })
}

console.log(quizState)