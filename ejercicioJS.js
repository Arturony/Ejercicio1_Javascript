//Punto 1
function secret(arreglo, fun, num)
{
    var arra = fun(arreglo, num);
    console.log(arra);
}

function encrypt(arreglo, num)
{
    for(i = 0; i < arreglo.length; i++)
    {
        arreglo[i] += num;
    }
    return arreglo;
}

function decrypt(arreglo, num)
{
    for(i = 0; i < arreglo.length; i++)
    {
        arreglo[i] -= num;
    }
    return arreglo;
}

//Punto 2
function fibbo(n)
{
    const fibb = (n) => n<2 ? n : fibb(n-1) + fibb(n-2);
    console.log(fibb(n));
}

//punto 3

var fun = (url) =>
    new Promise((resolve, reject) =>
    {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload() = function()
        {
            if(req.status == 200)
            {
                resolve(req.response);
            }
            else
            {
                reject(req.statusText);
            }
        };   
        req.send();
    });

function product()
{
    var url1 = "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json";
    var url2 = "https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json";
    var idP = "";
    var num = 0;
    var nomP = "";
    fun(url1).then((value) =>
    {
        for(i = 0; i < value.length; i++)
        {
            if(value[i].cantidad >= num)
            {
                idP = value[i].idproducto;
                num = value[i].cantidad;
            }
        }
    }).catch((value) => {console.warn(value);});
    
    fun(url2).then((value) =>
    {
        for(i = 0; i < value.length; i++)
        {
            if(value[i].idproducto == idP)
            {
                nomP = value[i].nombreProducto;
            }
        }
    }).catch((value) => {console.warn(value);});

    console.log(nomP + " " + num);
}
