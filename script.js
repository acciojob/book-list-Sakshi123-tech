//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate input
    if (!title || !author || !isbn) {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row
    const row = document.createElement('tr');

    // Create cells for each piece of data
    const titleCell = document.createElement('td');
    titleCell.textContent = title;

    const authorCell = document.createElement('td');
    authorCell.textContent = author;

    const isbnCell = document.createElement('td');
    isbnCell.textContent = isbn;

    // Create the clear button
    const actionsCell = document.createElement('td');
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.classList.add('delete');
    clearButton.addEventListener('click', function() {
        row.remove();
    });

    // Append the cells to the row
    actionsCell.appendChild(clearButton);
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(isbnCell);
    row.appendChild(actionsCell);

    // Add the row to the table body
    document.getElementById('book-list').appendChild(row);

    // Clear input fields after adding the book
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});
