
<html>
<head>
	<title>Add Product</title>

	<script type="text/javascript" src="../js/jquery.js"></script>
    
    <script type="text/javascript" src="../js/addproduct.js"></script>
</head>
<body>
<a href="home.php">Home</a>&nbsp;&nbsp;<a  href="products.php">Products</a>&nbsp;&nbsp;<a href="orders.php">Manual Order</a>&nbsp;&nbsp;<a href="checks.php">Checks</a>
<h1>Add Product</h1>
<form class="add" method="POST" action="../Controllers/submitproduct.php" enctype="multipart/form-data" 	accept-charset="utf-8">
<center>
	<table width="500px"  height="300px">
		<tr>
			<td>
				<label>Product:</label>	
			</td>
			<td>
				<input type="text" id='name' name="name"></input>
			</td>
		</tr>
		<tr>
			<td>
				<label>Price:</label>	
			</td>
			<td>
				<input type="text" id='price' name="price"></input>
			</td>
		</tr>
		<tr>
			<td>
				<label>Category:</label>	
			</td>
			<td>
				<select id='category' name='category'></select>&nbsp;&nbsp;&nbsp;&nbsp;<a href="addcategory.php">Add Category</a>
			</td>
		</tr>	
		<tr>
			<td>
				<label>Product Picture:</label>
			</td>
			<td>
				<input type="file" id='pic' name="pic"></input>
			</td>
		</tr>
		<tr>
			<td align="right">
				<input type="submit" id='submit' name="submit"></input>
			<td>
				<input type="reset"></input>
			</td>
		</tr>
	</table>
</center>
</form>
<?php session_start();?>
<input type="hidden" id="UserId" value="<?php echo $_SESSION['UserId']?>">
<input type="hidden" id="UserType" value="<?php echo $_SESSION['Type']?>">
</body>
</html>