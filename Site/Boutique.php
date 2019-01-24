<?php 

/**
 * 
 */

include "header.html";


class boutique  
{
	
}

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>SITE WEB BDE</title>
	<link rel="stylesheet" href="style2.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>
<body>
	<div class="sidenav">
		<br>
		<p class="sidenav-text-1">Rechercher:<p/><br>
			<input type="text" placeholder=""><br><br><br>
			<div>
			  <p class="sidenav-text-1">Trier par:<p/><br>
			  	<label class="container"><p class="sidenav-text-2"><input type="radio" checked="checked" name="radio">Prix Croissant<p/>
		<!-- 		  <span class="checkmark"></span> -->
				</label>
				<label class="container"><p class="sidenav-text-2"><input type="radio" name="radio">Prix Decroissant<p/>
		<!-- 		  <span class="checkmark"></span> -->
				</label>
				<label class="container"><p class="sidenav-text-2"><input type="radio" name="radio">Date<p/>
		<!-- 		  <span class="checkmark"></span> -->
				</label>
				<label class="container"><p class="sidenav-text-2"><input type="radio" name="radio">Popularité<p/>
		<!-- 		  <span class="checkmark"></span> -->
				</label>
				<br>
			</div>
			<div>
				<p class="sidenav-text-1">Catégorie:<p/><br>
			  	<label class="container2"><p class="sidenav-text-2"><input type="radio" checked="checked" name="radio2">Toutes Catégories<p/>
		<!-- 		  <span class="checkmark"></span> -->
				</label>
				<label class="container2"><p class="sidenav-text-2"><input type="radio" name="radio2">Vêtements<p/>
		<!-- 		  <span class="checkmark"></span> -->
				</label>
				<label class="container2"><p class="sidenav-text-2"><input type="radio" name="radio2">Accesoires<p/>
		<!-- 		  <span class="checkmark"></span> -->
				</label>
				<label class="container2"><p class="sidenav-text-2"><input type="radio" name="radio2">Autres<p/>
		<!-- 		  <span class="checkmark"></span> -->
				</label>
			</div>
			<button class="button"><span>Recherche </span></button>
	</div>
	<div class="main">
		  <h2>Sidebar</h2>
		  <p>This sidebar is of full height (100%) and always shown.</p>
		  <p>Scroll down the page to see the result.</p>
		  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
		  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
		  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
		  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
	</div>
    <script>
        $.fn.followTo = function (pos) {
            var $this = this,
                $window = $(window);

            $window.scroll(function (e) {
                if ($window.scrollTop() > pos) {
                    $this.css({
                        position: 'absolute',
                        top: pos
                    });
                } else {
                    $this.css({
                        position: 'fixed',
                        top: 0
                    });
                }
            });
        };

        $('#yourDiv').followTo(250);
    </script>
<?php include "footer.html";?>
</body>
</html>