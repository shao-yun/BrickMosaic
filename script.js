document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    
    // Generate slides, skipping slide 17
    let actualIndex = 0;
    for (let i = 1; i <= 32; i++) {
        if (i === 17) continue; // Skip slide 17
        
        // Create slide
        const li = document.createElement('li');
        li.className = 'carousel-slide';
        const img = document.createElement('img');
        img.src = `assets/powerpoint/ShaoYunLo_BrickMosaic_MultiLayerLEGOStylization/投影片${i}.PNG`;
        img.alt = `Slide ${i}`;
        li.appendChild(img);
        track.appendChild(li);
        
        // Create indicator
        const dot = document.createElement('div');
        dot.className = 'indicator';
        if (actualIndex === 0) dot.classList.add('active');
        
        const dotIndex = actualIndex;
        dot.addEventListener('click', () => {
            goToSlide(dotIndex);
        });
        indicatorsContainer.appendChild(dot);
        
        actualIndex++;
    }
    
    const totalSlides = actualIndex;
    
    const updateCarousel = () => {
        const slideWidth = track.clientWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Update indicators
        document.querySelectorAll('.indicator').forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };
    
    const goToSlide = (index) => {
        currentIndex = index;
        updateCarousel();
    };
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
    
    // Handle window resize to adjust carousel tracking offset
    window.addEventListener('resize', updateCarousel);
});

// Global function for Interactive Results
window.switchStage = function(cardId, stageClass, btnElement) {
    const card = document.getElementById(cardId);
    
    // Update active button
    const buttons = card.querySelectorAll('.demo-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    // Update active stage
    const stages = card.querySelectorAll('.demo-stage');
    stages.forEach(stage => {
        stage.classList.remove('active');
        if(stage.classList.contains(stageClass)) {
            stage.classList.add('active');
        }
    });
};

// Global function for Tabs
window.switchTab = function(tabId, btnElement) {
    // Update active button
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    
    // Update active tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
        if(content.id === tabId) {
            content.classList.add('active');
        }
    });
};
