<?php
if(isset($_POST['programs'])){
	$programsArray = $_POST['programs'];
	$i = 0;
	foreach ($programsArray as $key => $value) { 
        $i++;
        echo "Program $i || Array Key = $key || Value = $value<br />"; 
    }
	exit();
}
?>
<h3 style='color:tomato'>Welcome to Mok's Tutorial!</h3>
<form action="multiSelect.php" method="post" name="myform">
  What program do you want to learn? <br>
  **Hold "Ctrl" key to select multiple**
  <br><br>
  <select name="programs[]" multiple="multiple">
      <option value="HTML5">HTML5</option>
      <option value="CSS3">CSS3</option>
      <option value="Javascript">Javascript</option>
      <option value="PHP">PHP</option>
      <option value="MySQL">MySQL</option>
  </select>
  <br><br>
  <input name="myBtn" type="submit">
</form>