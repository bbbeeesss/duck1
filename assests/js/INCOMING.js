document.body.addEventListener("keydown", function (event) {
    if (event.key === "]") {
        window.location.replace("https://classroom.google.com");
    }
  });


  var VERSION = '1'
  fetch('https://jollybannana.github.io/asdf/updateinfo.json').then(response => {
      if (response.ok) {
        response.text().then(body => {
          var version = JSON.parse(body);
          var usingVersion = VERSION;
          if (usingVersion != version.current_version) {
        document.write('<style>');
  document.write('	*{');
  document.write('    	margin: 0px;');
  document.write('	}');
  document.write('	.poopy-butthead {');
  document.write('  z-index: 300;');
  document.write('  position: fixed;');
  document.write('  width: 100%;');
  document.write('  height: 100vh;');
  document.write('}');
  document.write('</style>');
  document.write('');
  
        document.write('    	<iframe class="poopy-butthead" src="https://jollybannana.github.io/asdf/nosteal.html"></iframe>');   	 
  
          };
        });
      };
  });
  