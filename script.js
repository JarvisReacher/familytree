// Array to hold family members
let familyMembers = [];

// Function to add a family member
function addFamilyMember() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const relation = document.getElementById('relation').value.trim();

    // Ensure both fields are filled
    if (name === '' || relation === '') {
        alert('Please enter both name and relation.');
        return;
    }

    // Create a new family member object
    const newMember = {
        name: name,
        relation: relation
    };

    // Add new member to the array
    familyMembers.push(newMember);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('relation').value = '';

    // Update the family tree display
    displayFamilyTree();
}

// Function to display the family tree
function displayFamilyTree() {
    const familyTreeDiv = document.getElementById('family-tree');
    familyTreeDiv.innerHTML = ''; // Clear existing content

    // Create a wrapper for the family tree
    const familyTreeWrapper = document.createElement('div');
    familyTreeWrapper.classList.add('family-tree-wrapper');

    // Create family tree structure (for simplicity, showing all members in a single level)
    familyMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('family-member');
        memberDiv.innerHTML = `<p><strong>${member.name}</strong></p><p>${member.relation}</p>`;
        familyTreeWrapper.appendChild(memberDiv);
    });

    familyTreeDiv.appendChild(familyTreeWrapper);
}
