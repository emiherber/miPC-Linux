# Mercado Pago

Para cobrar varios items en un solo pago solo es necesario generar múltiples items de preferencias “crearItemPreferencia”.

## Mercado Pago: crearItemPreferencia

En la clase includes/php/MercadoPago/MercadoPago.php agregar la función crearItemPreferencia.

```php
/**
 * Configura la preferencia según tu producto o servicio:
 * Crea un objeto item con los siguientes parametros:
 * @param type $titulo
 * @param type $cantidad
 * @param type $precioUnitario
 * @return \MercadoPago\Item
 */
static function crearItemPreferencia($titulo = '', $cantidad = 1, $precioUnitario = 1) {
  $item = new MercadoPago\Item();
  $item->title = $titulo;
  $item->quantity = $cantidad;
  $item->unit_price = $precioUnitario;
  return $item;
}
```

## Registrar Multiples Items en el Cobro

```php
$mercadoPago = new MercadoPago();
$preferencia = $mercadoPago::crearPreferencia();
$preferencia->external_reference = $view->Cupon->get_numero(); //Cupón padre al cual se debe registrar el pago.
$preferencia->statement_descriptor = $desc; //Descripción que se muestra al levantar el modal de cobro.
//$descX: concepto
//$cantX: cantidad de productos a cobrar, por lo general 1
//$importeX: importe unitario
$itemCompra[] = $mercadoPago::crearItemPreferencia($desc1, $cant1, $importe1);
$id = $mercadoPago::guardarPreferencia($preferencia, $itemCompra); //Obtenemos el id necesario para armar el formulario de cobro.
$mercadoPago::formulario($id, $view->Cupon->get_numero()); //Generamos el formulario de cobro.
```
