<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Productos</title>
</head>
<body>
    <div class="container">
        <h4>Nuevo Producto</h4>
        <div class="row">
            <div class="col-xl-12">
                <form action="{{route('producto.store')}}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" name="nombre" required maxlength="100">
                    </div>
                    <div class="form-group">
                        <label for="precio">Precio</label>
                        <input type="text" class="form-control" name="precio" required>
                    </div>
                    <div class="form-group">
                        <label for="observaciones">Observaciones</label>
                        <textarea name="observaciones" id="observaciones" class="form-control" rows="3" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="cantidad">Cantidad</label>
                        <input type="text" class="form-control" name="cantidad" required>
                    </div>
                    <div class="form-group">
                        <label for="estado">Estado</label>
                        <select class="form-select" name="estado">
                            <option value="disponible">Disponible</option>
                            <option value="no_disponible">No disponible</option>
                          </select>
                    </div>
                    <div class="form-group">
                       <div class="mb-3">
                            <label for="imagen" class="form-label">Imagen</label>
                            <input class="form-control" accept="image/*" type="file" id="imagen" name="imagen">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="ciudades">Ciudades</label>
                        <select class="form-select" multiple aria-label="multiple select" name="ciudades[]">
                            @foreach ($ciudades as $id => $ciudad)
                                <option value="{{$id}}">{{$ciudad}}</option>
                            @endforeach
                          </select>
                    </div>

                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Guardar">
                        <input type="reset" class="btn btn-danger" value="Cancelar">
                        <a href="javascript:history.back()">Regresar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>
</html>
