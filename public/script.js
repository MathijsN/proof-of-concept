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