// Memory data (customize these!)
const memories = [
    {
        emoji: '💕',
        title: 'Our First Encounter',
        date: 'The Beginning of Everything',
        text: 'Nagsugod ang tanan sa first week of school sa Grade 12 pa ta duha, sa una pa lng nga pagkakita nako nmo na-attract dayun ko pero gipugngan nako akong kaugalingon ug nagpanubay nmo hantud sa first time nato nagka-istorya sa hagdanan sa dihang na-aan ko nmo ug laing taw HAHAHAHAHAHAHAHHAHAHAHAHAHAHAHHAAH. Pero wa na didto na nagsugod hantud sa nagka-pares ta sa sayaw.'
    },
    {
        emoji: '✨',
        title: 'When I Knew',
        date: 'That Perfect Moment',
        text: 'Sa dihang nag-cge na ta ug praktis ug sayaw ug chat2 didto na nagka-develop ug mi-bulgar akong kauglingon pero gipaagi nlng nako sa kabuang ug pagpakatawa. Adto pa lng sa mga sayaw kahibaw na ko nga ikaw akong gusto makasayaw ug ma-partner hantud sa hantud bisan ug miingon ko ana nmo adtong tayma pero di pa ka motuo kay lagi bahi pa ka ug naa pa kay ka-"mingle" atong tayma, pero gahuwat gihapon ko ug nagpanubay sa imong mga lihok.'
    },
    {
        emoji: '🌹',
        title: 'Our Adventure',
        date: 'Exploring Together',
        text: 'Niabot na ta sa panahon nga daghan na ta ug naagian silbing mura ta ug ga-adventure sa atoang path, kahibaw kong daghan sd ta ug mga wa pagkasinabtanay. Bisan ug sa ngana langg kahibaw kong mag-stay gihapon ta conflicts are temporary and it will be fixed (charr english yarnn HAHHAHAAHAHAHHAAHHA). Pero bitaw langg kahibaw kong daghan ko ug mga mali ug mga pagkuwang ug makita mn nmo nga red flag ko usahay pasensya kaayu langgaaa, usahay naa koy mga mabuhat nga dli ko mag-hunahuna daan kung kaayuhan ba ni or dli ug mangayu ko ug dakooooong pasensya ana langg sa akong pagka-way respeto po nmo, sa imong mga ginikanan, sa akong ginikanan ug sa akong kaugalingon. Mao ng gusto ko nga naa ka para mo-guide nako always, mao ng di ko ganahan nga mawa ka nako.'
    },
    {
        emoji: '💫',
        title: 'Your Smile',
        date: 'What I Love Most',
        text: 'First of all syempre I LOVE YOUUUUU SOOOOO MUUUUUCCHHHHH MMMMWUUUUAAAAHH(way emoji sa keyboard sa laptop langg pero naa ni kiss ha). Next is ganahan ko sa imong smile mao ng di ko ganahan maguol ka, imong smile makapagaan sa akong kasingkasing bisan ug dli para sa akoa imong smile pero at least nakakita ko nmo mi-smile, pero malipay gihapon ko bisan ug saputon ka, maglagot, mangluod and etc. HHAHAHHAHAHAHAHAHAHAHHAHAH sorry langgaaa kyutieeeeee mn gud ka. Then ganahan ko sa imong pagka-diyosnon bisan ug mag-overthink ko kay lagi basin mag-madre ka ba tawgon nya ka ni Papa God sa simbahan naaahhhh, masakitan ko nga malipay para nmo pero ayaw Papa God ha kay naa pa mi future poo pero salamat kay imo mi gi-guide ug gitagaan ug blessings kanunay mwehheeheheheheh.'
    },
    {
        emoji: '🎵',
        title: 'Our Song',
        date: 'Perfect',
        text: 'The first song that we danced together, kinaunhan nga nagunitan tika sa akong mga kamot. Sa katong part nga padung ka matumba pero ako kang saw-on charrrr didto ra ako may na-hug para nmo grabeeeee saw-a sd ko langg HAHAHHAAHAHHAHAHAHAHHAHAHAAHA.'
    },
    {
        emoji: '🌟',
        title: 'Looking Forward',
        date: 'All the Days Ahead',
        text: 'Unta moabot ang panahon nga sa cge nato ug pangandoy ang puhon matumamn unta (praying). Kahibaw kong lisod pa jud nato makab-ot na sa atong sitwasyon karon mao ng maghuwat ta sa puhon. Daghan pa ta ug gustong buhaton ug pangandoy natong duha nga gusto nato nga matuman, i-ampo lng nato sa kanunay nga i-guide ta ni Papa God para asa atong puhon (Thank You daan Papa God, lablab ka sakin).'
    }
];

// Create floating hearts
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['♥', '💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(heart);
    }
}

// Countdown timer
function updateCountdown() {
    const valentine = new Date('February 14, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = valentine - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        document.querySelector('.countdown-title').textContent = 'Happy Valentine\'s Day! ♥';
        document.getElementById('countdown').innerHTML = '<div class="countdown-item"><div class="countdown-number">💝</div></div>';
    }
}

// Modal functionality
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const memoryCards = document.querySelectorAll('.memory-card');

memoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const memoryIndex = card.dataset.memory;
        const memory = memories[memoryIndex];

        document.getElementById('modalEmoji').textContent = memory.emoji;
        document.getElementById('modalTitle').textContent = memory.title;
        document.getElementById('modalDate').textContent = memory.date;
        document.getElementById('modalText').textContent = memory.text;

        modal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Initialize
createFloatingHearts();
updateCountdown();
setInterval(updateCountdown, 1000);
// Background Music - plays after first user interaction
const bgMusic = document.getElementById('bgMusic');
let musicStarted = false;

// Start music on first click anywhere on the page
document.addEventListener('click', function startMusic() {
    if (!musicStarted) {
        bgMusic.play().catch(error => {
            console.log('Music autoplay prevented:', error);
        });
        musicStarted = true;
    }
}, { once: true });

// Also try to start immediately
window.addEventListener('load', () => {
    bgMusic.play().catch(() => {
        // Autoplay blocked, will play on first click
    });
});
