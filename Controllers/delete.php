<?php

require_once('../Modeles/User.php');
require_once('../Modeles/Item.php');

if(isset($_GET['userid'])){
		
		$userid=$_GET['userid'];
		$conn= new User();
		$result=$conn->deleteUser('id',$userid);
		echo $result ;
	}

if(isset($_GET['productid'])){
		
		$productid=$_GET['productid'];
		$conn= new Item();
		$result=$conn->deleteItem('id',$productid);
		echo $result ;
	}	


?>
