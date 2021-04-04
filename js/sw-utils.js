
// Guardar en el cache dinamico
function actualizaCacheDinamico (dynamicCache, req, res) {

    if( res.ok ) {
        // Si lo hizo entonces quiere decir que la respuesta tiene data y tengo que almacenar en el cache:
        return caches.open( dynamicCache ).then( cache => {
            cache.put(req, res.clone());//Almaceno en el cache la request, dos argumen, 1ro la req  2do la res de ese req
            return res.clone();
        })
    }else{
        return res;
    }

};




