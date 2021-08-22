import React from "react"
  
export const FileAndData = () => {  
  
  return (
    <>
   
      <h5>Create user</h5>

     <form action="/stats" enctype="multipart/form-data" method="post">
        <div class="form-group">          
          <input type="text" class="form-control" placeholder="Name" name="name" />
          <input type="text" class="form-control" placeholder="Surname" name="surname" />
          <input type="text" class="form-control" placeholder="Email" name="email" />
          <input type="file" class="form-control-file" name="uploaded_file"  />
          <input type="submit" value="Save user data" class="btn btn-default" />            
        </div>
      </form>
      
  </>
  );
  
}

