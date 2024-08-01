let familyMembers = [];

function addFamilyMember() {
    const name = document.getElementById('name').value.trim();
    const relation = document.getElementById('relation').value.trim();

    if (name === '' || relation === '') {
        alert('Please enter both name and relation.');
        return;
    }

    const newMember = {
        name: name,
        relation: relation
    };

    familyMembers.push(newMember);

    document.getElementById('name').value = '';
    document.getElementById('relation').value = '';

    displayFamilyTree();
}

function displayFamilyTree() {
    const familyTreeDiv = document.getElementById('family-tree');
    familyTreeDiv.innerHTML = '';

    const familyTreeWrapper = document.createElement('div');
    familyTreeWrapper.classList.add('family-tree-wrapper');

    familyMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('family-member');
        memberDiv.innerHTML = `<p><strong>${member.name}</strong></p><p>${member.relation}</p>`;
        familyTreeWrapper.appendChild(memberDiv);
    });

    familyTreeDiv.appendChild(familyTreeWrapper);
}
