var allforms=document.querySelectorAll(".reply-form")
for (var x=0;x<allforms.length;x++){
    allforms[x].addEventListener("submit",async (event)=>{
        event.preventDefault();
        //grab the event and access the ''target'' (the data pass through)
        const formData = new FormData(event.target);
        //do weird stuff
        const formProps = Object.fromEntries(formData);
        //grab the id of the form, for referencing purposes
        formProps["id"]=event.target.id
        formProps["blog-content"].trim()
        console.log(formProps);

        //do magic that will save the reply to the db
        if (formProps["blog-content"]) {
            const response = await fetch('/api/reply', {
              method: 'POST',
              body: JSON.stringify({formProps}),
              headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
              document.location.replace('/');
            } else {
              alert('Failed to make that post.');
            }
          }
    })
}