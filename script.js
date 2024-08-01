body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

h1, h2 {
    color: #333;
}

#family-tree {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.family-tree-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.family-member {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px;
    background-color: #eaeaea;
    position: relative;
}

.family-member:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 1px;
    height: 10px;
    background-color: #000;
    transform: translateX(-50%);
}

.family-member:first-child:before {
    display: none;
}

.family-member:not(:last-child):after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 1px;
    height: 20px;
    background-color: #000;
    transform: translateX(-50%);
}

form {
    margin-top: 20px;
}

input, button {
    padding: 10px;
    margin: 5px;
}

button {
    cursor: pointer;
}
