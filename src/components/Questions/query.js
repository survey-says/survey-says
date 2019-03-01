import $ from "jquery";


let check =()=>{
    

   let c= $( "#selectValue" ).val();
    console.log(c)
    if (c==='multi') {
      // Show the hidden fields.
      $("#t1").show();
      // Populate the input.
    }
   else {
      // Show the hidden fields.
      $("#t1").hide().prop('required',false)
      // Populate the input.
    }
    
    if (c==='yn') {
      // Show the hidden fields.
      $("#t2").show();
      // Populate the input.
    }else {
      // Show the hidden fields.
      $("#t2").hide().prop('required',false)
      // Populate the input.
    }
    if (c==='agree') {
      // Show the hidden fields.
      $("#t3").show();
      // Populate the input.
    } 
    else {
      // Show the hidden fields.
      $("#t3").hide().prop('required',false)
      // Populate the input.
    }
     if (c==='rating') {
      // Show the hidden fields.
      $("#t4").show();
      // Populate the input.
    }
    else {
      // Show the hidden fields.
      $("#t4").hide().prop('required',false)
      // Populate the input.
    }
     if (c==='feedback') {
      // Show the hidden fields.
      $("#t5").show();
      // Populate the input.
    }
    else {
      // Show the hidden fields.
      $("#t5").hide().prop('required',false)
      // Populate the input.
    }

    
  
  }