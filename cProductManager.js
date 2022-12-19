
class cProductManager{
    //constructor por defecto
    constructor(products=[]){ 
        this.products = products;
        this.id = 0;
    }
    //metodo agregar producto
    addProduct (title, description, price, thumbnail, code, stock){
        
        if(!(this.products.find(product => product.code === code))){
            if(title && description && price && thumbnail && code && stock){
                let product = { title: title, description: description, price: price, thumbnail: thumbnail, code: code, stock: stock, id: this.id}
                this.id++;
                this.products.push(product);
                console.log(`producto con codigo ${code} agregado correctamente\n\n`)
            }else{
                console.log("verificar datos ingresados, los mismos no pueden ser nulos.\n\n")   
            }
        }else{
            console.log(`El codigo ${code} ya se encuentra creado\n\n`)
        }
    }
    //metodo retornar productos en consola
    getProducts(){
        console.log("Productos creados:\n")
        console.log(this.products)
        console.log("\n\n")
    }
    //metodo obtener producto x Id
    getProductbyId(id){
         console.log((this.products.find(product => product.id == id))|| "Not Found"); 
    }
}
   
//Se crea objeto de clase ProductManager
let adminProducts = new cProductManager();

//Se intenta agregar producto con campo nulo

adminProducts.addProduct("Leone","Auto Subaru",30000,"","SUBARU_LEONE_01",10);

//Se agrega productos

adminProducts.addProduct("Leone","Auto Subaru",30000,"thumbnail_test1","SUBARU_LEONE_01",10);
adminProducts.addProduct("Maxima","Auto Nissan",10000,"thumbnail_test2","NISSAN_MAXIMA_01",5);
adminProducts.addProduct("Corolla","Auto Toyota",12000,"thumbnail_test2","TOYOTA_COROLLA_01",22);

//Se muestran productos
adminProducts.getProducts();

//Se intenta agregar producto ya existente
adminProducts.addProduct("Corolla","Auto Toyota",12000,"thumbnail_test2","TOYOTA_COROLLA_01",22);

//Se muestra producto por busqueda de Id que existe 2

adminProducts.getProductbyId(2);


//Se muestra producto por busqueda de Id que no existe 4

adminProducts.getProductbyId(4);