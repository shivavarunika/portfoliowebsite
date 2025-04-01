function showCertificate(skillName, certImagePath) {
    document.getElementById('certTitle').textContent = skillName + " Certificate";
    let certImage = document.getElementById('certImage');
    certImage.src = certImagePath;
    certImage.style.display = 'block';

    // Hide the link section when certificate is shown
    document.getElementById('linkSection').style.display = 'none';
}

// Function to display a single link
function showLink(skillName, link) {
    // Hide the certificate section before displaying the link
    document.getElementById('certImage').style.display = 'none';
    document.getElementById('linkSection').style.display = 'block'; // Show the link section

    document.getElementById('certTitle').textContent = skillName + " Resource";

    let linkSection = document.getElementById('linkSection');
    linkSection.innerHTML = ''; // Clear any previous content

    if (link) {
        let linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.text;
        linkElement.target = "_blank";
        linkSection.appendChild(linkElement);
    }
}
