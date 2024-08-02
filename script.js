let familyMembers = [];
let membersToAdd = 0;

function setNumberOfMembers() {
    const numberOfMembersInput = document.getElementById('number-of-members');
    membersToAdd = parseInt(numberOfMembersInput.value, 10);

    if (membersToAdd > 0) {
        document.getElementById('initial-form').style.display = 'none';
        document.getElementById('family-form').style.display = 'block';
        alert('Great! Let\'s start adding family members.');
    } else {
        alert('Please enter a valid number of family members.');
    }
}

function addFamilyMember() {
    const name = document.getElementById('name').value.trim();
    const relation = document.getElementById('relation').value.trim();
    const parent = document.getElementById('parent').value.trim();

    if (name === '' || relation === '') {
        alert('Please enter both name and relation.');
        return;
    }

    const newMember = {
        name: name,
        relation: relation,
        parent: parent
    };

    familyMembers.push(newMember);

    document.getElementById('name').value = '';
    document.getElementById('relation').value = '';
    document.getElementById('parent').value = '';

    membersToAdd--;

    if (membersToAdd > 0) {
        alert(`${membersToAdd} more member(s) to add.`);
    } else {
        document.getElementById('family-form').style.display = 'none';
        alert('All members added! Here is your family tree.');
        displayFamilyTree();
    }
}

function displayFamilyTree() {
    const familyTreeDiv = document.getElementById('family-tree');
    familyTreeDiv.innerHTML = '';

    const treeStructure = buildTreeStructure();

    familyTreeDiv.appendChild(treeStructure);
}

function buildTreeStructure() {
    const root = document.createElement('div');
    root.classList.add('tree-root');

    const rootMembers = familyMembers.filter(member => !member.parent);

    rootMembers.forEach(member => {
        const memberElement = createMemberElement(member);
        root.appendChild(memberElement);
        addChildren(memberElement, member.name);
    });

    return root;
}

function createMemberElement(member) {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('family-member');
    memberDiv.innerHTML = `<p><strong>${member.name}</strong></p><p>${member.relation}</p>`;
    return memberDiv;
}

function addChildren(parentElement, parentName) {
    const children = familyMembers.filter(member => member.parent === parentName);

    if (children.length > 0) {
        const childrenContainer = document.createElement('div');
        childrenContainer.classList.add('children-container');

        children.forEach(child => {
            const childElement = createMemberElement(child);
            childrenContainer.appendChild(childElement);
            addChildren(childElement, child.name);
        });

        parentElement.appendChild(childrenContainer);
    }
}
