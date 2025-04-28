document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const city = params.get('city') || 'Your City';
    const state = params.get('state') || 'Your State';

    const locationEl = document.getElementById('location');
    if (locationEl) {
        locationEl.textContent = `${city}, ${state}`;
    }

    const charityList = [
        {
            name: 'Helping Hands Foundation',
            description: 'Helping underprivileged families with food, education, and training.',
            images: ['charityprofile1.JPG', 'charityprofile2.JPG', 'charityprofile3.JPG'],
            details: 'We offer job training programs, tutoring for kids, and community food banks.'
        },
        {
            name: 'Education for All',
            description: 'Providing free education and resources for children in need.',
            images: ['charityprofile4.JPG', 'charityprofile5.JPG', 'charityprofile6.JPG'],
            details: 'We build free schools in low-income areas and provide online learning tools.'
        },
        {
            name: 'Green Earth Initiative',
            description: 'Working to reduce environmental waste and promote sustainable living.',
            images: ['charityprofile7.JPG', 'charityprofile8.JPG', 'charityprofile9.JPG'],
            details: 'Join us for monthly cleanups, tree planting drives, and sustainability workshops.'
        }
    ];

    const container = document.getElementById('charityContainer');
    if (!container) {
        console.warn('charityContainer not found on the page.');
        return;
    }

    charityList.forEach(function (charity) {
        const card = document.createElement('div');
        card.className = 'charity-card';

        const content = document.createElement('div');
        content.className = 'charity-card-content';

        const title = document.createElement('h2');
        title.className = 'charity-name';
        title.textContent = charity.name;

        const desc = document.createElement('p');
        desc.className = 'charity-description';
        desc.textContent = charity.description;

        content.appendChild(title);
        content.appendChild(desc);

        const imageContainer = document.createElement('div');
        imageContainer.className = 'charity-images';

        charity.images.forEach(function (imgSrc) {
            const wrapper = document.createElement('div');
            wrapper.className = 'image-hover-container';

            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${charity.name} image`;

            const overlay = document.createElement('div');
            overlay.className = 'hover-overlay';

            const overlayText = document.createElement('p');
            overlayText.textContent = charity.details;

            overlay.appendChild(overlayText);
            wrapper.appendChild(img);
            wrapper.appendChild(overlay);
            imageContainer.appendChild(wrapper);
        });

        content.appendChild(imageContainer);

        const volunteerLink = document.createElement('a');
        volunteerLink.href = 'contact.html';
        volunteerLink.className = 'volunteer-button';
        volunteerLink.textContent = 'Volunteer Now';

        content.appendChild(volunteerLink);
        card.appendChild(content);
        container.appendChild(card);
    });
});