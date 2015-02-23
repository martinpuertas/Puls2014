var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$mostrar = $('#mostrar-form'),
	$contenido = $('#contenido'),
	$post = $('.item').first();

function mostrarFormulario(){
	$form.slideToggle();
	return false;
}
function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$contenido.prepend($clone);
	mostrarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.fadeIn();

	return false;
}
//Eventos
$mostrar.click(mostrarFormulario);
$form.on('submit', agregarPost );