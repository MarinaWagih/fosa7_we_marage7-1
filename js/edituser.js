$(document).ready(function () 
{
	           /////get user id from url ///////////

     var parameter = window.location.search.replace( "?", "" ); // will return the GET parameter 
        var values = parameter.split("=");
         // will return and array as ["name", "sample"] 
         if(values[1]!==null){
          
          $.ajax({
                url:'../Controllers/edit.php?userid='+values[1]+'',
                
                data:'',
                dataType:'text',
                success: function(data){

                        var arr = data.split(':');
                        $('#userid').val(values[1]);
                        $('#name').val(arr[1]);
                        $('#E-mail').val(arr[2]);  
                        $('#RoomNo').val(arr[3]);
                        $('#Ext').val(arr[4]);
                        $('#pp').val(arr[5]);

                         

                  },
          });
       }
       
   	$.post("../Controllers/returnallrooms.php",
   	
	   	function(data)
	   	{
	   		var obj = $.parseJSON(data);
	   		
	   		for(var i = 0 ; i < obj.length ; i++)
	   		{
	   			$("#RoomNo").append("<option value='"+obj[i]["id"]+"'>"+obj[i]['number']+"</option>");
	   		}
	   	}				
	   	
	   	
	   	);
	   	
   	
   	var flag ="0";
   	var name = email = pass  = ext = pp = "0" ;
   	
   	function namevali()
   	{
   		if($('#name').val()=="")
   		{
   			$('#spanname').html(" required ");
   			name = '0';
   		}
   		else
   		{
			name = '1';
   		}
	}
   	
   	function emailvali()
   	{
   		if($('#E-mail').val()=="")
   		{
   			$('#spanemail').html(" required ");
   			email = '0';
   		}
   		else
   		{
			$.post("../Controllers/checkemail.php",{"email":$(this).val()},
			
			function(data)
			{
				if(data=="mawgood")
				{
					$('#spanemail').html("Email already exists");
					email = '0';
				}
				else
				{
					$('#spanemail').html(":D :D ");
					email = '1';
				}
				console.log(data);
			}
			);
   		}
	}
	
    	
	function passvali()
	{
    	if($('#password').val()=="" || $('#confpass').val()=="")
    	{
    		$('#spanpass').html("Required fields");
    		pass = '0';
    	}
    	else
    	{
		    if($('#password').val()!=$("#confpass").val())
		    {
		    	$('#spanpass').html("Don't match");
		    	pass = '0';
		    }
		    else
		    {
		    	$('#spanpass').html("Match");
		    	pass = '1';
		    }
    	}
    }
	   	
	   	
	
    
    function extvali()
    {
        if($('#Ext').val()=="")
    	{
    		$('#spanExt').html("Required field");
    		ext = '0';
    	}
    	else
    	{
		    	ext = '1';
    	}
    }
    
    function ppvali()
    {
        if($('#pp').val()=="")
    	{
    		$('#spanpp').html("Required field");
    		pp = '0';
    	}
    	else
    	{
    		$('#spanpp').html("");
		    pp = '1';
    	}
    }
    
    function formvali()
    {

    	if( name=='1' && email=='1' && pass=='1'  && ext=='1' && pp=='1' )
    	{
    		flag = '1';
    	}
    
  		if(flag=='1')
  		{
  			$("#submit").removeAttr("disabled");
  		}
  		
  		
	}
    
	$("#name").blur(namevali);
	$("#name").change(namevali);
	$("#name").click(namevali);
	$("#name").keyup(namevali);
	  	
	   	
   	$("#E-mail").blur(emailvali);
   	$("#E-mail").change(emailvali);
    $("#E-mail").click(emailvali);
    $("#E-mail").keyup(emailvali);
    
    $("#password").blur(passvali);
    $("#password").change(passvali);
    $("#password").click(passvali);
    $("#password").keyup(passvali);
    
    $("#confpass").blur(passvali);
    $("#confpass").change(passvali);
    $("#confpass").click(passvali);
    $("#confpass").keyup(passvali);
    
    
    $("#Ext").blur(extvali);
    $("#Ext").change(extvali);
    $("#Ext").click(extvali);
    $("#Ext").keyup(extvali);
    
   	$("#pp").blur(ppvali);
   	$("#pp").change(ppvali);
   	$("#pp").click(ppvali);
   	$("#pp").keyup(ppvali);
   	
    $("#reset").click(function(){
		flag ="0";
		name = email = pass  = ext = pp = "0" ;
    });
    
    
    $("form :input").blur(formvali);
    $("form :input").change(formvali);
	$("form :input").click(formvali);
	$("form :input").keyup(formvali);
	
});




