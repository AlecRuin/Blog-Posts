var deleteposts = document.querySelectorAll(".delete-post-form")
for (var x=0; x<deleteposts.length;x++){
    deleteposts[x].addEventListener("submit",async(event)=>{
        event.preventDefault()
        const response = await fetch("/api/posts/",{
            method:"DELETE",
            body: JSON.stringify({id:event.target.id}),
            headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
              document.location.replace('/');
            } else {
              alert('Failed to make that request.');
            }
    })
}
var deletereplies = document.querySelectorAll(".delete-reply-form")
for (var x=0; x<deletereplies.length;x++){
    deletereplies[x].addEventListener("submit",async(event)=>{
        event.preventDefault()
        const response = await fetch("/api/reply/",{
            method:"DELETE",
            body: JSON.stringify({id:event.target.id}),
            headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
              document.location.replace('/');
            } else {
              alert('Failed to make that request.');
            }
    })
}