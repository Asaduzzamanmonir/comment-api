const getComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => getDisplayComment(data))
}
// getComment()

const getDisplayComment = (comments) => {
    const commentsDiv = document.getElementById('comments-div')

    comments.forEach(comment => {
        // console.log(comment.id);
        const commentDiv = document.createElement('div')
        commentDiv.innerHTML = `
        <h4> Email: ${comment.email}</h4>
        <p> Comment: ${comment.body}</p>
        <button onclick="getCommentDetails('${comment.id}')"> Comment Details </button>
        `;
        commentsDiv.appendChild(commentDiv)
    })
}

const getCommentDetails = commentId => {
    console.log(commentId);
    fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(res => res.json())
        .then(data => getDisplayDetails(data))
}

const getDisplayDetails = details => {
    const detailsDiv = document.getElementById('comment-details')
    const detailDiv = document.createElement('div');
    detailsDiv.textContent = '';
    detailDiv.innerHTML = `
        <h4> ID: ${details.id}</h4>
        <h4> Email: ${details.email}</h4>
        <p> Comment: ${details.body}</p>
    `;
    detailsDiv.appendChild(detailDiv)
}

