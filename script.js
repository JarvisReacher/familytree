// Array to hold family members
let familyMembers = [];

// Function to add a family member
function addFamilyMember() {
    // Get form values
    const name = document.getElementById('name').value;
    const relation = document.getElementById('relation').value;

    // Create a new family member object
    const newMember = {
        name: name,
        relation: relation
    };

    // Add new member to the array
    familyMembers.push(newMember);

    // Update the family tree display
    displayFamilyTree();
}

// Function to display the family tree
function displayFamilyTree() {
    const familyTreeDiv = document.getElementById('family-tree');
    familyTreeDiv.innerHTML = '';

    familyMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('family-member');
        memberDiv.innerHTML = `<p>${member.name}</p><p>${member.relation}</p>`;
        familyTreeDiv.appendChild(memberDiv);
    });
}

