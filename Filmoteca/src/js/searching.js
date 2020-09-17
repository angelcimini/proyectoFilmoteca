function doSearch(){
    const referencia = document.getElementById('tabla');
    const inputBuscar = document.getElementById('busqueda');
    const tr = referencia.getElementsByTagName("tr");
    const filter = inputBuscar.value.toUpperCase();
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
}                
}
