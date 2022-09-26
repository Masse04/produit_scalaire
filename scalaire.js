function dot_product (n , u){
    var ps = 0
    for (let i = 0 ; i < u.length ; i++)
        ps += n[i] * u[i]
    console.log(ps)
}

var vecteur1 = [5, 8, 9 , 1]
var vecteur2 = [6 , 7, 3, 10]
var result = 1
if(dot_product(vecteur1, vecteur2) = 0)
    console.log('les 2 vecteurs sont orthogonaux')
else
    result = dot_product(vecteur1,vecteur2)
