//grab blog_content and post it to server to attempt to save it as a post
const postHandler = async (event) => {
    event.preventDefault();
    const blog_content = document.getElementById("blog-content").value.trim();
    console.log("BLOG CONTENT:");
    console.log(blog_content);
    if (blog_content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({blog_content}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to make that post.');
      }
    }
};
document
.getElementById("post-form")
.addEventListener('submit', postHandler);
  