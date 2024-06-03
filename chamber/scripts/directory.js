let gridView = true;

function toggleView() {
  gridView = !gridView;
  const container = document.getElementById('membersContainer');
  container.className = gridView ? 'grid-view' : 'list-view';
}

function fetchMembers() {
  fetch('data/members.json')
    .then(response => response.json())
    .then(data => displayMembers(data))
    .catch(error => console.error('Error fetching members:', error));
}

function displayMembers(members) {
  const container = document.getElementById('membersContainer');
  container.innerHTML = '';

  members.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.classList.add('member');

    memberCard.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <div>
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phoneNumber}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
        
      </div>
    `;

    container.appendChild(memberCard);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchMembers();
});





